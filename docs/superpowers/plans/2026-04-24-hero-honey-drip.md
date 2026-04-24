# Hero Honey Drip Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a stylized, on-brand animated honey drip to the top of the homepage hero that pours and drips into place once on every homepage visit, then holds.

**Architecture:** A new client component `HoneyDrip` renders two responsive inline SVGs (mobile wave, desktop centered pour) absolutely positioned at the top of the `Hero` section. Animation is CSS-only: a clip-path "pour" reveal on the top band + staggered `scaleY` growth on each droplet, driven by Tailwind 4 `@theme` animation tokens. A `useState(() => Date.now())` mount-key on the wrapper guarantees a fresh animation on every component mount (refresh + client-side nav back to home).

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind 4 (`@theme` block for tokens), inline SVG, CSS keyframes.

**Reference:** `docs/superpowers/specs/2026-04-24-hero-honey-drip-design.md`

---

## File Structure

- **Create:** `src/components/shared/HoneyDrip.tsx` — the component with mobile and desktop SVGs, mount-key logic, and animation class wiring
- **Modify:** `src/app/globals.css` — add 2 keyframes (`honey-pour-center`, `honey-pour-left`, `honey-drip`) and 3 `--animate-*` tokens in the `@theme` block, plus `prefers-reduced-motion` override
- **Modify:** `src/components/sections/Hero.tsx` — insert `<HoneyDrip />` as the first child of the `<section>`

## Visual Verification Note

This feature is pure CSS/SVG animation — there are no meaningful unit tests. The project's `AGENTS.md` requires dev-server + browser verification for UI work. Each task includes a browser verification step. The dev server is already running on port 3000 (started earlier in the session); if it's not running, start it with `npm run dev`.

---

### Task 1: Add animation tokens and keyframes to globals.css

**Files:**
- Modify: `src/app/globals.css` (extend `@theme` block, extend base layer)

- [ ] **Step 1: Add three `--animate-*` tokens and three `@keyframes` inside the `@theme` block**

Open [src/app/globals.css](src/app/globals.css). Inside the existing `@theme { ... }` block, after the last existing `@keyframes slide-down { ... }` rule and before the closing `}` of `@theme`, add:

```css
  --animate-honey-pour-center: honey-pour-center 0.8s ease-out both;
  --animate-honey-pour-left: honey-pour-left 0.8s ease-out both;
  --animate-honey-drip: honey-drip 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @keyframes honey-pour-center {
    0% { clip-path: inset(0 50% 0 50%); }
    100% { clip-path: inset(0 0 0 0); }
  }

  @keyframes honey-pour-left {
    0% { clip-path: inset(0 100% 0 0); }
    100% { clip-path: inset(0 0 0 0); }
  }

  @keyframes honey-drip {
    0% { transform: scaleY(0); }
    80% { transform: scaleY(1.04); }
    100% { transform: scaleY(1); }
  }
```

These tokens auto-register as Tailwind utilities `animate-honey-pour-center`, `animate-honey-pour-left`, `animate-honey-drip`. The cubic-bezier on `honey-drip` gives a subtle overshoot/settle that reads as a liquid bounce. The `clip-path` keyframes reveal the top band; `scaleY` grows each droplet downward from its top edge.

- [ ] **Step 2: Add `prefers-reduced-motion` override at the end of the file**

Append this at the bottom of [src/app/globals.css](src/app/globals.css) (after the existing `@layer utilities` block):

```css
@media (prefers-reduced-motion: reduce) {
  .animate-honey-pour-center,
  .animate-honey-pour-left,
  .animate-honey-drip {
    animation: none !important;
    clip-path: inset(0 0 0 0) !important;
    transform: scaleY(1) !important;
  }
}
```

This forces the final state instantly for users who prefer reduced motion.

- [ ] **Step 3: Verify TypeScript and CSS compile cleanly**

Run:

```bash
npx tsc --noEmit
```

Expected: exits 0 with no errors. (No TS changes yet, but confirms the project still compiles.)

