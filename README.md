# Awesome Geospatial Vision & Vision-Language Foundation Models 🛰️

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Site](https://img.shields.io/badge/Live-Dashboard-38bdf8)](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-34d399.svg)](#contributing)

> **Nov 2026 update:** +12 vision GeoFMs (GeoLink, MaRS, FlexiMo, AgriFM, RAMEN, SkySense V2, T-JEPA…), +19 RS-VLMs (TerraScope, GeoSolver, MLRS, FaithRS, Earth-Agent…), +14 benchmarks and datasets, and a new section of surveys, companion collections and eval tooling.

A curated, opinionated map of geospatial foundation models — both **pure-vision GeoFMs** and **vision-language models (RS-VLMs)** — plus a learning roadmap, open-problem gap map, and benchmark tracker.

**Live site:** [Dashboard](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/) · [RS-VLM Anatomy explainer](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/anatomy.html) · [Comparison Matrix](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/matrix.html)

## Contents

- [Vision Foundation Models](#vision-foundation-models)
- [Vision-Language Models (RS-VLMs)](#vision-language-models-rs-vlms)
- [Benchmarks](#benchmarks)
- [Datasets for VLM training](#datasets-for-vlm-training)
- [Surveys & companion collections](#surveys--companion-collections)
- [Code, toolkits & evaluation](#code-toolkits--evaluation)
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
| FlexiMo | 2025 | AIR-CAS/Southeast/HZDR | 86M (ViT-B) | Parameter-free resolution-aware patch-embed on DOFA | MSI, RGB, any GSD | [arXiv](https://arxiv.org/abs/2503.23844) · [code](https://github.com/danfenghong/IEEE_TGRS_Fleximo) |
| AgriFM | 2025 | HKU/Beihang/Wuhan | — | Video-Swin, land-cover-fraction supervised, 25M images | MSI, temporal (MODIS/Landsat/S2) | [arXiv](https://arxiv.org/abs/2505.21357) · [code](https://github.com/flyakon/AgriFM) |
| RemoteSAM | 2025 | — | — | Referring-seg foundation model, multi-interface | RGB, text | [arXiv](https://arxiv.org/abs/2505.18022) |
| MAPEX | 2025 | — | — | Mixture of modality experts + task pruning | MSI, SAR, RGB | [arXiv](https://arxiv.org/abs/2507.07527) |
| SkySense V2 | 2025 | Ant/Wuhan | — | Single unified backbone, RS-tailored SSL | RGB, MSI, SAR, temporal | [arXiv](https://arxiv.org/abs/2507.13812) |
| GeoLink | 2025 | PKU/CASIA/EPFL | 300M | Image ↔ OSM-graph contrastive (NeurIPS'25) | RGB, OSM vector | [arXiv](https://arxiv.org/abs/2509.26016) · [code](https://github.com/bailubin/GeoLink_NeurIPS2025) |
| RAMEN | 2025 | Paris Cité/Inria/INRAE | 98.5M | MAE, resolution as controllable output | MSI, SAR, RGB, DEM | [arXiv](https://arxiv.org/abs/2512.05025) · [code](https://github.com/nicolashoudre/RAMEN) |
| MaRS | 2026 | Wuhan | — | Dual SwinV2, cross-granularity contrastive + meta-modality attn (AAAI'26) | VHR SAR + optical (0.35 m) | [AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/38153) · [code](https://github.com/WanderRainy/MaRS) |
| AlignJEPA | 2026 | — | light aligner | Predictive VL alignment for frozen GeoFMs (AnySat + RemoteCLIP) | MSI, text | [arXiv](https://arxiv.org/abs/2608.15456) |
| HyperSAM | 2026 | — | — | Promptable SAM-initialized hyperspectral FM | HSI | [arXiv](https://arxiv.org/abs/2609.37340) |
| T-JEPA | 2026 | — | — | Temporal JEPA, Δt-conditioned latent transitions | MSI, temporal | [arXiv](https://arxiv.org/abs/2610.05731) |
| UniFlow-RS | 2026 | — | — | Shared latent flow-matching predictor across tasks | MSI, SAR, RGB | [arXiv](https://arxiv.org/abs/2611.14281) |

## Vision-Language Models (RS-VLMs)

63 models tracked, grouped by capability generation. Full per-model breakdown (encoder × bridge × grounding × training data × tasks): **[Comparison Matrix](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/matrix.html)**

### Contrastive (retrieval / zero-shot)

| Model | Year | Training data | Tasks | Paper |
|---|---|---|---|---|
| GeoRSCLIP | 2023 | RS5M (5M pairs) | zero-shot cls, retrieval | [arXiv](https://arxiv.org/abs/2306.11300) |
| RemoteCLIP | 2024 | RET-3+DET-10+SEG-4 (~165k) | zero-shot cls, retrieval | [arXiv](https://arxiv.org/abs/2306.11029) |
| DOFA-CLIP | 2025 | GeoLangBind-2M | multi-sensor zero-shot cls, retrieval | [arXiv](https://arxiv.org/abs/2503.06312) |

### Instruction-tuned conversational

| Model | Year | Training data | Tasks | Paper |
|---|---|---|---|---|
| RSGPT | 2023 | RSICap 2.5k | caption, VQA | [arXiv](https://arxiv.org/abs/2307.15266) |
| SkyEyeGPT | 2024 | SkyEye-968k | caption, VQA, grounding, video caption | [arXiv](https://arxiv.org/abs/2401.09712) |
| EarthGPT | 2024 | MMRS-1M | cls, caption, VQA, grounding, detection (RGB/SAR/IR) | [arXiv](https://arxiv.org/abs/2401.16822) |
| GeoChat | 2024 | GeoChat-Instruct 318k | cls, caption, VQA, region-caption, OBB grounding | [arXiv](https://arxiv.org/abs/2311.15826) |
| LHRS-Bot / Nova | 2024 | LHRS-Align 1.15M + Instruct | cls, caption, VQA, grounding | [arXiv](https://arxiv.org/abs/2402.02544) |
| RS-LLaVA | 2024 | RS-Instructions 7k | caption, VQA | [MDPI](https://www.mdpi.com/2072-4292/16/9/1477) |
| VHM (H2RSVLM) | 2024 | HqDC-1.4M + 138k instruct | cls, caption, VQA, grounding, counting, honest refusal | [arXiv](https://arxiv.org/abs/2403.20213) |
| Popeye | 2024 | MMShip 81k | ship detection, OBB grounding (optical+SAR) | [arXiv](https://arxiv.org/abs/2403.03790) |
| SkySenseGPT | 2024 | FIT-RS 1.8M | cls, VQA, scene graph, relation reasoning | [arXiv](https://arxiv.org/abs/2406.10100) |
| RS-MoE | 2024 | UCM/RSICD/RSVQA | caption, VQA (MoE) | [arXiv](https://arxiv.org/abs/2411.01595) |
| RingMoGPT | 2024 | curated corpus | caption, VQA, detection, change desc | [T-GRS](https://ieeexplore.ieee.org/abstract/document/10777289) |
| EarthDial | 2024 | EarthDial-Instruct 11.11M | cls, caption, VQA, grounding, change desc (MSI/SAR/IR) | [arXiv](https://arxiv.org/abs/2412.15190) |
| OmniGeo | 2025 | GeoAI corpora + vector | cls, VQA, geo-reasoning | [arXiv](https://arxiv.org/abs/2503.16326) |
| SkyMoE | 2025 | multi-task corpora | cls, caption, VQA, grounding (MoE) | [arXiv](https://arxiv.org/abs/2512.02517) |
| EarthVL | 2026 | understanding+generation corpus | caption, VQA, **text→image generation** | [arXiv](https://arxiv.org/abs/2601.02783) |
| FUSE-RSVLM | 2025 | — | caption, VQA (multi-feature fusion vs visual forgetting) | [arXiv](https://arxiv.org/abs/2512.24022) |

### Region / visual-prompting

| Model | Year | Training data | Tasks | Paper |
|---|---|---|---|---|
| EarthMarker | 2024 | RSVP-3M | region/point caption & cls | [arXiv](https://arxiv.org/abs/2407.13596) |
| EagleVision | 2025 | EVAttrs-95k | detection + object-attribute dialogue | [arXiv](https://arxiv.org/abs/2503.23330) |
| EarthGPT-X | 2025 | multi-source prompt data | point/box prompting, region tasks (optical/SAR/IR) | [arXiv](https://arxiv.org/abs/2504.12795) |
| DescribeEarth | 2025 | Geo-DLC | object-level detailed localized captions | [arXiv](https://arxiv.org/abs/2509.25654) |

### Pixel-grounded / segmentation

| Model | Year | Training data | Tasks | Paper |
|---|---|---|---|---|
| GeoGround | 2024 | refGeo 161k | HBB + OBB + mask grounding (no decoder) | [arXiv](https://arxiv.org/abs/2411.11904) |
| RSUniVLM | 2024 | multi-granularity mix | image/region/pixel unified, ~1B | [arXiv](https://arxiv.org/abs/2412.05679) |
| GeoPix | 2025 | GeoPixInstruct 65k | ref-seg, multi-target seg, VQA | [arXiv](https://arxiv.org/abs/2501.06828) |
| GeoPixel | 2025 | GeoPixelD | pixel-grounded conversation @ 4K | [arXiv](https://arxiv.org/abs/2501.13925) |
| Falcon (RS) | 2025 | Falcon_SFT 78M/5.6M img | 14 tasks image→region→pixel at **0.7B** | [arXiv](https://arxiv.org/abs/2503.11070) |
| SegEarth-R1 | 2025 | EarthReason | reasoning segmentation | [arXiv](https://arxiv.org/abs/2504.09644) |
| EarthMind | 2025 | EarthMind corpus | multi-granular + optical-SAR fusion | [arXiv](https://arxiv.org/abs/2506.01667) |
| SegEarth-R2 | 2025 | LaSeRS | ref/reasoning/multi-target seg | [arXiv](https://arxiv.org/abs/2512.20013) |
| **TerraScope** | 2026 | Terra-CoT 1M (masks inside CoT) | pixel-grounded reasoning, optical+SAR, bi-temporal | [arXiv](https://arxiv.org/abs/2603.19039) · [project](https://shuyansy.github.io/terrascope/) |
| GeoReason-Seg | 2026 | EarthReason, RRSIS-D | reasoning seg (keeps [SEG] tied to grounding) | [arXiv](https://arxiv.org/abs/2610.23416) · [code](https://github.com/Fanc0126/GeoReason) |
| FloodVLM-Pix | 2026 | 131.2k flood patches | flood VQA + pixel flood seg | [arXiv](https://arxiv.org/abs/2610.23377) |

### Temporal / change

| Model | Year | Training data | Tasks | Paper |
|---|---|---|---|---|
| CDChat | 2024 | LEVIR-CD + SYSU-CD | bi-temporal change description | [arXiv](https://arxiv.org/abs/2409.16261) |
| TEOChat | 2024 | TEOChatlas 554k | temporal QA, change, damage assessment | [arXiv](https://arxiv.org/abs/2410.06234) |
| GeoLLaVA | 2024 | fMoW temporal pairs | temporal change QA (PEFT) | [arXiv](https://arxiv.org/abs/2410.19552) |
| ViLaCD-R1 | 2025 | bi-temporal block tasks | SFT+RL semantic change detection + mask decoder | [arXiv](https://arxiv.org/abs/2512.23244) |

### Reasoning / RL (the 2025–26 wave)

| Model | Year | Method | Tasks | Paper |
|---|---|---|---|---|
| TinyRS-R1 | 2025 | GRPO @ 2B | cls, VQA, grounding, CoT | [arXiv](https://arxiv.org/abs/2505.12099) |
| RemoteReasoner | 2025 | GRPO, task transformation | region/pixel/object from one reasoner | [arXiv](https://arxiv.org/abs/2507.19280) |
| GeoVLM-R1 | 2025 | reinforcement fine-tuning | cls, VQA, grounding, change | [arXiv](https://arxiv.org/abs/2509.25026) |
| RSThinker | 2025 | grounded CoT | evidence-tied reasoning | [arXiv](https://arxiv.org/abs/2509.22221) |
| GeoZero | 2025 | RL-zero (no SFT CoT) | reasoning from rewards alone | [arXiv](https://arxiv.org/abs/2511.22645) |
| GeoReason | 2026 | logical-consistency RL | contradiction-free reasoning | [arXiv](https://arxiv.org/abs/2601.04118) |
| Few-shot RLVR | 2025 | 1-shot RLVR, rule rewards only | cls, VQA, grounding w/o captions | [arXiv](https://arxiv.org/abs/2507.21745) |
| Geo-R1 | 2025 | reason-then-act RFT @ 3B | few-shot REC / OVD / RES | [arXiv](https://arxiv.org/abs/2509.21976) · [code](https://github.com/Geo-R1/geo-r1) |
| **GeoSolver** | 2026 | process reward model + Tree-GRPO @ 9B | faithful step-by-step reasoning, 17 datasets | [arXiv](https://arxiv.org/abs/2603.09551) |
| RS-HyRe-R1 | 2026 | hybrid rewards vs 'perceptual inertia' @ 3B | grounding, detection, VQA | [arXiv](https://arxiv.org/abs/2604.17504) |
| **MLRS (More with Less)** | 2026 | multi-task tool RL (GRTO), InternVL3.5 + SAM3 | generalist recipe, no RS-specific architecture | [arXiv](https://arxiv.org/abs/2607.15942) |
| ReDiS | 2026 | reasoning–diagnosis self-evolution | grounded multi-step reasoning | [arXiv](https://arxiv.org/abs/2610.18388) |
| FaithRS | 2026 | hallucination-aware self-reflection, GSPO | faithful reasoning, 0.8–9B | [arXiv](https://arxiv.org/abs/2610.18369) |

### Agentic / ultra-high-resolution

| Model | Year | Mechanism | Paper |
|---|---|---|---|
| GeoLLaVA-8K | 2025 | token pruning → native 8K | [arXiv](https://arxiv.org/abs/2505.21375) |
| ZoomEarth | 2025 | active cropping policy | [arXiv](https://arxiv.org/abs/2511.12267) |
| GeoViS | 2025 | reward-guided search tree | [arXiv](https://arxiv.org/abs/2512.02715) |
| GeoEyes | 2026 | on-demand focusing + evidence chains | [arXiv](https://arxiv.org/abs/2602.14201) |
| RemoteShield | 2026 | robustness (DPO on perturbations) | [arXiv](https://arxiv.org/abs/2604.17243) |
| LRS-VQA pruning | 2025 | text-guided coarse-to-fine token pruning | [arXiv](https://arxiv.org/abs/2503.07588) |
| Earth-Agent | 2025 | MCP agent, 104 EO tools (RGB/spectral/products), ICLR'26 | [arXiv](https://arxiv.org/abs/2509.23141) · [code](https://github.com/opendatalab/Earth-Agent) |
| ZoomSearch | 2025 | training-free adaptive zoom search | [arXiv](https://arxiv.org/abs/2511.20460) |
| TerraAgent | 2026 | demonstration-grounded multi-agent, long-context VQA | [arXiv](https://arxiv.org/abs/2610.12517) |
| GeoScope | 2026 | program execution past the 'counting horizon' | [arXiv](https://arxiv.org/abs/2611.12699) |
| DisasterAgent | 2026 | evidence-driven verifiable disaster reports | [arXiv](https://arxiv.org/abs/2611.13776) |

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
| EarthSpatialBench | 2026 | VLM | quantitative spatial reasoning (distance/direction/topology) | [HF](https://hf.co/papers/2602.15918) |
| GEOBench-VLM | 2024 | VLM | 31 geospatial sub-tasks (counting, det, seg, temporal) | [arXiv](https://arxiv.org/abs/2411.19325) · [code](https://github.com/The-AI-Alliance/GEO-Bench-VLM) |
| XLRS-Bench | 2025 | VLM | ultra-high-res perception + reasoning (CVPR'25) | [arXiv](https://arxiv.org/abs/2503.23771) · [code](https://github.com/AI9Stars/XLRS-Bench) |
| ThinkGeo | 2025 | Agent | tool-augmented RS agent tasks | [arXiv](https://arxiv.org/abs/2505.23752) |
| Earth-Bench | 2025 | Agent | 248 tasks, 13.7k images, 104 tools | [arXiv](https://arxiv.org/abs/2509.23141) |
| TerraScope-Bench | 2026 | VLM | pixel-grounded reasoning: area, coverage, distance, change | [arXiv](https://arxiv.org/abs/2603.19039) |
| NeSy-Route | 2026 | VLM | constrained route planning (neuro-symbolic) | [arXiv](https://arxiv.org/abs/2603.16307) |
| GeoDisaster | 2026 | Agent | 2,921 operational disaster-reasoning instances | [arXiv](https://arxiv.org/abs/2606.17246) |
| RRS-10K | 2026 | VLM | rare-scene interpretation, multitask | [arXiv](https://arxiv.org/abs/2607.24810) |
| RSVideo | 2026 | VLM | remote-sensing video understanding | [arXiv](https://arxiv.org/abs/2608.02039) |
| AESP | 2026 | VLM | answer–grounding consistency in grounded VQA | [arXiv](https://arxiv.org/abs/2610.13636) |
| UMBench | 2026 | VLM | fine-grained UAV urban-management reasoning | [arXiv](https://arxiv.org/abs/2611.06770) |
| RICapBench | 2026 | VLM | fine-grained instance/attribute/relation captioning | [arXiv](https://arxiv.org/abs/2611.16413) |
| FairRSFM | 2026 | Vision | biome-group robustness (worst-group) | [arXiv](https://arxiv.org/abs/2610.05790) |
| VHR-Bench | 2026 | Vision | GeoFM transfer to very-high-resolution imagery | [arXiv](https://arxiv.org/abs/2611.08003) |
| RS-MLLM: domain-specific or general? | 2026 | VLM | capability boundaries of RS-MLLMs vs generalists | [arXiv](https://arxiv.org/abs/2607.20284) |

## Datasets for VLM training

| Dataset | Year | Size | Construction trick |
|---|---|---|---|
| SkyScript | 2023 | 2.6M pairs | OSM tags → captions |
| RS5M / GeoRSCLIP | 2023 | 5M pairs | filtered web + captioning |
| LHRS-Align | 2024 | 1.15M pairs | VGI/OSM features → structured captions |
| MMRS-1M | 2024 | 1M instructions | existing RS datasets → multi-sensor instructions |
| RSTeller | 2024 | 2.5M+ pairs | LLM-generated rich captions over GEE imagery |
| GeoPixelD | 2025 | grounded dialogues | set-of-marks + spatial priors → mask-grounded chat |
| FIT-RS | 2024 | 1.8M instructions | relation/scene-graph-centric instructions |
| SkyEye-968k | 2024 | 968k instructions | unified multi-task instruction format |
| TEOChatlas | 2024 | 554k instructions | temporal sequences (xBD, S2Looking, QFabric) |
| EarthDial-Instruct | 2024 | 11.11M instructions | multi-sensor + bi-temporal, the largest |
| refGeo | 2024 | 161k REC | unified visual grounding incl. aerial |
| Falcon_SFT | 2025 | 78M samples | 14-task mega-SFT over 5.6M images |
| EarthReason / LaSeRS | 2025 | reasoning-seg | implicit-query and hierarchical language-guided seg |
| ChatEarthNet | 2024 | global S2 captions | Sentinel-2 + LLM-generated captions |
| DisasterM3 | 2025 | 26,988 bi-temporal image sets | multi-sensor disaster damage instructions ([arXiv](https://arxiv.org/abs/2505.21089)) |
| RSCC | 2025 | 62,351 pre/post pairs | disaster change captions ([arXiv](https://arxiv.org/abs/2509.01907)) |
| MaRS-16M | 2026 | 16.8M VHR SAR–optical pairs | Umbra/Capella X-band SAR + optical @0.35 m (pretraining) |
| Terra-CoT | 2026 | 1M samples | pixel masks embedded inside reasoning chains ([arXiv](https://arxiv.org/abs/2603.19039)) |
| Geo-PRM-2M | 2026 | ~2M process labels | entropy-guided MCTS + injected hallucinations ([arXiv](https://arxiv.org/abs/2603.09551)) |
| MajorTOM:Elliot Pretrain | 2026 | 279,166 10 km tiles | multi-sensor, multi-temporal, picked by clustering AlphaEarth embeddings ([arXiv](https://arxiv.org/abs/2610.18624)) |
| FloodVLM-Pix data | 2026 | 131.2k flood patches | language + pixel flood labels ([arXiv](https://arxiv.org/abs/2610.23377)) |

## Surveys & companion collections

Other lists worth following. This repo focuses on the GeoFM ↔ RS-VLM convergence; these go deeper on their own slices.

| Resource | Type | Focus |
|---|---|---|
| [A Survey on Remote Sensing Foundation Models: From Vision to Multimodality](https://github.com/IRIP-BUAA/A-Survey-on-Remote-Sensing-Foundation-Models-From-Vision-to-Multimodality) ([arXiv](https://arxiv.org/abs/2503.22081)) | survey + list | vision → multimodal RSFMs (IRIP-BUAA) |
| [Awesome-Remote-Sensing-Foundation-Models](https://github.com/Jack-bo1220/Awesome-Remote-Sensing-Foundation-Models) | list | the largest RSFM paper list: vision, VL, generative, agents |
| [Awesome-Remote-Sensing-Multimodal-Large-Language-Model](https://github.com/ZhanYang-nwpu/Awesome-Remote-Sensing-Multimodal-Large-Language-Model) | survey + list | RS-MLLMs: models, datasets, benchmarks |
| [Awesome-RS-SpatioTemporal-VLMs](https://github.com/Chen-Yang-Liu/Awesome-RS-SpatioTemporal-VLMs) | survey + list | change captioning, temporal VQA, spatio-temporal VLMs (IEEE GRSM'25) |
| [Awesome-RS-VL-Data](https://github.com/VisionXLab/Awesome-RS-VL-Data) | list | remote-sensing vision-language datasets |
| [awesome-remote-sensing-vision-language-models](https://github.com/lzw-lzw/awesome-remote-sensing-vision-language-models) | list | early RS-VLM papers (≤2024) |
| [awesome-RSVLM](https://github.com/om-ai-lab/awesome-RSVLM) | list | RS VLMs, datasets, benchmarks (≤2024) |
| [awesome-RSFMs](https://github.com/xiaoaoran/awesome-RSFMs) | survey + list | "Foundation Models for RS and EO: A Survey" |
| [satellite-image-deep-learning/techniques](https://github.com/satellite-image-deep-learning/techniques) | list | broad DL-for-satellite techniques, beyond FMs |
| Vision-Language Modeling Meets Remote Sensing ([arXiv](https://arxiv.org/abs/2505.14361)) | survey | models, datasets, perspectives (2025) |
| A Genealogy of Multi-Sensor Foundation Models in RS ([arXiv](https://arxiv.org/abs/2504.17177)) | survey | multi-sensor FM lineage |
| Data-Driven Vision-Language Models for Remote Sensing ([arXiv](https://arxiv.org/abs/2610.31304)) | survey | data-centric view of RS-VLM adaptation (Oct 2026) |

## Code, toolkits & evaluation

| Tool | What it does |
|---|---|
| [TorchGeo](https://github.com/torchgeo/torchgeo) | geospatial datasets, samplers, transforms, pretrained weights |
| [TerraTorch](https://github.com/torchgeo/terratorch) | fine-tuning toolkit for GeoFMs (Prithvi, TerraMind, Clay, DOFA…) |
| [GEO-Bench](https://github.com/ServiceNow/geo-bench) | standard GeoFM classification/segmentation benchmark harness |
| [PANGAEA](https://github.com/VMarsocci/pangaea-bench) | frozen-encoder dense-task benchmark for GeoFMs |
| [GEOBench-VLM](https://github.com/The-AI-Alliance/GEO-Bench-VLM) | geospatial VLM benchmark + eval code |
| [XLRS-Bench](https://github.com/AI9Stars/XLRS-Bench) | ultra-high-res RS MLLM benchmark |
| [VLMEvalKit](https://github.com/open-compass/VLMEvalKit) · [lmms-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) | general VLM eval harnesses (for the generalist baselines) |
| Model code: [TerraMind](https://github.com/IBM/terramind) · [Prithvi-EO-2.0](https://github.com/NASA-IMPACT/Prithvi-EO-2.0) · [Clay](https://github.com/Clay-foundation/model) · [DOFA](https://github.com/zhu-xlab/DOFA) · [OlmoEarth](https://github.com/allenai/olmoearth_pretrain) · [GeoChat](https://github.com/mbzuai-oryx/GeoChat) · [GeoPixel](https://github.com/mbzuai-oryx/GeoPixel) · [Earth-Agent](https://github.com/opendatalab/Earth-Agent) | reference implementations |

## The three-slot mental model

Every RS-VLM is three design choices — file each paper into these slots and the literature stops feeling like a zoo:

1. **Slot A — what encodes the pixels:** CLIP/SigLIP ViT (default, inherits CLIP-blindness), DINOv2, GeoFM encoders (the frontier move), or multi-encoder fusion.
2. **Slot B — what bridges to the LLM:** MLP projector (LLaVA default), Q-Former/resampler, cross-modal fusion modules.
3. **Slot C — what grounds the output:** nothing → bbox-as-text → `<SEG>`-token + mask decoder → attention prompting → agentic search.

Interactive walkthrough: **[Anatomy of an RS-VLM](https://rupesh4604.github.io/Awesome-Geospatial-Vision-Language-Foundation-Models/anatomy.html)**

## Open problems

14 gaps tracked in [`04-next-gen/gap-map.md`](04-next-gen/gap-map.md) — headline items: no model dominates (G1), sensor-agnosticism vs performance (G2), CLIP-blind encoders in VLMs (G11), RGB-only VLM inputs (G12), resolution vs context window (G13). The convergence thesis: **a GeoFM-encoded, multi-sensor, pixel-grounded EO-native VLM does not exist yet.** TerraScope (2026) now combines pixel grounding, optical+SAR and bi-temporal reasoning, but it still uses a CLIP-class InternVL3 encoder and has no multispectral input. The open piece is narrower: **put a GeoFM encoder with band-aware input into that recipe** (G11+G12). Meanwhile MLRS (2026) argues the opposite: scale plus tool RL on a generalist VLM may be enough.

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
└── vision-language-models.md / vision-foundation-models.md   # Reference notes
```

## Generalist VLM baselines (watch list)

Not trained on geospatial data, but strong enough that every RS-VLM claim should be benchmarked against them. RS-specific models often win on grounding and multispectral input while losing on general reasoning — always test both.

| Model | Why it matters for EO |
|---|---|
| Qwen2.5-VL / Qwen3-VL (72B) | Best open grounding-in-text of the generalists; native bbox output; strong doc/chart reading transfers to maps |
| InternVL3-78B | Top open-source aggregate scores; strong high-res tiling; common base for RS fine-tunes |
| GLM-4.5V | SOTA open-source on 40+ multimodal benchmarks; "thinking" variant for reasoning tasks |
| Gemini 2.5 Pro (and successors) | Frontier proprietary reasoning + very long context — fits many tiles per prompt |
| GPT-4o/5-class (OpenAI) | The default proprietary baseline in RS-VLM papers; EarthMind-4B claiming to beat it on EarthMind-Bench is the kind of result to scrutinize |
| SAM 2 / SAM-family | Not a VLM but the segmentation backbone RS models bolt on (GeoPixel's decoder lineage) |
| Florence-2 | 0.7B unified seq2seq vision model — the template Falcon (RS) copied; capability density argument |
| Gemma 3 / Pixtral / DeepSeek-VL2 | Efficient open baselines worth including in eval tables |

Two standing lessons: (1) generalists inherit no EO physics — multispectral/SAR still requires RS-specific work (G12); (2) the gap on pure reasoning is shrinking every quarter, so RS-VLMs must justify themselves on grounding, sensors, and resolution, not conversation quality.

## Contributing

PRs welcome — especially: new models added to [`03-registry/models.json`](03-registry/models.json) (the dashboard reads it directly), corrections to the [Comparison Matrix](matrix.html) slots, and verified benchmark numbers in [`03-registry/leaderboard.json`](03-registry/leaderboard.json). Please include a paper/code link for every claim.
