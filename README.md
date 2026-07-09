# Awesome Geospatial Vision & Vision-Language Foundation Models 🛰️

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Site](https://img.shields.io/badge/Live-Dashboard-38bdf8)](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-34d399.svg)](#contributing)

A curated, opinionated map of geospatial foundation models — both **pure-vision GeoFMs** and **vision-language models (RS-VLMs)** — plus a learning roadmap, open-problem gap map, and benchmark tracker.

**Live site:** [Dashboard](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/) · [RS-VLM Anatomy explainer](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/anatomy.html) · [Comparison Matrix](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/matrix.html)

## Contents

- [Vision Foundation Models](#vision-foundation-models)
- [Vision-Language Models (RS-VLMs)](#vision-language-models-rs-vlms)
- [Benchmarks](#benchmarks)
- [Datasets for VLM training](#datasets-for-vlm-training)
- [The three-slot mental model](#the-three-slot-mental-model)
- [Open problems](#open-problems)
- [Learning roadmap](#learning-roadmap)
- [Contributing](#contributing)

## Vision Foundation Models

| Model | Year | Org | Params | Paradigm | Modalities | Paper |
|---|---|---|---|---|---|---|
| SatMAE | 2022 | Stanford | 307M | MAE | MSI, temporal | [arXiv](https://arxiv.org/abs/2207.08051) |
| Scale-MAE | 2023 | Berkeley | 307M | MAE + GSD pos-enc | RGB | [arXiv](https://arxiv.org/abs/2212.14532) |
| GFM | 2023 | UCF/Amazon | 86M | Continual distill | RGB | [arXiv](https://arxiv.org/abs/2302.04476) |
| CROMA | 2023 | McGill | 300M | Contrastive+MAE | SAR+MSI | [arXiv](https://arxiv.org/abs/2311.00566) |
| SpectralGPT | 2023 | CAS | 600M | Generative MAE | MSI/HSI | [arXiv](https://arxiv.org/abs/2311.07113) |
| Presto | 2023 | NASA Harvest | 0.4M | Pixel-timeseries MAE | MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2304.14065) |
| Prithvi-EO 2.0 | 2024 | NASA/IBM | 100–600M | MAE + temporal/location emb. | MSI, temporal | [arXiv](https://arxiv.org/abs/2412.02732) |
| Clay v1.5 | 2024 | Clay Foundation | 200M | MAE, sensor-aware | MSI, SAR, RGB | [site](https://clay-foundation.github.io/model/) |
| DOFA | 2024 | TUM | 300M | MAE + wavelength hypernet | any bands | [arXiv](https://arxiv.org/abs/2403.15356) |
| MTP | 2024 | Wuhan | 300M | Multi-task supervised | RGB | [arXiv](https://arxiv.org/abs/2403.13430) |
| SoftCon | 2024 | TUM | 86–300M | Soft contrastive | MSI, SAR | [arXiv](https://arxiv.org/abs/2405.20462) |
| SkySense | 2024 | Ant/Wuhan | 2.06B | Multi-granularity contrastive | RGB, MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2312.10115) |
| Copernicus-FM | 2025 | TUM | 300M | MAE + metadata hypernets | MSI, SAR, atmos | [arXiv](https://arxiv.org/abs/2503.11849) |
| TerraMind | 2025 | IBM/ESA | 500M | Any-to-any generative, 9 modalities | MSI, SAR, DEM, text, vector | [arXiv](https://arxiv.org/abs/2504.11171) |
| Galileo | 2025 | NASA Harvest+ | 100–300M | Dual contrastive+MAE, flexible inputs | MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2502.09356) |
| AlphaEarth Foundations | 2025 | Google DeepMind | field | Global 64-dim embedding field @10m | MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2507.22291) |
| OlmoEarth | 2025 | AI2 | 300M | Latent MIM, fully open stack | MSI, SAR, RGB, temporal | [arXiv](https://arxiv.org/abs/2511.13655) |
| TerraFlow | 2026 | — | 300M | Latent multimodal-multitemporal | MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2603.12762) |
| GeoSANE | 2026 | HSG/Michigan | — | Weight generation from FMs | meta | [arXiv](https://arxiv.org/abs/2603.23408) |
| GeoMeld-FM | 2026 | IITB/MBZUAI | 300M | MAE+JEPA+CLIP hybrid | MSI, SAR, text | [arXiv](https://arxiv.org/abs/2604.10591) |
| FLORO | 2026 | KAUST | 300M | MAE, availability-aware inputs | MSI, SAR, RGB | [arXiv](https://arxiv.org/abs/2605.28174) |

## Vision-Language Models (RS-VLMs)

| Model | Year | Org | Grounding (Slot C) | Sensors | Paper |
|---|---|---|---|---|---|
| RSGPT | 2023 | — | none (caption/VQA) | RGB | [arXiv](https://arxiv.org/abs/2307.15266) |
| GeoChat | 2024 | MBZUAI | oriented bbox-as-text | RGB | [arXiv](https://arxiv.org/abs/2311.15826) |
| EarthGPT | 2024 | CAS | box-as-text | RGB, SAR, IR | [arXiv](https://arxiv.org/abs/2401.16822) |
| LHRS-Bot | 2024 | Nanjing | box-as-text | RGB | [arXiv](https://arxiv.org/abs/2402.02544) |
| SkySenseGPT | 2024 | Wuhan | box + scene graph | RGB | [arXiv](https://arxiv.org/abs/2406.10100) |
| EarthDial | 2024 | IBM/MBZUAI | box-as-text | MSI, SAR, IR, bi-temporal | [arXiv](https://arxiv.org/abs/2412.15190) |
| GeoPixel | 2025 | MBZUAI | `<SEG>` token → mask decoder | RGB (4K) | [arXiv](https://arxiv.org/abs/2501.13925) |
| EarthMind | 2025 | Trento/TUM+ | spatial attention prompting → pixel | RGB + SAR | [arXiv](https://arxiv.org/abs/2506.01667) |
| OmniGeo | 2025 | — | task-dependent | RGB + vector/metadata | [arXiv](https://arxiv.org/abs/2503.16326) |
| GeoViS | 2025 | — | agentic reward-guided search | RGB | [arXiv](https://arxiv.org/abs/2512.02715) |
| GeoEyes | 2026 | — | agentic on-demand focusing | RGB (UHR) | [arXiv](https://arxiv.org/abs/2602.14201) |
| RemoteShield | 2026 | — | box-as-text (robustness focus) | RGB | [arXiv](https://arxiv.org/abs/2604.17243) |
| RemoteCLIP | 2024 | — | retrieval only (no LLM) | RGB | [arXiv](https://arxiv.org/abs/2306.11029) |

Full per-model breakdown (encoder × bridge × grounding × data): **[Comparison Matrix](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/matrix.html)**

## Benchmarks

| Benchmark | Year | Track | Measures | Paper |
|---|---|---|---|---|
| GEO-Bench | 2023 | Vision | 12 cls/seg tasks | [arXiv](https://arxiv.org/abs/2306.03831) |
| GEO-Bench-2 | 2025 | Vision | capability groups, standard protocol | [HF](https://hf.co/papers/2511.15658) |
| PANGAEA | 2024 | Vision | global dense tasks, frozen encoder | [arXiv](https://arxiv.org/abs/2412.04204) |
| LHRS-Bench | 2024 | VLM | understanding/reasoning MC | [arXiv](https://arxiv.org/abs/2402.02544) |
| VRSBench | 2024 | VLM | caption/VQA/grounding | [arXiv](https://arxiv.org/abs/2406.12384) |
| EarthMind-Bench | 2025 | VLM | multi-granular + multi-sensor | [arXiv](https://arxiv.org/abs/2506.01667) |
| RSMMVP | 2025 | VLM | vision-centric probes (CLIP-blindness) | [arXiv](https://arxiv.org/abs/2503.15816) |

## Datasets for VLM training

| Dataset | Year | Size | Construction trick |
|---|---|---|---|
| SkyScript | 2023 | 2.6M pairs | OSM tags → captions |
| RS5M / GeoRSCLIP | 2023 | 5M pairs | filtered web + captioning |
| LHRS-Align | 2024 | 1.15M pairs | VGI/OSM features → structured captions |
| MMRS-1M | 2024 | 1M instructions | existing RS datasets → multi-sensor instructions |
| RSTeller | 2024 | 2.5M+ pairs | LLM-generated rich captions over GEE imagery |
| GeoPixelD | 2025 | grounded dialogues | set-of-marks + spatial priors → mask-grounded chat |

## The three-slot mental model

Every RS-VLM is three design choices — file each paper into these slots and the literature stops feeling like a zoo:

1. **Slot A — what encodes the pixels:** CLIP/SigLIP ViT (default, inherits CLIP-blindness), DINOv2, GeoFM encoders (the frontier move), or multi-encoder fusion.
2. **Slot B — what bridges to the LLM:** MLP projector (LLaVA default), Q-Former/resampler, cross-modal fusion modules.
3. **Slot C — what grounds the output:** nothing → bbox-as-text → `<SEG>`-token + mask decoder → attention prompting → agentic search.

Interactive walkthrough: **[Anatomy of an RS-VLM](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/anatomy.html)**

## Open problems

14 gaps tracked in [`04-next-gen/gap-map.md`](04-next-gen/gap-map.md) — headline items: no model dominates (G1), sensor-agnosticism vs performance (G2), CLIP-blind encoders in VLMs (G11), RGB-only VLM inputs (G12), resolution vs context window (G13). The convergence thesis: **a GeoFM-encoded, multi-sensor, pixel-grounded EO-native VLM does not exist yet** — TerraMind, GeoPixel, and EarthDial each hold one piece.

## Learning roadmap

9-phase roadmap (SSL fundamentals → EO physics → GeoFM lineage → RS-VLM track → build your own) in [`01-roadmap/roadmap.md`](01-roadmap/roadmap.md), with progress tracking on the [dashboard](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/).

## Repository structure

```
├── index.html            # Dashboard (landscape · roadmap · gaps · benchmarks)
├── anatomy.html          # Interactive RS-VLM pipeline explainer
├── matrix.html           # RS-VLM comparison matrix (three-slot breakdown)
├── 01-roadmap/           # Learning roadmap
├── 02-papers/            # Paper dissections (5-layer template)
├── 03-registry/          # models.json + leaderboard.json (single source of truth)
├── 04-next-gen/          # Gap map & design candidates
└── vision-language-models.md / vsion-foundation-models.md   # Reference notes
```

## Contributing

PRs welcome — especially: new models added to [`03-registry/models.json`](03-registry/models.json) (the dashboard reads it directly), corrections to the [Comparison Matrix](matrix.html) slots, and verified benchmark numbers in [`03-registry/leaderboard.json`](03-registry/leaderboard.json). Please include a paper/code link for every claim.
