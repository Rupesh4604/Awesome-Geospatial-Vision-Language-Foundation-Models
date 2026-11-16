# Next-Gen Gap Map — open problems in GeoFMs (updated Nov 2026)

Seeded from current literature. Add evidence from each paper dissection. When 2–3 gaps intersect, that's a design candidate.

## G1 — No model dominates
GEO-Bench-2 (2025): no single GFM wins across tasks; choice depends on sensor/resolution/task. "No One Knows the SOTA in GeoFMs" (2026) shows eval protocols are inconsistent enough that rankings flip.
**Opportunity:** models (or routing/composition systems) robust across capability groups; honest eval.

## G2 — Sensor-agnosticism vs performance tradeoff
DOFA/Clay/FLORO handle arbitrary sensors but specialist models still win per-sensor (e.g., SpectralEarth ≫ DOFA on hyperspectral crops: 93.5% vs 62.6%).
**Opportunity:** dynamic capacity allocation per sensor; wavelength-conditioned experts (MoE over spectra?).

## G3 — Temporal modeling is shallow
Most GeoFMs treat time as a few stacked frames. Real EO signal is irregular, long-horizon, per-pixel (phenology, change). AlphaEarth's time-axial attention and Presto point at it but don't solve dense long-sequence spatiotemporal learning. *2025–26 evidence:* AgriFM (multi-scale crop phenology, Video-Swin) and T-JEPA (Δt-conditioned latent prediction over irregular revisits) are the most direct attacks so far. Both stay sequence-short or domain-specific.
**Opportunity:** native irregular-time architecture; state-space/Mamba over time × ViT over space.

## G4 — Scale/GSD generalization
Scale-MAE started it; still weak. Models pretrained at 10–30m degrade on 0.3m aerial and vice versa. *2025–26 evidence:* FlexiMo (parameter-free GSD recalibration on DOFA), RAMEN (resolution as a controllable output parameter, strong on PANGAEA), MaRS (0.35 m SAR–optical pretraining). VHR-Bench (2026) benchmarks the transfer directly.
**Opportunity:** GSD-conditioned tokenization, multi-resolution pyramids in pretraining.

## G5 — Backbone vs embedding-field paradigm split
AlphaEarth produces a global 64-dim embedding field (analysis-ready, but frozen, weak transferability/interpretability per ag benchmarks); classic GeoFMs give adaptable backbones.
**Opportunity:** hybrid — adaptable backbone that emits queryable global embedding fields; or distill fields → backbone.

## G6 — Multimodal fusion is still early
TerraMind's any-to-any generation + Thinking-in-Modalities is promising; SAR+optical+hyperspectral+weather+text jointly remains open. GeoLink (NeurIPS 2025) now uses OSM graphs as a pretraining signal, but only with RGB imagery. MaRS (AAAI 2026) opens VHR SAR–optical fusion. UniFlow-RS (2026) tries one generative predictor across tasks.
**Opportunity:** vector/raster/text unified tokenization; physics-consistent cross-sensor generation.

## G7 — Geographic generalization & fairness
Cross-region transfer is brutal and rarely front-and-center in evals. Training data skews to well-imaged regions. *2025–26 evidence:* FairRSFM (2026) shows aggregate metrics hide biome disparities (Prithvi-EO 2.0: 90.98% macro-F1 overall vs 83.72% mean worst-group on m-EuroSAT).
**Opportunity:** region-held-out pretraining curricula, geographic domain adaptation as a first-class objective.

## G8 — Label-free dense supervision
JEPA-style latent prediction (GeoMeld, OlmoEarth latent MIM) is displacing pixel reconstruction. Pixel MAE wastes capacity on radiometric noise.
**Opportunity:** latent-space objectives tuned to EO physics (speckle-invariant, atmosphere-invariant).

## G9 — Compute & data efficiency
600M+ params standard; most users fine-tune on <10k labels. GFM (2023) showed continual pretraining beats from-scratch at fraction of cost; GeoSANE (2026) generates weights from existing FMs.
**Opportunity:** efficient continual pretraining recipes; distillation from ensembles of GeoFMs.

