# GLOBALYS Web UI Agent Rules

## Mission
Build a mobile-first web UI reference for GLOBALYS.

## Product posture
- premium
- sober
- B2B
- transactional
- operational
- high trust
- state clarity first

## Source of truth
- All files in /spec/theme are the only source of truth for:
  - colors
  - semantics
  - typography
  - spacing
  - shape
  - component behavior
  - state behavior
- All files in /spec/product are the only source of truth for:
  - V1 scope
  - product surfaces
  - real backend-supported workflows

## Hard constraints
- Do not invent a new theme
- Do not invent backend logic
- Do not invent permissions
- Do not add extra product areas outside V1
- Do not create multiple visual directions
- Do not overuse purple
- Do not create playful, glossy, neon, or consumer-social UI
- Keep surfaces mostly neutral
- Keep booking, payment, messaging, verification, and dashboards visually clear

## Technical target
- website first
- mobile-first responsive
- React + TypeScript
- componentized architecture
- clean mock data only for visual development
- no backend integration in the first phase
- no branch creation unless explicitly requested
- keep changes clean and organized

## Build order
1. analyze specs
2. scaffold app
3. implement theme
4. implement reusable components
5. implement V1 screens
6. refine visual consistency

## Required V1 screens
- Login
- Register
- Discovery Home
- Search / Filters / Results
- Service Detail
- Booking Create
- Booking Detail
- Payment Status / Result
- Chat Threads
- Chat Detail
- Profile / Verification
- Client Dashboard
- Provider Dashboard
- Provider Service Editor
- Provider Availability Manager

## Review standard
Before finishing a task:
- run the relevant checks
- ensure the screen/component matches the theme files
- avoid unrelated rewrites
