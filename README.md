# E67 LL8 Wiring Reference

Interactive wiring reference for the GM E67 ECM as fitted to the **2008–2009 Chevrolet Trailblazer 4.2L Atlas I6 (LL8)**. Built for a '54 Chevy LL8 swap, but applies to any project that uses this ECM.

- **ECM P/N:** 12618163
- **Service P/N:** 12607096
- **Broadcast code:** YRH
- **Application:** 2008–2009 Trailblazer LL8 4.2L I6
- **Connector layouts verified:** 2026-04-28 (against physical X1, X2, X3 pulled from donor)

## What's in here

Two complementary views of the same pin data:

| File | Organized by | Use when |
| --- | --- | --- |
| [`connectors.html`](connectors.html) | Physical connector (X1 blue / X2 black / X3 grey) | You're holding the harness end and need to know what's in cavity *N* |
| [`systems.html`](systems.html) | Functional system (power, ignition, CAN, injectors, coils, O2, knock, etc.) | You're wiring the bench harness and need to know which pins a given subsystem requires |
| [`index.html`](index.html) | — | Landing page linking the two views |
| [`data/pins.js`](data/pins.js) | — | Single source of truth for pin facts. Edit here, both views pick it up. |

The connector view also tracks **verification status** per pin (unverified / verified / suspect) and persists it in `localStorage`. Click any pin → use **Mark Verified** / **Mark Suspect** in the detail panel.

## Bench flash minimum wiring

Required pins for HP Tuners MPVI4 communication only — no engine start.

| Function | Pin | Wire | Circuit | Notes |
| --- | --- | --- | --- | --- |
| Battery Positive (B+) | **X1-20** | OG | 240 | Fused 5–10A inline |
| Ignition 0 | **X1-18** | PK | 1020 | Tie all three to switched 12V |
| Ignition 1 | **X1-19** | PK | 439 | "" |
| Ignition 1 | **X2-13** | PK | 839 | "" |
| Primary Ground | **X2-73** | BK/WH | 451 | Heavy gauge, oversized cavity |
| CAN High → OBDII pin 6 | **X3-53** | TN/WH | 2500 | Twisted pair with X3-33 — keep twist on extension |
| CAN Low → OBDII pin 14 | **X3-33** | TN | 2501 | Twisted pair with X3-53 |

Sensor low-references (X1-9, X1-36, X1-37, X3-21, X3-35) are **left floating for bench flash**. Wire them to ground bus only when sensors are physically connected during engine harness build.

The donor 2008 Trailblazer OBDII pigtail measured 121Ω between pin 6 and pin 14 — within 1% of nominal 120Ω. No external CAN terminator needed for this donor. Verify with a meter before assuming on a different donor.

## Pre-flagged suspect pins

These four entries showed up as data conflicts during the first review and need cross-checking against a factory wiring diagram (Helm or AllData) **before final connection**:

- **X1-56** (YE/BK, circuit 625, "Starter Enable Relay Control") conflicts with **X2-43** (YE, circuit 6259, "Starter Enable Relay"). Different circuits/colors — likely one is the relay drive and the other is crank-inhibit/feedback, but verify which is primary.
- **X2-18** (D-GN/WH, 0.5mm²) and **X2-34** (D-GN/WH, 0.35mm²) are both labeled "IC 4 Control" with circuit 2124. The 4.2L only has six coils so IC 4 should appear once — almost certainly a transcription error in the source pinout.

These show as red status indicators in the connector view. Once verified against a factory diagram, click the pin and use **Mark Verified** to clear the flag.

## Viewing on GitHub Pages

Raw HTML in a GitHub repo renders as source code, not a website. To view the actual interactive pages, enable Pages: **Settings → Pages → Build from `main` branch / root**. The site will then be live at:

- **https://breton-training.github.io/e67-ll8-wiring/** — landing page
- **https://breton-training.github.io/e67-ll8-wiring/connectors.html** — connector view
- **https://breton-training.github.io/e67-ll8-wiring/systems.html** — systems view

## Editing pin data

All pin facts live in [`data/pins.js`](data/pins.js) — one record per populated cavity, with category, wire color, gauge (mm²), GM circuit number, and label. Adding a `verified: 'suspect'` field flags the pin red and can include a `note` that surfaces in the detail panel.

The connector view loads `data/pins.js` and renders from it. The systems view currently has its circuit cards as hand-written HTML — when editing pin facts, both files need updating until the systems view is also refactored to consume `pins.js`.

## Sources

- GM Service Information factory wiring diagrams (2008 Trailblazer)
- Vortec4200 community wiki (Nivlac57)
- Physical connector inspection of donor X1, X2, X3 — 2026-04-28
- 2008 Trailblazer OBDII pigtail terminator measurement — 2026-04-29

## License

MIT — see [LICENSE](LICENSE). Pin data is factual and not subject to copyright; the HTML/CSS/JS layout and narrative is what's under the MIT grant.

## Disclaimer

This is a working reference compiled from multiple sources. Wire colors, circuit numbers, and pin functions can vary by VIN, RPO option, and model year sub-revision. **Always cross-check critical circuits (power, ground, CAN, ignition coils) against a factory diagram for the specific donor before final crimps.** The author assumes no liability for damage from mis-wiring.
