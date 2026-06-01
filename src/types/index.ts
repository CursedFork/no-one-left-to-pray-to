export interface Character {
  slug: string;
  name: string;
  age: number | string;
  race: string;
  class: string;
  subclass?: string;
  god: string;
  domain: string;
  godSource: string;
  endGoal: string;
  background?: string;
  flaws: string[];
  portrait: string | null;
  accentColor: string;
  biography: string;
  dndBeyondLink?: string;
  /** Set to true to reveal this character's full record. */
  unlocked?: boolean;
}

export interface Session {
  slug: string;
  title: string;
  date: string;
  teaser: string;
  body: string;
  featuredImage?: string;
}

export type BestiaryStatus = 'Slain' | 'Active' | 'Bargained With' | 'Erased';

export interface BestiaryStats {
  hp?: number | string;
  ac?: number | string;
  speed?: string;
  saveDC?: number | string;
  saveBonuses?: string;
  [key: string]: string | number | undefined;
}

export interface BestiaryEntry {
  slug: string;
  name: string;
  role: string;
  tags: string[];
  status: BestiaryStatus;
  description: string;
  stats?: BestiaryStats;
  actions?: string[];
  abilities?: string[];
  legendaryActions?: string[] | null;
  legendaryReactions?: string[] | null;
  externalLink?: string;
  quote?: string;
  notes?: string;
}

export interface MagicItem {
  slug: string;
  name: string;
  type: string;
  rarity: string;
  attunement: boolean;
  attunementNote?: string;
  description: string;
  properties: string[];
  lore?: string;
  image?: string;
}

export interface ConsumableGroup {
  title: string;
  items: { name: string; description: string }[];
}

export interface HomebrewRule {
  title: string;
  description: string;
}

export interface MapEntry {
  slug: string;
  title: string;
  description: string;
  image: string | null;
}

export interface LoreSection {
  id: string;
  heading: string;
  body: string;
  subsections?: { id: string; heading: string; body: string }[];
}