## G10 — VLM convergence & agents
GeoChat/EarthGPT line vs pure-vision GeoFMs still separate. Reasoning over embeddings + maps + text (Earth AI, 2025) is emerging. *2025–26 evidence:* tool agents (Earth-Agent with 104 MCP tools, ThinkGeo, GeoDisaster) wrap EO products rather than encode them. AlignJEPA aligns a frozen GeoFM (AnySat) to text cheaply. MLRS argues a generalist VLM plus tool RL is enough.
**Opportunity:** GeoFM as vision encoder for an EO-native VLM with grounded, geo-referenced outputs.

## G11 — VLM: CLIP-blind vision encoding
RSMMVP (2025): RS MLLMs inherit CLIP's failure modes — weak spatial reasoning, counting, fine-grained grounding. The vision encoder, not the LLM, is the bottleneck.
**Opportunity:** EO-native encoders (DOFA/Prithvi-class) inside VLMs; multi-encoder fusion. (This is the Phase 5d experiment.)

## G12 — VLM: RGB-only inputs
Nearly all RS-VLMs consume RGB crops. Multispectral/SAR/temporal dialogue barely exists — EarthDial and EarthGPT are early steps. *2025–26 evidence:* TerraScope (2026) adds optical+SAR fusion and bi-temporal reasoning with pixel masks. Multispectral bands still enter almost no VLM.
**Opportunity:** band-aware visual tokenization for LLM contexts; SAR+optical joint dialogue; time-series QA ("what changed between May and July?").

## G13 — VLM: resolution vs context window
RS scenes are 10k×10k px; VLM vision encoders see ~1k. GeoPixel (tiling), GeoEyes (focusing), GeoViS (agentic search) patch it; no native solution. *2025–26 evidence:* LRS-VQA token pruning, ZoomSearch (training-free zoom), GeoScope (program execution). GeoScope measures a ~5-object 'counting horizon' per view for 8 open VLMs. XLRS-Bench is the standard UHR test.
**Opportunity:** hierarchical/foveated visual tokenization; zoomable evidence-grounded reasoning.

## G14 — VLM: hallucination, robustness, eval
RS MLLMs hallucinate objects; break under realistic perturbations (RemoteShield 2026). Benchmarks young, saturating, contamination-prone. *2025–26 evidence:* RL reasoners add *unfaithful chains*. GeoSolver (token-level process reward model), FaithRS (hallucination-aware RL) and ReDiS respond. AESP (2026) measures whether grounding evidence actually supports the answer. RS-HyRe-R1 names RL-induced 'perceptual inertia'.
**Opportunity:** geo-grounded factuality (verify answers against OSM/GIS layers); robustness training; contamination-free evals.

## The convergence thesis (next-gen candidate zone)
The two tracks are merging: G10+G11+G12 intersect at **"a GeoFM-encoded, multi-sensor, pixel-grounded EO-native VLM"** — no current model has all three. TerraMind (any-to-any) + GeoPixel (pixel grounding) + EarthDial (multi-sensor dialogue) each hold one piece.

**Nov 2026 revision:** TerraScope (2026) now combines pixel grounding (SAM-2 decoder, masks inside CoT), optical+SAR fusion and bi-temporal reasoning in one model. Its encoder is still InternVL3's CLIP-class ViT, though, and it takes no multispectral bands. The remaining gap is narrower and sharper: **swap a band-aware GeoFM encoder (DOFA/RAMEN/TerraMind-class) into the TerraScope-style recipe** (G11+G12), and evaluate on TerraScope-Bench + AESP + RSMMVP. Counter-hypothesis to test: MLRS (2026) gets competitive OOD results with a generalist VLM + SAM3 tool RL and no RS-specific architecture.

---

## My design candidates
(append ideas here: gaps targeted, sketch, smallest viable prototype)
