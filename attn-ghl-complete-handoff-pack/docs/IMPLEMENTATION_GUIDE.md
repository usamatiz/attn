# Go High Level Implementation Guide

## Recommended build method
Use a **hybrid build**:
- Build the page structure natively in GHL where practical.
- Use custom CSS for the visual system.
- Use a Custom HTML block if you want a closer 1:1 build from the supplied code.

## Section order
1. Sticky header
2. Hero with video left and orange CTA form right
3. Featured in strip
4. Pain points section
5. Proof / $250M+ social proof section
6. Services section
7. Lead magnet section
8. Testimonials section
9. Who is Will Giles section
10. Final orange CTA block
11. Footer

## Hero notes
- The hero should remain a **video**.
- Use `assets/hero/hero-video-cover.png` as the poster/cover image.
- The video player should stay left, with the orange form block right on desktop.
- On mobile, stack the form beneath the video.

## Form notes
- Replace all demo forms with live GHL forms.
- Preserve the orange form background and white fields.
- Button styling should remain bold, uppercase, and high-contrast.

## Mobile notes
- Collapse nav links, keep CTA visible.
- Stack all grids to one column.
- Keep handwritten annotations smaller but visible.

## Recommended developer workflow
1. Upload assets.
2. Paste custom CSS.
3. Rebuild section-by-section using the reference screenshot.
4. Swap in live content and forms.
5. QA spacing on desktop, tablet, and mobile.
