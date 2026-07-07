# Next-Gen Gap Map — open problems in GeoFMs (July 2026)

Seeded from current literature. Add evidence from each paper dissection. When 2–3 gaps intersect, that's a design candidate.

## G1 — No model dominates
GEO-Bench-2 (2025): no single GFM wins across tasks; choice depends on sensor/resolution/task. "No One Knows the SOTA in GeoFMs" (2026) shows eval protocols are inconsistent enough that rankings flip.
**Opportunity:** models (or routing/composition systems) robust across capability groups; honest eval.

## G2 — Sensor-agnosticism vs performance tradeoff
DOFA/Clay/FLORO handle arbitrary sensors but specialist models still win per-sensor (e.g., SpectralEarth ≫ DOFA on hyperspectral crops: 93.5% vs 62.6%).
**Opportunity:** dynamic capacity allocation per sensor; wavelength-conditioned experts (MoE over spectra?).

## G3 — Temporal modeling is shallow
Most GeoFMs treat time as a few stacked frames. Real EO signal is irregular, long-horizon, per-pixel (phenology, change). AlphaEarth's time-axial attention and Presto point at it but don't solve dense long-sequence spatiotemporal learning.
**Opportunity:** native irregular-time architecture; state-space/Mamba over time × ViT over space.

## G4 — Scale/GSD generalization
Scale-MAE started it; still weak. Models pretrained at 10–30m degrade on 0.3m aerial and vice versa.
**Opportunity:** GSD-conditioned tokenization, multi-resolution pyramids in pretraining.

## G5 — Backbone vs embedding-field paradigm split
AlphaEarth produces a global 64-dim embedding field (analysis-ready, but frozen, weak transferability/interpretability per ag benchmarks); classic GeoFMs give adaptable backbones.
**Opportunity:** hybrid — adaptable backbone that emits queryable global embedding fields; or distill fields → backbone.

## G6 — Multimodal fusion is still early
TerraMind's any-to-any generation + Thinking-in-Modalities is promising; SAR+optical+hyperspectral+weather+text jointly remains open. GeoLink shows OSM/vector data barely used.
**Opportunity:** vector/raster/text unified tokenization; physics-consistent cross-sensor generation.

## G7 — Geographic generalization & fairness
Cross-region transfer is brutal and rarely front-and-center in evals. Training data skews to well-imaged regions.
**Opportunity:** region-held-out pretraining curricula, geographic domain adaptation as a first-class objective.

## G8 — Label-free dense supervision
JEPA-style latent prediction (GeoMeld, OlmoEarth latent MIM) is displacing pixel reconstruction. Pixel MAE wastes capacity on radiometric noise.
**Opportunity:** latent-space objectives tuned to EO physics (speckle-invariant, atmosphere-invariant).

## G9 — Compute & data efficiency
600M+ params standard; most users fine-tune on <10k labels. GFM (2023) showed continual pretraining beats from-scratch at fraction of cost; GeoSANE (2026) generates weights from existing FMs.
**Opportunity:** efficient continual pretraining recipes; distillation from ensembles of GeoFMs.

## G10 — VLM convergence & agents
GeoChat/EarthGPT line vs pure-vision GeoFMs still separate. Reasoning over embeddings + maps + text (Earth AI, 2025) is emerging.
**Opportunity:** GeoFM as vision encoder for an EO-native VLM with grounded, geo-referenced outputs.

## G11 — VLM: CLIP-blind vision encoding
RSMMVP (2025): RS MLLMs inherit CLIP's failure modes — weak spatial reasoning, counting, fine-grained grounding. The vision encoder, not the LLM, is the bottleneck.
**Opportunity:** EO-native encoders (DOFA/Prithvi-class) inside VLMs; multi-encoder fusion. (This is the Phase 5d experiment.)

## G12 — VLM: RGB-only inputs
Nearly all RS-VLMs consume RGB crops. Multispectral/SAR/temporal dialogue barely exists — EarthDial and EarthGPT are early steps.
**Opportunity:** band-aware visual tokenization for LLM contexts; SAR+optical joint dialogue; time-series QA ("what changed between May and July?").

## G13 — VLM: resolution vs context window
RS scenes are 10k×10k px; VLM vision encoders see ~1k. GeoPixel (tiling), GeoEyes (focusing), GeoViS (agentic search) patch it; no native solution.
**Opportunity:** hierarchical/foveated visual tokenization; zoomable evidence-grounded reasoning.

## G14 — VLM: hallucination, robustness, eval
RS MLLMs hallucinate objects; break under realistic perturbations (RemoteShield 2026). Benchmarks young, saturating, contamination-prone.
**Opportunity:** geo-grounded factuality (verify answers against OSM/GIS layers); robustness training; contamination-free evals.

## The convergence thesis (next-gen candidate zone)
The two tracks are merging: G10+G11+G12 intersect at **"a GeoFM-encoded, multi-sensor, pixel-grounded EO-native VLM"** — no current model has all three. TerraMind (any-to-any) + GeoPixel (pixel grounding) + EarthDial (multi-sensor dialogue) each hold one piece.

---

## My design candidates
(append ideas here: gaps targeted, sketch, smallest viable prototype)
