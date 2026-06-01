# Task 3 — Hero Cleanup Agent

## Task: Piyush Mishra Style Cleanup of HeroSection

### Philosophy: "If it doesn't convert, it doesn't stay."

### What was done:
Completely rewrote `/home/z/my-project/src/components/bajrangi/HeroSection.tsx` — removed all decorative, non-converting elements while keeping all action-driving content.

### Removals (12 items):
1. Gold particles (18 floating dots + container)
2. Scan line effect (gold horizontal line moving down)
3. Vignette effect (darker edges overlay)
4. Diagonal line pattern overlay
5. Typing/deleting tagline animation (`useTypingTagline` hook)
6. Count-up animation (`useCountUp` hook)
7. Eyebrow text "Paper Dona & Plate · Lakhimpur"
8. Sub description "Paper dona & plate. Sahi maal. Guaranteed count. Machine-sealed."
9. 3 pills at bottom (Machine Sealed, Count Slip Inside, Tamper Evident)
10. Parallax effect (useScroll, useTransform, scrollYProgress, rightPanelY)
11. Background watermark "बजरंगी"
12. Gradient mesh background (simplified to single subtle gradient)

### Keeps (9 items):
1. H1 "बजरंगी।" with fadeFromLeft
2. Tagline "मतलब भरोसा।" — static with text-shimmer
3. "मतलब 100 माने पूरे 100।" — gold
4. Brand line "Jo likha hai — woh hi milega।" — italic, muted
5. Two CTAs — "Products Dekhein →" and "Stockist Bano ↗"
6. Shield badge — simplified (no ★★★, no "सिर्फ बजरंगी में")
7. Number 100 — static with shimmer and glow
8. "माने पूरे 100 — गिन के देखो!"
9. Ticker/marquee — both rows

### Results:
- Lines reduced: 568 → ~195
- Imports cleaned: removed useEffect, useState, useRef, useCallback, useScroll, useTransform
- Styled-jsx cleaned: removed hero-scan, .hero-scan-line, cursor-blink, .hero-typing-cursor keyframes
- Lint: zero errors
- Dev server: compiling successfully
