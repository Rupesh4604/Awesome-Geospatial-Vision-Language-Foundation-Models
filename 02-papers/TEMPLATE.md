# [Paper Title] ([Year], [Group])

**Link:** | **Code:** | **Weights:** | **Read date:**
**One-line:** what this model is in one sentence.

## Layer 1 — Problem framing
What gap did the authors claim? Was it real? Who is the model for?

## Layer 2 — Data
Sensors, modalities, GSD, temporal depth, geographic coverage, dataset size, curation tricks. (In GeoFMs, data design is often the real contribution.)

## Layer 3 — Architecture
Backbone, input tokenization (how are bands/time/location encoded?), parameter count, anything non-standard. Draw the tensor flow: input shape → tokens → encoder → output.

## Layer 4 — Pretraining objective
MAE / contrastive / JEPA / generative / hybrid? Masking strategy? What signal does the objective actually force the model to learn — and what does it let the model ignore?

## Layer 5 — Evaluation
Benchmarks used, adaptation protocol (linear probe / PEFT / full FT), strongest and weakest results. What did they NOT evaluate? Cross-region transfer tested?

## Borrowed vs novel
- Borrowed:
- Actually novel:

## Implementation notes
Key code observations if you read the repo (input adapters, positional encodings, loss code).

## Next-gen implications  →  copy insights to 04-next-gen/gap-map.md
What does this paper prove is possible? What does it show still doesn't work?
