This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Timeline Journey (GSAP ScrollTrigger)

The SMS workflow timeline is implemented with GSAP + ScrollTrigger.

- Main component: `components/Journey /TimelineJourney.tsx`
- Slide component: `components/Journey /TimelineSlide.tsx`
- Types: `components/Journey /types.ts`
- Dummy data: `components/Journey /data/dummyTimeline.ts`

### Usage

Rendered in `components/homepage/HomePage.tsx`:

```tsx
import TimelineJourney from "@/components/Journey /TimelineJourney";
import { dummyTimelineSteps } from "@/components/Journey /data/dummyTimeline";

<TimelineJourney steps={dummyTimelineSteps} />
```

### How it works

- Uses `gsap` and `ScrollTrigger` with `scrub: true` and `pin: true` to pin the timeline and drive slide transitions via scroll.
- Each slide image translates from x:100 -> 0 with opacity 0 -> 1, text translates from y:30 -> 0 with opacity. Image has a subtle parallax scale to 1.05 mid-scroll.
- Keyboard navigation: Arrow Up/Down or Left/Right to move between slides.

### Replacing images

Replace `imageUrl` in `components/Journey /data/dummyTimeline.ts` with your real URLs or local assets. Keep `imageAlt` meaningful for accessibility.

If using local images, place them under `public/` and use `/your-image.jpg` paths.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