- [ ] **Step 4: Verify the dev server still renders without CSS errors**

Open http://localhost:3000 in the browser. Expected: homepage renders as before, no console errors, no visible change yet (we haven't added the component yet).

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(hero): add honey-drip animation tokens and keyframes"
```

---

### Task 2: Build the HoneyDrip component

**Files:**
- Create: `src/components/shared/HoneyDrip.tsx`

- [ ] **Step 1: Create the component file with full markup**

Create [src/components/shared/HoneyDrip.tsx](src/components/shared/HoneyDrip.tsx) with exactly this content:

```tsx
"use client";

import { useState } from "react";

/**
 * Decorative honey drip at the top of the hero section.
 * Animates once on mount: pour reveal + staggered droplet growth.
 * Remounts on every homepage visit (mount-key ensures fresh animation).
 */
export function HoneyDrip() {
  const [mountKey] = useState(() => Date.now());

  return (
    <div
      key={mountKey}
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 z-[5] pointer-events-none select-none"
    >
      <MobileDrip />
      <DesktopDrip />
    </div>
  );
}

function MobileDrip() {
  return (
    <svg
      className="block md:hidden w-full h-[100px] animate-honey-pour-left"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#885A2E" />
        </linearGradient>
        <filter id="honey-shadow-m" x="-5%" y="-5%" width="110%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#honey-shadow-m)">
        {/* Top band — full width wavy */}
        <path
          d="M0,0 L400,0 L400,22 C380,30 360,28 340,22 C320,18 300,26 280,22 C260,18 240,28 220,22 C200,18 180,28 160,22 C140,18 120,30 100,22 C80,18 60,26 40,22 C20,20 10,22 0,20 Z"
          fill="url(#honey-grad-m)"
        />

        {/* Droplets — each origin at top, grows down */}
        {/* Droplet 1 */}
        <g
          className="animate-honey-drip animate-delay-500"
          style={{ transformOrigin: "40px 18px" }}
        >
          <path
            d="M34,18 C34,40 34,58 40,58 C46,58 46,40 46,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M36,22 C35,30 35,40 35,48"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 2 */}
        <g
          className="animate-honey-drip animate-delay-600"
          style={{ transformOrigin: "95px 18px" }}
        >
          <path
            d="M88,18 C88,48 88,72 95,72 C102,72 102,48 102,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M90,22 C89,34 89,50 89,62"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 3 — deepest */}
        <g
          className="animate-honey-drip animate-delay-700"
          style={{ transformOrigin: "155px 18px" }}
        >
          <path
            d="M147,18 C147,55 147,92 155,92 C163,92 163,55 163,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M149,22 C148,38 148,62 148,80"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 4 */}
        <g
          className="animate-honey-drip animate-delay-800"
          style={{ transformOrigin: "215px 18px" }}
        >
          <path
            d="M208,18 C208,42 208,64 215,64 C222,64 222,42 222,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M210,22 C209,32 209,46 209,56"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 5 */}
        <g
          className="animate-honey-drip animate-delay-900"
          style={{ transformOrigin: "275px 18px" }}
        >
          <path
            d="M268,18 C268,50 268,78 275,78 C282,78 282,50 282,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M270,22 C269,36 269,54 269,68"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 6 */}
        <g
          className="animate-honey-drip animate-delay-1000"
          style={{ transformOrigin: "330px 18px" }}
        >
          <path
            d="M323,18 C323,40 323,58 330,58 C337,58 337,40 337,18 Z"
            fill="url(#honey-grad-m)"
          />
          <path
            d="M325,22 C324,30 324,40 324,48"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 7 */}
        <g
          className="animate-honey-drip animate-delay-1100"
          style={{ transformOrigin: "380px 18px" }}
        >
          <path
            d="M374,18 C374,38 374,50 380,50 C386,50 386,38 386,18 Z"
            fill="url(#honey-grad-m)"
          />
        </g>
      </g>
    </svg>
  );
}

