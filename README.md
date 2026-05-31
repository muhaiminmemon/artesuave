# Muhammad Muhaimin Memon — Portfolio

A personal portfolio built as a **broadcast telemetry screen** — an F1 timing graphic crossed with a Swiss editorial poster. Every design choice is deliberate, and a lot of the personality is in details you only catch on a second look. This README is the decoder ring.

**Live:** _add your URL here_ · **Stack:** Hand-written HTML / CSS / React (no framework build step)

---

## The concept: "Telemetry"

The whole site is themed like an **F1 broadcast / pit-wall timing screen**. That isn't decoration for its own sake — it solves a real problem. My résumé is full of hard numbers (60% lower inference cost, 95% faster provisioning, 300× cheaper data, 0.95 F1), and the best way to make numbers the hero is to present them the way motorsport does: big, monospaced, tabulated, lit up like a live feed.

So the site borrows the *grammar* of a race broadcast:

- A **"LIVE" indicator** with a blinking dot in the hero, like a live TV bug.
- A running **lap clock** in the nav, ticking real seconds in Toronto time (`YYZ · 14:32:08`).
- The headline stats sit in a **timing tower** — four cells labelled `S1`–`S4` (sectors), with tabular numerals so digits line up like a real timing screen.
- Experience entries are a **"stint log."** Skills are a **"setup sheet."** The language is consistent with the metaphor throughout.

The visual layer underneath is **Swiss / International Typographic Style**: a hard modular grid, heavy grotesque display type (Archivo Black), monospace data labels (Space Mono), thick rules, and a single accent colour doing a lot of work. Numbers in front, structure everywhere.

---

## Things you might not notice

These are the details that took the most care and are easiest to miss:

### 1. The belt-tie intro ("Lights Out")
On every page load there's a short (~1.7s) dark **"lights out"** sequence — but instead of F1 starting lights, **a BJJ belt ties itself**: the band draws across, the knot pops in, two tails drop with the black tips of a white belt, then the whole belt **cinches tight** with a pulse before the screen wipes up to reveal the site.

It's the two worlds fused into one gesture: an F1 broadcast opens with *lights out*, a roll opens with *tying your belt* — both are the ritual right before it's go time. It's **skippable** (click / scroll / any key), fully **disabled for reduced-motion** users, and has a toggle in the Tweaks panel.

### 2. The scroll bar is a belt promotion
The thin progress bar pinned to the very top isn't just a scroll indicator. As you read down the page it **ranks up through the BJJ belts** — its colour climbs **white → blue → purple → brown → black**. Reach the bottom and you're a black belt, with a subtle promotion glow. Reading the whole portfolio = the whole journey.

### 3. The name is a three-line monument
`MUHAMMAD / MUHAIMIN / MEMON` is stacked like a Swiss poster, with **MUHAIMIN** in the accent colour because that's what I go by. (Fun fact embedded in the design: "Memon" isn't on my ID — long story — but it's my real full name, so it lives here.)

### 4. Six themes, each with a story
A toggle in the nav (the little coloured dot) cycles six complete palettes. Three are "designer" modes and three are **personal allegiances**:

| Theme | What it is | The tell |
|---|---|---|
| **Light** | Warm gi-white Swiss poster | the clean default look |
| **Dark** | Telemetry broadcast screen | deep navy, glowing accents |
| **Mono** | Stark black & white | accent collapses to pure black |
| **Red Bull** | Oracle Red Bull Racing livery | navy + RB red, **yellow** on the numerals |
| **Arte Suave** | Brazilian Jiu-Jitsu | Gracie red/white/blue + a **Japanese mincho serif** for the name |
| **Lakers** | LA Lakers | royal purple + **gold** numerals |

**Arte Suave** ("the gentle art") is the **default**, and it's the only theme that swaps the *typeface* — the display type becomes **Shippori Mincho**, an elegant Japanese serif, nodding to jiu-jitsu's roots. Switch to it and the whole personality of the type changes, not just the colour. Your theme choice is remembered between visits.

### 5. The motion is honest
Sections fade and rise as they enter the viewport, hovers lift cards with hard offset shadows (very Swiss-poster), the tech ticker scrolls and pauses on hover. But there's a safeguard: the site **detects a frozen animation clock** (some embedded/background tabs throttle animation) and instantly falls back to a no-animation render so content is *never* stuck invisible. It also fully respects `prefers-reduced-motion`.

---

## The Tweaks panel

There's a small in-page control panel (toggle it from the toolbar) that lets a visitor reconfigure the site live:

- **Theme** — all six palettes
- **Accent** — red / blue / lime (where the theme allows)
- **Tech ticker** — on/off
- **Belt intro on load** — on/off
- **Belt rank bar** — on/off

Everything persists to `localStorage`, so the site comes back the way you left it.

---

## Personalization map

A quick index of where each personal thread shows up, for anyone curious how the hobbies are woven in without being heavy-handed:

- **Formula 1** → the entire telemetry concept, the timing tower, the lap clock, the LIVE bug, the "lights out" intro framing, the Red Bull theme.
- **Brazilian Jiu-Jitsu** → the belt-tie preloader, the belt-rank scroll bar, the Arte Suave theme (Gracie colours + Japanese serif).
- **Basketball** → the Lakers theme.

No "Hobbies" section, no clip-art icons — the interests are expressed through *how the site behaves*, not a list.

## Credits

Designed and built by **Muhammad Muhaimin Memon**. Original design, no template.

Toronto, ON 🇨🇦
