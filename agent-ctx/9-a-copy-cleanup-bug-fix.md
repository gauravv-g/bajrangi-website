# Task 9-a: Copy Cleanup + Bug Fix Agent

## Summary
Applied 5 Piyush Mishra copy cuts and 4 bug fixes across the Bajrangi website. All changes verified with zero lint errors.

## Files Modified
1. `/home/z/my-project/src/components/bajrangi/Navbar.tsx` — "Hero" → "Home", added FAQ link
2. `/home/z/my-project/src/components/bajrangi/FAQSection.tsx` — Removed "6 questions" count
3. `/home/z/my-project/src/components/bajrangi/RetailerSection.tsx` — Removed form complete indicator, cleaned up dead CSS/unused imports
4. `/home/z/my-project/src/components/bajrangi/ProductsSection.tsx` — Removed product count badge and "Size comparison" label
5. `/home/z/my-project/src/app/layout.tsx` — Removed Geist font imports, simplified body className
6. `/home/z/my-project/src/components/bajrangi/ScrollSpy.tsx` — Expanded SECTIONS to include calculator, faq, order
7. `/home/z/my-project/src/components/bajrangi/SectionIndicator.tsx` — Added calculator and faq sections

## Verification
- `bun run lint` — zero errors
- Dev server compiling successfully
