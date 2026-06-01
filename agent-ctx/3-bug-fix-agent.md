# Task 3 — Bug Fix Agent

## Task: Fix Savings Calculator animated counter showing 0

## Work Done

### Root Cause
The `useAnimatedCounter` hook in `SavingsCalculator.tsx` used framer-motion's `useSpring` + `useTransform` which returned a `MotionValue` object. This was rendered as `<motion.span>{animatedMissing}</motion.span>`, but framer-motion v12 does not reliably render `MotionValue` objects as direct children of motion components — the displayed value stayed at 0.

### Fix Applied
Replaced the entire `useAnimatedCounter` hook with a custom `requestAnimationFrame`-based implementation:
- Uses `useState` to track the displayed number (plain number, not MotionValue)
- Uses `useRef` to track the current animated value and RAF handle (avoids stale closures)
- easeOutCubic easing over 800ms for natural deceleration
- Properly cancels animation frames on cleanup via `useEffect` return

Also changed:
- `<motion.span>{animatedMissing}</motion.span>` → `<span>{animatedMissing}</span>` (plain number, no need for motion.span)
- Same change for the yearly counter
- Removed unused imports `useSpring` and `useTransform` from framer-motion

### Verification
- `bun run lint` — zero errors
- Dev server stable, page compiles successfully

## Key Result
Animated counters now correctly display values like 140 (missing pieces) and 1680 (yearly missing) for 20 packets, instead of always showing 0.