function DesktopDrip() {
  return (
    <svg
      className="hidden md:block w-full h-[140px] animate-honey-pour-center"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="honey-grad-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BA8749" />
          <stop offset="100%" stopColor="#885A2E" />
        </linearGradient>
        <filter id="honey-shadow-d" x="-2%" y="-5%" width="104%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#honey-shadow-d)">
        {/* Top band — centered pour, thicker in middle, tapers to edges */}
        <path
          d="M240,0 L960,0 L960,18 C940,28 915,32 890,30 C860,28 830,34 800,32 C760,30 720,36 680,34 C640,30 600,36 560,34 C520,30 480,36 440,34 C400,30 370,36 340,34 C310,30 280,32 260,26 L240,22 Z"
          fill="url(#honey-grad-d)"
        />

        {/* Droplet 1 — left outer */}
        <g
          className="animate-honey-drip animate-delay-700"
          style={{ transformOrigin: "340px 28px" }}
        >
          <path
            d="M330,28 C330,60 330,88 340,88 C350,88 350,60 350,28 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M333,34 C331,48 331,68 331,78"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 2 — left inner */}
        <g
          className="animate-honey-drip animate-delay-900"
          style={{ transformOrigin: "500px 32px" }}
        >
          <path
            d="M488,32 C488,75 488,110 500,110 C512,110 512,75 512,32 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M491,38 C489,56 489,82 489,100"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 3 — center, deepest */}
        <g
          className="animate-honey-drip animate-delay-1100"
          style={{ transformOrigin: "620px 34px" }}
        >
          <path
            d="M606,34 C606,88 606,130 620,130 C634,130 634,88 634,34 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M609,42 C607,62 607,92 607,118"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 4 — right inner */}
        <g
          className="animate-honey-drip animate-delay-1300"
          style={{ transformOrigin: "740px 33px" }}
        >
          <path
            d="M729,33 C729,70 729,100 740,100 C751,100 751,70 751,33 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M732,40 C730,54 730,76 730,92"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Droplet 5 — right outer */}
        <g
          className="animate-honey-drip animate-delay-1500"
          style={{ transformOrigin: "860px 30px" }}
        >
          <path
            d="M850,30 C850,55 850,78 860,78 C870,78 870,55 870,30 Z"
            fill="url(#honey-grad-d)"
          />
          <path
            d="M853,36 C851,46 851,62 851,70"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}
