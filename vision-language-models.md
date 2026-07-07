# Vision-Language Models for Remote Sensing

Covers vision-language foundation models (RS-VLMs / RS-MLLMs) for Earth observation, plus adaptation and build patterns. Read this when the task involves language — captioning, VQA, grounding, dialogue, retrieval, change description — or when deciding whether a VLM is the right tool at all. Companion to `foundation-models.md` (pure-vision GeoFMs).

## When a VLM is (and isn't) the right tool

VLMs earn their cost when the output is language or the query is language: open-vocabulary questions, grounded dialogue, report generation, retrieval by description, interactive analysis. They are usually the WRONG tool for fixed-taxonomy dense prediction — a fine-tuned GeoFM + segmentation head beats a 7B VLM on mIoU at 1/20th the compute. Don't let the chat interface seduce you into using an MLLM for what is really a closed-set classification problem.

## The model landscape

Organized by capability generation, not just date.

### Contrastive (CLIP-style) — retrieval & zero-shot

- **RemoteCLIP** (2024): CLIP fine-tuned on RS image-text. Zero-shot classification, cross-modal retrieval. Lightweight; still the default embedding model for text→image search over archives.
- **SkyScript / SkyCLIP** (2023): the data contribution — 2.6M image-text pairs mined from OpenStreetMap tags. The OSM-mining recipe matters more than the weights.
- **GeoRSCLIP / RS5M** (2023): 5M RS image-text pairs; strong retrieval baselines.

### Instruction-tuned conversational (LLaVA generation)

- **RSGPT** (2023): pioneer; captioning + VQA via instruction tuning on RSICap. Historically important, superseded.
- **GeoChat** (2024, MBZUAI): the reference recipe — LLaVA-1.5 + RS instruction data. First grounded RS VLM: region-in (box prompts) and region-out (oriented bboxes in text). Start here when dissecting the field.
- **LHRS-Bot / LHRS-Bot-Nova** (2024): multi-level vision-language alignment, curriculum learning, VGI/OSM-enhanced data (LHRS-Align). Also gave the field LHRS-Bench.
- **EarthGPT** (2024): multi-sensor — optical, SAR, infrared in one model (MMRS-1M dataset). 13B.
- **SkySenseGPT** (2024): scene-graph generation + relation reasoning (FIT-RS).
- **EarthDial** (2024, IBM/MBZUAI): multi-spectral, multi-temporal, multi-resolution dialogue incl. bi-temporal change description. 11M+ instruction pairs; 4B — small but data-rich.

### Grounded / pixel-level (2025+)

- **GeoPixel** (2025, MBZUAI): pixel grounding — interleaved segmentation masks inside conversation; handles ~4K imagery (GeoPixelD data).
- **EarthMind** (2025): spatial attention prompting + cross-modal (optical+SAR) fusion; multi-granular image→region→pixel. EarthMind-Bench.

### Agentic / search-based (2025–26)

- **GeoViS** (2025): geospatially-rewarded iterative visual search — tree-structured hypothesis refinement over large scenes.
- **GeoEyes** (2026): on-demand visual focusing (zoom-in) for ultra-high-res, evidence-grounded answers.
- These respond to the resolution-vs-context problem: RS scenes are 10k×10k px, VLM encoders see ~1k.

### Robustness line

- **RemoteShield** (2026): consistent behavior under realistic input perturbations (semantic-equivalence clusters + preference learning). Read for eval methodology even if you don't use the model.

## Choosing a model

| Task | Pick |
| --- | --- |
| Text→image retrieval over an archive | RemoteCLIP / GeoRSCLIP embeddings + vector DB |
| Zero-shot classification with text labels | RemoteCLIP; OpenCLIP as baseline |
| VQA / captioning, RGB | GeoChat or LHRS-Bot (open weights, reproducible recipe) |
| Multi-sensor dialogue (SAR/IR/MSI) | EarthDial, EarthGPT |
| Bi-temporal change description | EarthDial; CDChat |
| Referring segmentation / pixel-grounded chat | GeoPixel, EarthMind |
| Ultra-high-res scene reasoning | GeoEyes / GeoViS pattern (agentic tiling), or tile + GeoPixel |
| Anything closed-set and dense | Not a VLM — use a GeoFM + head (see foundation-models.md) |

## The standard architecture (know this cold)

Every instruction-tuned RS-VLM is a variant of:

```
image → vision encoder (CLIP/SigLIP ViT, frozen-ish)   [B, 576, 1024]
      → projector (MLP or Q-Former)                     [B, 576, d_llm]
      → interleaved with text tokens → LLM (7B-ish)     autoregressive text out
```

Differences that actually matter between models:

