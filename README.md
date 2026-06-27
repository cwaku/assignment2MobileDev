# Instagram Clone — Expo + TypeScript

SAIT Mobile App Dev — Assignment 2. A multi-screen Instagram UI clone built with
**Expo Router** (TypeScript), demonstrating tab + stack navigation, dynamic lists,
route parameters, and reusable components.

## Screens

- **Home** — stories bar + scrolling feed (a `FlatList` of post cards)
- **Explore** — 3-column image grid
- **Reels** — full-screen vertical reels
- **Profile** — header stats + 3-column post grid
- **Post Detail** (stack) — opened from any feed/grid item via a route parameter

## Navigation

- Bottom **Tab** navigator (Home · Explore · Reels · Profile)
- **Stack** flow: `→ post/[id]`, reading the `id` route parameter

## Project structure

```
src/
  app/
    _layout.tsx          Root stack (tabs group + post/[id])
    (tabs)/
      _layout.tsx        Bottom tab navigator (icons)
      index.tsx          Home
      explore.tsx        Explore
      reels.tsx          Reels
      profile.tsx        Profile
    post/[id].tsx        Post detail (route param)
  components/            Avatar · StoryRing · StoriesBar · PostCard · ExploreTile · ReelItem · ProfileHeader
  constants/Colors.ts    Shared color palette
  data/                  Mock users, posts, stories (+ getPostById)
  types/                 Shared TypeScript interfaces
```

## Run

```bash
npm install
npx expo start
```

Then open in **Expo Go** (iOS/Android) or a simulator:

- press `i` — iOS simulator
- press `a` — Android emulator
- or scan the QR code with the Expo Go app on a physical device

## Reference

This app recreates the **Instagram** mobile interface. Reference screenshots of the
real app are in [`screenshots/`](./screenshots).

## Tech

Expo SDK 56 · React Native · TypeScript · Expo Router · `@expo/vector-icons` · `expo-image`
