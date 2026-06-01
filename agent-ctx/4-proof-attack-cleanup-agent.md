# Task 4 — Proof+Attack Cleanup Agent

## Task: Piyush Mishra style cleanup of ProofSection + AttackSection

**Philosophy: If it doesn't sell, it doesn't stay.**

### ProofSection.tsx Cleanup

**Removals (ALL completed):**
1. Section number badge with ping — "02" circle with animate-ping → REMOVED
2. "Section 02" label — Meta-label → REMOVED
3. Decorative section number — "02" watermark in top-right → REMOVED
4. Background dots pattern — radial-gradient dots → REMOVED
5. Background diagonal lines pattern — repeating-linear-gradient → REMOVED
6. Animated emoji on each card — `proof-emoji-pulse` class and emoji span → REMOVED, also removed `emoji` and `label` fields from proofCards data
7. Red glow behind challenge text — `proof-red-glow` div → REMOVED
8. "Comparison" divider label — text between gradient lines → REMOVED (entire divider div)
9. Corner accents on challenge box — 4 gold corner decorations → REMOVED
10. VS badge pulse animation — `vs-badge-pulse` class → REMOVED (VS badge kept, animation removed)

**Keeps (ALL preserved):**
1. Heading — Changed from "The Proof" to "तीन सबूत" (Hindi, more direct)
2. Subheading — Kept quote "Teen sach — jo aap khud jaanch sakte hain."
3. Three proof cards — Simplified: icon in gold circle + title + description only (no emoji, no label)
4. Challenge line — Kept text, phone number, typing animation (usePhoneTyping), clickable link
5. Comparison table — Kept entirely (both Local Wala and Bajrangi columns, VS badge, staggered item animations)

**CSS cleanup:**
- Removed keyframes: proof-emoji-glow, proof-glow-pulse, vs-pulse, proof-border-pulse
- Removed classes: proof-emoji-pulse, proof-red-glow, vs-badge-pulse, proof-pulse-border, proof-bajrangi-column
- Removed decorative pattern overlay from Bajrangi comparison column
- Kept only: proof-phone-cursor-blink keyframe + .proof-phone-cursor class
- Removed unused imports (none removed — all still in use)

**Result:** ProofSection.tsx reduced from 527 lines to ~215 lines

---

### AttackSection.tsx Cleanup

**Removals (ALL completed):**
1. Section number badge with ping — "05" circle → REMOVED
2. "Section 05" label — Meta-label → REMOVED
3. Decorative section number — "05" watermark → REMOVED
4. "The Attack" heading — Meta-label → REMOVED
5. "Three lines. Each one a gut-punch. Nothing soft." — Meta-commentary → REMOVED
6. "Line 1 / The Campaign Line" badge → REMOVED
7. "Line 2 / The Math Line" badge → REMOVED
8. "Line 3 / The Awadhi Line" badge → REMOVED
9. Typewriter animation — Removed `useTypewriter` hook and `useEffect`/`useState` imports, "50 माने 50।" now shown as static text
10. Heartbeat animation — Removed `attack-heartbeat` class from section → REMOVED
11. Noise/grain texture overlay — `attack-noise` div → REMOVED
12. Diagonal texture overlay — repeating-linear-gradient → REMOVED
13. "Pack Sticker Visual" heading → REMOVED
14. Description text below sticker → REMOVED
15. Red pulsing glow behind campaign line — `attack-red-pulse` div → REMOVED

**Keeps (ALL preserved):**
1. Campaign line — "50 माने 50। गिन के देखो।" billboard-scale text, gold shimmer on "गिन के देखो।", dark card, gold top accent
2. Math line — Card with side accent, text shimmer on "50" and "हिसाब आपका।"
3. Awadhi line — Card with background dot pattern, side accent, text shimmer on "इहै बा बजरंगी।"
4. Sticker visual — Dashed gold border box with "खोलिए। गिनिए। भरोसा कीजिए।" and hover rotate effect, outer glow
5. Entrance animations — All framer-motion entrance variants preserved (campaignLineEntrance, mathLineEntrance, awadhiLineEntrance, stickerEntrance)
6. Gold top accent on campaign card — Kept

**CSS cleanup:**
- Removed keyframes: attack-pulse, attack-cursor-blink, heartbeat, sticker-glow-pulse
- Removed classes: attack-red-pulse, attack-cursor, attack-noise, attack-heartbeat, attack-sticker-glow
- Kept only: rotate-dash keyframe + .sticker-rotate-border class
- Removed unused imports: useEffect, useState (from useTypewriter removal)
- Removed unused variant: headerFade (no header section anymore)

**Result:** AttackSection.tsx reduced from 446 lines to ~145 lines

---

### Verification
- `bun run lint`: Zero errors
- Dev server compiling successfully (GET / 200)
- Both components still use 'use client' directive
- All brand colors preserved (#C8181A, #D4A84B, #0C0C0C)
- All font classes preserved (font-baloo, font-mono-space, font-dm)
- framer-motion entrance animations preserved (simplified, no typewriter/heartbeat)
