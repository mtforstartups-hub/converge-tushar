# Converge Finance — Marketing Website

Enterprise marketing website for Converge Finance (convergefi.com), an AI Credit Intelligence Platform for commercial real estate lenders.

## Run & Operate

- `pnpm --filter @workspace/converge-website run dev` — run the marketing website (Vite, port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Website: React + Vite + Wouter (routing) + Tailwind v4 + Framer Motion + Radix UI
- API: Express 5
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/converge-website/src/` — all website source
- `artifacts/converge-website/src/index.css` — brand design tokens (colors, fonts)
- `artifacts/converge-website/src/pages/home.tsx` — homepage
- `artifacts/converge-website/src/components/layout/Navbar.tsx` — global nav
- `artifacts/converge-website/src/components/layout/Footer.tsx` — global footer
- `artifacts/converge-website/src/components/templates/AgentPageTemplate.tsx` — agent page template
- `artifacts/converge-website/src/components/templates/SolutionPageTemplate.tsx` — solution page template
- `artifacts/converge-website/src/data/agents.ts` — agent data source of truth
- `artifacts/converge-website/src/data/solutions.ts` — solution data source of truth

## Architecture decisions

- Tailwind v4 `@theme inline` used for all design tokens — do not edit `.tailwind.config` (doesn't exist)
- Named brand colors defined in `@theme inline` block: `bg-midnight`, `bg-deep-slate`, `bg-verified`, `bg-charcoal`, `bg-steel`, `bg-parchment`, `bg-warm-white` — use these instead of arbitrary hex values
- Zero border-radius enforced via `--radius: 0rem` — no rounded corners anywhere
- All 6 agents and 5 solutions driven from data files, not hardcoded in pages
- Agent pages and solution pages use shared templates, all rendering from `src/data/`

## Product

Converge Finance is the Credit Intelligence Platform for commercial real estate lenders. CreditOS — the intelligence engine — reconstructs entities, resolves document conflicts, and matches deals to credit policy before the LOS opens. Three intelligence layers: Loan Officer Intelligence, Processor Intelligence, Underwriter Intelligence. Six agents: Triage, Credit Intelligence, Policy Match, Entity Review, Background Report, Comps.

## Brand Bible (v1.0, April 2026)

### Colors
- **Midnight** `#0A0F1C` — primary brand dark; hero backgrounds, nav, footers → `bg-midnight`
- **Deep Slate** `#162032` — secondary dark; data/platform sections, cards → `bg-deep-slate`
- **Parchment** `#F4F1EB` — primary editorial surface; page backgrounds → `bg-background` (CSS var)
- **Steel** `#8A9BAE` — supporting neutral; subdued text, dividers → `text-steel`
- **Verified** `#0B6B60` — single accent (one per view); CTAs, buttons, highlights → `bg-verified`, `text-secondary`
- **Charcoal** `#2D3D4F` — structural neutral; footer background → `bg-charcoal`

### Typography
- **Headings/Display**: DM Sans (Neue Haas Grotesk substitute — not on Google Fonts)
- **Editorial body**: DM Sans (same — Tiempos Text substitute for long-form)
- **Mono/Technical**: IBM Plex Mono for loan IDs, codes, audit trails → `font-mono`
- Zero border-radius (sharp edges reinforce precision/authority)

### Layout rules
- Dark-light alternation: hero on Midnight, content sections on Parchment/Warm White, data sections on Deep Slate, footer on Charcoal
- One accent (Verified) per visual plane — never mix additional accent colors
- No gradients, textures, or decorative elements

### Voice
- Declarative, quantified, present-tense, domain-fluent
- Hero headline: "Credit intelligence for lenders who originate at scale."
- Primary CTA: "See it on a live deal"
- Proof metrics: 2.3M+ Loans analyzed · 98.7% Extraction accuracy · 76% Faster decisioning · $12B+ Capital enabled

## User preferences

- Brand Bible supersedes all prior design decisions — colors, fonts, copy, and layout structure must comply
- Category: "Credit Intelligence Platform" (not AI underwriting, not document automation)

## Gotchas

- `font-serif` is mapped to DM Sans (same as `font-sans`) — the brand font Neue Haas Grotesk Display Pro is not available on Google Fonts
- Use named color utilities (`bg-midnight`, `bg-verified`, etc.) rather than hardcoded hex values like `bg-[#0A0F1C]`
- Tailwind's `bg-white` gives pure #FFFFFF; brand spec prefers Warm White `#F7F5F2` → use `bg-warm-white` for content section backgrounds

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