```

**Key implementation notes:**

- Each droplet `<g>` has `animate-honey-drip` + a stagger delay. With the `both` fill-mode on the animation token, the 0% keyframe state (`scaleY(0)`) is applied during the animation-delay window (so the droplet is invisible until its turn), and the final keyframe state (`scaleY(1)`) is held after the animation ends — no initial inline `transform` needed.
- `transform-origin` must use SVG user-space coordinates (e.g. `"620px 34px"`). Modern browsers resolve this correctly for SVG child elements.
- `animate-delay-500` through `animate-delay-1500` — only `animate-delay-500` already exists. Remaining delays added in Step 2.
- `pointer-events-none` on wrapper ensures the drip never blocks clicks on nav dropdowns that overlap it.
- `aria-hidden="true"` — purely decorative.
- Mount-key via `useState(() => Date.now())` rather than `Date.now()` inline, to ensure the key is stable across re-renders but fresh on remount.

- [ ] **Step 2: Add missing `animate-delay-*` utilities to globals.css**

The existing file only defines delays up to `animate-delay-500`. Open [src/app/globals.css](src/app/globals.css), find the `@layer utilities` block, and replace it with:

```css
@layer utilities {
  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
  .animate-delay-600 { animation-delay: 600ms; }
  .animate-delay-700 { animation-delay: 700ms; }
  .animate-delay-800 { animation-delay: 800ms; }
  .animate-delay-900 { animation-delay: 900ms; }
  .animate-delay-1000 { animation-delay: 1000ms; }
  .animate-delay-1100 { animation-delay: 1100ms; }
  .animate-delay-1300 { animation-delay: 1300ms; }
  .animate-delay-1500 { animation-delay: 1500ms; }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: exits 0 with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/HoneyDrip.tsx src/app/globals.css
git commit -m "feat(hero): add HoneyDrip component with animated SVGs"
```

---

### Task 3: Integrate HoneyDrip into Hero and verify in browser

**Files:**
- Modify: `src/components/sections/Hero.tsx` (insert `<HoneyDrip />` as first child of `<section>`)

- [ ] **Step 1: Import and render the component**

Open [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx). Add the import near the top (after the existing imports):

```tsx
import { HoneyDrip } from "@/components/shared/HoneyDrip";
```

Then, inside the returned `<section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">`, add `<HoneyDrip />` as the very first child (immediately after the opening `<section>` tag and its comment, before the background image div):

```tsx
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Decorative honey drip under the nav */}
      <HoneyDrip />

      {/* Full background image */}
      <div className="absolute inset-0">
        ...
```

Leave everything else in `Hero.tsx` unchanged.

- [ ] **Step 2: Verify TypeScript compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: exits 0 with no errors.

- [ ] **Step 3: Browser verification — desktop view**

Open http://localhost:3000 in a desktop-width browser (viewport ≥ 768px). Hard-refresh (Cmd+Shift+R) to ensure fresh load.

Expected behavior:
- Within ~0.1s, a horizontal honey band reveals outward from the center under the nav
- Over the next ~1.5s, 5 droplets grow downward one at a time with a subtle overshoot/settle
- Deepest (center) droplet extends ~120px below the nav
- Colors: warm-gold at top transitioning to deep-bronze at bottom
- Subtle soft shadow visible beneath the drip
- After ~2.5s everything holds static
- Hero headline "We're here to listen." is NOT obscured (drip sits behind text, in front of background)
- No console errors
- Clicking on the nav area works normally (drip is `pointer-events-none`)

If the drip looks visually off (proportions, droplet placement, color), tweak the SVG path `d` attributes and `transform-origin` coordinates in [src/components/shared/HoneyDrip.tsx](src/components/shared/HoneyDrip.tsx) until it looks right. Keep the overall structure identical.

- [ ] **Step 4: Browser verification — mobile view**

In DevTools, toggle device toolbar and set width to 375px (iPhone SE). Hard-refresh.

Expected behavior:
- Full-width wavy honey band reveals left-to-right over ~0.8s
- 7 droplets grow downward in sequence, with varied depths (shortest ~50px, deepest ~92px)
- Same gradient and shadow
- Holds static after ~2.5s
- Hero text unobscured

- [ ] **Step 5: Browser verification — remount on navigation**

On the homepage, click a link in the nav that navigates to another page (e.g. `/shop` or `/about`). Then click the logo or nav link back to home.

Expected: the honey drip animation plays again from scratch on return to the homepage.

- [ ] **Step 6: Browser verification — reduced motion**

In macOS System Settings → Accessibility → Display, enable "Reduce motion" (or in Chrome DevTools: Rendering panel → "Emulate CSS media feature prefers-reduced-motion" → reduce). Hard-refresh homepage.

Expected: drip appears fully revealed with no animation — just the static final state. All droplets visible at full scale immediately.

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat(hero): render HoneyDrip in hero section"
```

---

## Self-Review Checklist

Before claiming done, confirm:

- [ ] Drip renders at top of hero, under nav, on both desktop and mobile
- [ ] Animation plays once on load, completes in ~2.5s, holds static
- [ ] Animation replays on client-side nav back to home
- [ ] `prefers-reduced-motion: reduce` disables animation and shows final state
- [ ] Hero headline "We're here to listen." is never visually obscured
- [ ] Colors use `#BA8749` and `#885A2E` exactly (brand tokens)
- [ ] `pointer-events-none` on wrapper — nothing blocks interaction with nav/hero below
- [ ] No new TypeScript errors, no browser console errors
- [ ] No new dependencies added to `package.json`
