# No One Left to Pray To

Campaign codex for a D&D 5e campaign set in the world of Aethernox. Built with Vite + React 18 + TypeScript + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Adding Content

All content lives in `/src/data/`. No backend required.

### New Session

Open [`src/data/sessions.ts`](src/data/sessions.ts) and add an entry to the `sessions` array:

```ts
{
  slug: 'session-5-slug',
  title: 'Session Title',
  date: 'Month Day, Year',
  teaser: 'One-sentence teaser shown on the timeline.',
  body: `Full recap text. Use blank lines between paragraphs.

Start a line with > to render it as a styled blockquote (for dialogue):

> "What the character said."`,
},
```

### New Character

Open [`src/data/characters.ts`](src/data/characters.ts) and add to the array:

```ts
{
  slug: 'character-slug',
  name: 'Full Name',
  age: 30,
  race: 'Race',
  class: 'Class',
  god: 'Patron deity',
  domain: 'Domain',
  godSource: 'Source pantheon',
  endGoal: 'One-sentence driving motivation.',
  flaws: ['Flaw 1', 'Flaw 2'],
  portrait: '/images/characters/filename.jpg',  // or null for initials
  accentColor: '#4a5a6a',
  biography: `Full biography text. Use \\n\\n between paragraphs.`,
},
```

Drop portrait images in `public/images/characters/`. If `portrait` is `null`, the component renders styled initials.

### New Bestiary Entry

Open [`src/data/bestiary.ts`](src/data/bestiary.ts):

```ts
{
  slug: 'creature-slug',
  name: 'Creature Name',
  role: 'Role description',
  tags: ['Tag1', 'Tag2'],
  status: 'Active',       // 'Active' | 'Slain' | 'Bargained With' | 'Erased'
  description: 'Narrative description.',
  stats: { hp: 200, ac: 18, speed: '40 ft', saveDC: 20 },
  actions: ['Attack: +10 to hit, 2d8+5 damage.'],
  abilities: ['Ability: Description.'],
  legendaryActions: ['Action (Cost 2): Description.'],   // or null
  legendaryReactions: ['Reaction: Description.'],        // or null
  externalLink: 'https://dndbeyond.com/...',             // optional
  quote: '"Spoken by the creature."',                    // optional
  notes: 'DM notes.',                                    // optional
},
```

### New Magic Item

Open [`src/data/items.ts`](src/data/items.ts) and add to `magicItems`:

```ts
{
  slug: 'item-slug',
  name: 'Item Name',
  type: 'Weapon (longsword)',
  rarity: 'Rare',
  attunement: true,
  description: 'Item lore.',
  properties: ['Property Name: Effect.'],
  image: '/images/items/filename.png',  // optional
},
```

### New Map

Open [`src/data/maps.ts`](src/data/maps.ts):

```ts
{
  slug: 'map-slug',
  title: 'Map Title',
  description: 'Shown in the lightbox.',
  image: '/images/maps/filename.jpg',  // or null
},
```

## Image Assets

Place images in `public/images/` before running. All components fall back gracefully when files are missing.

```
public/images/maps/aethernox-map.jpg
public/images/maps/zariel-throne.jpg
public/images/maps/zariel-aftermath.jpg
public/images/maps/cyric-domain.jpg
public/images/maps/izanami-domain.png
public/images/maps/valley-village.png
public/images/items/sword-of-zariel.png
public/images/items/godsbane.png
public/images/characters/<slug>.jpg    ← one per character
```

## Deploy

Static SPA — compatible with Vercel, Netlify, and GitHub Pages.

**Vercel / Netlify**: Connect the repo. Build command: `npm run build`. Output directory: `dist`.