1. **Vision encoder choice** — nearly all use CLIP-family. This is the field's known weakness (see pitfalls).
2. **Grounding mechanism** — coordinates as text tokens (GeoChat: oriented bboxes), special tokens + mask decoder (GeoPixel: SAM-style head), or attention prompting (EarthMind).
3. **Resolution handling** — fixed 336px (early), AnyRes tiling (GeoPixel), agentic zoom (GeoEyes).
4. **Data construction** — the real differentiator. OSM/VGI mining (SkyScript, LHRS), existing-dataset conversion to instructions (MMRS-1M), LLM-generated captions (RSTeller).

## Training recipe (LLaVA-style, the field default)

Stage 1 — **alignment**: freeze encoder + LLM, train projector only, on image-caption pairs. Cheap (hours on 8 GPUs).
Stage 2 — **instruction tuning**: unfreeze LLM (or LoRA it), train on multi-task instruction conversations. This is where task capabilities come from.
Optional Stage 3 — **grounded/preference tuning**: mask decoders, DPO for robustness (RemoteShield), RL for search policies (GeoViS).

For building your own: LoRA (r=16–64) on the LLM + full projector training is the budget-sane default. Full LLM fine-tuning only pays off past ~1M instruction samples.

## Adaptation patterns

- **Zero-shot prompting**: try first, always. Modern RS-VLMs generalize better than their benchmarks suggest on common scenes, worse on rare sensors/regions.
- **Instruction fine-tuning on your domain**: 10k–100k instruction pairs converted from your labeled data. Highest leverage move. Keep 20–30% general RS instructions mixed in to avoid catastrophic forgetting of conversational ability.
- **Encoder swap** (research-grade): replace CLIP with a GeoFM encoder (DOFA, Prithvi, SoftCon), retrain projector (Stage 1), then LoRA (Stage 2). This is the G11 experiment — attacks the CLIP-blindness bottleneck and enables multispectral input.
- **RAG over embeddings**: RemoteCLIP retrieval feeding crops to a stronger general VLM often beats an RS-specific 7B model. Cheap, underrated.

## Multi-sensor input into a VLM

Three observed patterns:

1. **Modality-specific encoders + shared projector** (EarthMind): one encoder per sensor, fuse before LLM.
2. **Unified encoder with band adaptation** (EarthDial): adapt patch embed per input type.
3. **Render to pseudo-RGB** (most models, silently): SAR→grayscale RGB, MSI→true-color composite. Loses SWIR/red-edge signal — same sin as in pure-vision land. Check what a model actually does before trusting its "SAR support".

## Evaluation

- **Benchmarks:** LHRS-Bench (understanding/reasoning), EarthMind-Bench (multi-granular, multi-sensor), RSMMVP (vision-centric probes — exposes CLIP-blindness), VRSBench, GeoChat-Bench. All young; check for train-test contamination via shared source datasets (DOTA, DIOR appear everywhere on both sides).
- **Always report:** grounding IoU separately from text metrics; hallucination rate (object-presence probes); performance vs a general VLM baseline (Qwen-VL/GPT-4V-class) — RS-specific models sometimes lose to strong generalists on reasoning while winning on grounding.
- **Robustness:** perturb inputs (compression, haze, band noise) — RemoteShield showed most RS-MLLMs collapse.

## Common pitfalls

- **Using a VLM for closed-set dense prediction** — a GeoFM + head is better, faster, cheaper.
- **Trusting "multi-sensor" claims** — often pseudo-RGB rendering under the hood.
- **CLIP-blindness inheritance** — counting, relative positions, small objects, fine-grained attributes fail systematically (RSMMVP). If your task depends on these, test before committing.
- **Resolution mismatch** — feeding a 10k×10k scene resized to 336px destroys the objects you're asking about. Tile or use AnyRes/agentic models.
- **Coordinates-as-text fragility** — bbox tokens degrade with instruction tuning on new data; re-validate grounding after every fine-tune.
- **Benchmark contamination** — many instruction sets are converted from the same public datasets used for eval.
- **Ignoring the generalist baseline** — always compare against a frontier general VLM; the gap is smaller than the papers imply and shrinking.

## Reading someone's RS-VLM checkpoint

1. Identify the base LLM (Vicuna/LLaMA/Qwen/InternLM) and vision encoder (key patterns: `vision_tower`, `visual_encoder`, `clip`).
2. Find the projector (`mm_projector`, `q_former`, `abstractor`) — MLP or query-based?
3. Check for LoRA (`lora_A/B`) vs full fine-tune.
4. Look for grounding machinery: mask decoder (`sam`, `seg_head`), special token embeddings (`<seg>`, `<box>`), coordinate vocabulary.
5. Check the image preprocessing config — resolution, tiling, band handling. This tells you the real sensor support.
6. Map to a generation above (contrastive / instruct / grounded / agentic) and judge claims accordingly.
