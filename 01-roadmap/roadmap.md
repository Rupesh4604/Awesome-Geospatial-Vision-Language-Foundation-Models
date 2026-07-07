# GeoFM Learning Roadmap — fundamentals → next-gen design

Calibrated for medium DL + medium geospatial background. Each phase: core papers, code to read/run, and one exercise that forces understanding. Progress checkboxes live in dashboard.html.

## Phase 1 — SSL & ViT foundations refresh (1–2 weeks)
The pretraining paradigms every GeoFM builds on.
- **Papers:** ViT (Dosovitskiy 2020) · MAE (He 2021) · DINOv2 (2023) · CLIP (2021) · I-JEPA (2023)
- **Code:** run `facebookresearch/mae` inference; read the masking + decoder code (~300 lines that explain half the GeoFM literature)
- **Exercise:** implement MAE patch masking + reconstruction loss from scratch on CIFAR; note which hyperparameters matter (mask ratio 75% — why?)

## Phase 2 — EO data physics (1 week)
What makes satellite data NOT ImageNet.
- **Topics:** Sentinel-1 SAR (VV/VH, speckle) · Sentinel-2 13-band spectra (red-edge, SWIR) · GSD vs image size · orbits & revisit · Landsat/HLS · hyperspectral
- **Code:** pull a Sentinel-2 L2A tile (via `pystac-client` + Planetary Computer), plot all 13 bands, compute NDVI/NDWI
- **Exercise:** write the "channels are not RGB" input adapter — modify a ViT patch embed from 3→13 channels initializing from RGB weights

## Phase 3 — Core GeoFM lineage (2–3 weeks)
Dissect in order; each fixes a weakness of the previous. Use 02-papers/TEMPLATE.md for every one.
1. **SatMAE** (2022) — MAE + spectral group tokens + temporal encoding
2. **Scale-MAE** (2023) — GSD-aware positional encoding (scale problem)
3. **Prithvi-EO 2.0** (2024) — temporal stacks, location embeddings, 600M scale
4. **Clay v1.5** (2024) — sensor-aware embeddings, many sensors
5. **DOFA** (2024) — dynamic weight generation from wavelength (sensor-agnostic input)
- **Code:** fine-tune Prithvi-EO-2.0 (TerraTorch) on a flood/burn-scar dataset; linear-probe Clay on EuroSAT
- **Exercise:** table of the 5 models: tokenization × positional encoding × objective × what breaks with a new sensor

## Phase 4 — Multimodal, temporal & the 2025–26 frontier (2–3 weeks)
1. **CROMA** (2023) — SAR+optical contrastive+MAE
2. **TerraMind** (2025, IBM/ESA) — any-to-any generative, 9 modalities, dual-scale tokens, Thinking-in-Modalities
3. **Galileo** (2025) — flexible multimodal inputs, global+local objectives
4. **AlphaEarth Foundations** (2025, DeepMind) — 64-dim embedding *field* paradigm (not a backbone!)
5. **OlmoEarth** (2025, AI2) — open end-to-end stack; latent MIM
6. **Copernicus-FM / FLORO / GeoMeld / TerraFlow** (2025–26) — availability-aware inputs, JEPA + caption alignment trends
- **Exercise:** compare "backbone" vs "embedding field" paradigms — when is each right? Write 1 page.

## Phase 5 — Evaluation & adaptation (1–2 weeks)
Where next-gen claims live or die.
- **Benchmarks:** GEO-Bench · **GEO-Bench-2** (2025, capability-grouped) · PANGAEA — read "No One Knows the State of the Art in GeoFMs" (2026) for why eval is broken
- **Adaptation:** linear probe → LoRA (r=8–16 on attention) → decoder-only FT → full FT; UPerNet/DPT heads for dense tasks
- **Code:** run GEO-Bench-2 eval harness on 2 models; reproduce one leaderboard number
- **Exercise:** design an eval protocol that would actually rank GeoFMs fairly — cross-region hold-outs, few-shot scaling curves (100/1k/10k labels)

## Phase 5b — VLM foundations (Vision-Language track, 1–2 weeks)
How language gets bolted onto vision — the recipe every RS-VLM uses.
- **Papers:** LLaVA-1.5 (projector + instruction tuning) · SigLIP · Qwen-VL · "Vision-Language Modeling Meets Remote Sensing" survey (2025)
- **Datasets to study:** SkyScript · RSTeller · LHRS-Align — all mine OSM/VGI for captions; data construction IS the field's core trick
- **Exercise:** trace LLaVA's forward pass — where image tokens enter the LLM, what the projector learns, why instruction data quality dominates

## Phase 5c — RS-VLM lineage dissection (2–3 weeks)
Use 02-papers/TEMPLATE.md; add a "grounding granularity" row to Layer 3.
1. **GeoChat** (2024) — LLaVA-on-RS, oriented-bbox grounding
2. **LHRS-Bot** (2024) — multi-level alignment, curriculum learning
3. **EarthGPT / EarthDial** (2024) — multi-sensor (SAR/IR/MSI), bi-temporal change dialogue
4. **GeoPixel** (2025) — pixel grounding, interleaved masks, 4K imagery
5. **EarthMind** (2025) — spatial attention prompting, image→region→pixel granularity
6. **GeoViS / GeoEyes** (2025–26) — agentic visual search over huge scenes
- **Also read:** RSMMVP benchmark (why CLIP-blind pairs break RS MLLMs)
- **Code:** run GeoChat or GeoPixel inference on your own imagery; catalog failure cases
- **Exercise:** matrix — vision encoder × alignment method × grounding granularity × sensors supported

## Phase 5d — Build your own RS-VLM (2–4 weeks)
The build project that ties both tracks together.
1. **Swap experiment:** replace CLIP in LLaVA with a GeoFM encoder (DOFA or Prithvi features), retrain only the projector
2. **Data:** build a small domain-specific RS instruction set via the RSTeller/SkyScript OSM method
3. **Train:** LoRA the LLM on RS instructions
4. **Eval:** LHRS-Bench, EarthMind-Bench, RSMMVP — does the GeoFM encoder beat CLIP on grounding + multispectral queries?

## Phase 6 — Gap-finding & next-gen design (ongoing)
- Maintain 04-next-gen/gap-map.md from every paper dissection
- Weekly arXiv/HF scan (ask Claude — or schedule it)
- When 2–3 gaps intersect → draft architecture spec → design review with rs-dl-architect → prototype smallest viable version → eval on GEO-Bench-2 subset
