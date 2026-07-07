# GeoFM Lab — Next-Gen Geospatial Vision + Vision-Language Foundation Models

Workspace for understanding the GeoFM and RS-VLM landscapes and designing next-generation models. Two tracks, one workflow:

- **Vision FM track** — SatMAE → Prithvi/Clay/DOFA → TerraMind/Galileo/AlphaEarth (Phases 1–5)
- **Vision-Language track** — GeoChat → EarthGPT/EarthDial → GeoPixel/EarthMind (Phases 5b–5d)
  They converge in Phase 6: the next-gen candidate zone is a GeoFM-encoded, multi-sensor, pixel-grounded EO-native VLM.

## Structure

```
VLM/
├── dashboard.html          ← Open in browser. Landscape tracker + roadmap + gap map
├── 01-roadmap/roadmap.md   ← 6-phase learning roadmap (papers, code, exercises)
├── 02-papers/
│   ├── TEMPLATE.md         ← 5-layer paper dissection template
│   └── <paper-name>.md     ← One file per paper you dissect
├── 03-registry/models.json ← Curated model registry (source data for dashboard)
└── 04-next-gen/gap-map.md  ← Open problems + your next-gen design ideas
```

## Workflow

1. **Learn** - follow `01-roadmap/roadmap.md` phase by phase. Track progress in the dashboard (checkboxes persist in your browser).
2. **Dissect** - for each key paper, copy `02-papers/TEMPLATE.md`, fill in the 5 layers. The final section ("Next-gen implications") feeds the gap map.
3. **Track** - when a new model drops, add it to `03-registry/models.json` and ask Claude to refresh the dashboard.
4. **Design** - accumulate observations in `04-next-gen/gap-map.md`. When 2–3 gaps intersect, that's a next-gen architecture candidate — bring it to Claude (rs-dl-architect skill) to design and prototype.

## Recurring with Claude

- "Scan arXiv/HuggingFace for new GeoFM papers this week" → updates registry + dashboard
- "Dissect <paper> with me" → guided 5-layer analysis into 02-papers/
- "Design a model targeting gaps X + Y" → architecture + PyTorch scaffold
