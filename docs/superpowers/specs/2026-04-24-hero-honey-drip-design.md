# Hero Honey Drip — Design Spec

**Date:** 2026-04-24
**Scope:** Homepage hero section

## Goal

Add an on-brand, stylized honey-drip SVG animation at the top of the homepage hero (under the nav). The drip animates in once on page load / homepage visit, then holds in place.

## Placement

- New component rendered as the first child of the `<section>` inside `Hero`, positioned `absolute` at the top of the hero spanning full width.
- Z-index stack inside hero (top → bottom): hero text (`z-10`) → HoneyDrip (`z-[5]`) → gradient fade → background image. Drip sits in front of the hero background but behind the headline copy so text is never obscured.
- Two SVGs inside the component, toggled by Tailwind `md:` breakpoint:
  - **Mobile (<768px):** full-width organic wave with 6–7 droplets of varied lengths across the width
  - **Desktop (≥768px):** centered pour (~60% width, centered) thicker at center, tapering outward, 4–5 droplets
- Deepest droplet: ~100px on mobile, ~120px on desktop

## Visual

- Main shape: smooth bezier-curve blob across the top with droplets hanging beneath, rounded droplet tips
- Fill: SVG `<linearGradient>` — `#BA8749` (warm-gold, brand token) at top → `#885A2E` (deep-bronze, brand token) at bottom
- Gloss highlight: thin semi-transparent white curve (~30% opacity) on the left side of each droplet for liquid sheen
- Soft drop shadow: SVG filter with small blur in deep-bronze at low opacity

## Animation (~2.5s total, runs once on mount)

1. **0–0.8s** — Top horizontal "pour" reveals outward from center on desktop / left-to-right on mobile (implementable via animated `clip-path` inset, CSS `mask-image`, or SVG `stroke-dasharray` — implementer's choice)
2. **0.6–2.0s** — Droplets grow downward one at a time, staggered 150ms apart, using `transform-origin: top; scaleY: 0 → 1`
3. **1.8–2.5s** — Subtle 3px bounce on the deepest droplet, gloss highlight fades in to 30% opacity

After 2.5s: everything holds static. No loop.

## Restart Behavior

- Animation must run fresh every time the user lands on / returns to the homepage (including client-side navigation).
- Implemented via `useState(() => Date.now())` inside `HoneyDrip`, used as `key` on the SVG wrapper, so each component mount yields a fresh animation start.

## Accessibility

- Wrapped in `@media (prefers-reduced-motion: reduce)`: drip appears in final state instantly with no animation.

## File Changes

- **New:** `src/components/shared/HoneyDrip.tsx` — component with both SVGs + mount-key logic
- **Modified:** `src/components/sections/Hero.tsx` — insert `<HoneyDrip />` as first child of the `<section>`
- **Modified:** `src/app/globals.css` — add keyframes `honey-pour`, `honey-drip`, `honey-bounce` + `prefers-reduced-motion` override

## Bundle Impact

~4KB added (two inline SVGs + keyframes). No new dependencies.

## Success Criteria

- Drip visible at top of hero, under the nav, on both breakpoints
- Animation plays once on homepage load, completes in ~2.5s, holds static
- Animation replays on client-side nav back to homepage
- Respects `prefers-reduced-motion`
- Hero headline text is never visually obscured
- Colors match brand tokens exactly
