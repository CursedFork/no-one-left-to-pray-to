import type { MagicItem, ConsumableGroup, HomebrewRule } from '../types';

export const magicItems: MagicItem[] = [
  {
    slug: 'sword-of-zariel',
    name: 'Sword of Zariel',
    type: 'Weapon (longsword)',
    rarity: 'Artifact',
    attunement: true,
    attunementNote: 'Requires attunement by a creature the sword deems worthy. The weapon can choose to attune to a bearer or reject them.',
    description: 'This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, its blade is keen and its purpose is clear: to smite evil wherever it is found. It was left behind by Zariel upon her death in her throne room — a thing left by something that had prepared for the possibility of defeat. Currently wielded by Velkyn Kensek.',
    properties: [
      'Angelic Language: You can speak, read, and write Celestial.',
      'Celestial Resistance: You have resistance to necrotic and radiant damage.',
      'Divine Presence: Your Charisma score becomes 20, unless it is already higher.',
      'Feathered Wings: You sprout a pair of feathered wings that grant a flying speed of 150 feet. They fold against your back when not in use.',
      'Truesight: You have truesight out to a range of 60 feet.',
      'Searing Radiance: The sword deals an extra 6d8 radiant damage to creatures of evil alignment that you hit with it. Evil creatures that take this damage must succeed on a DC 17 Constitution saving throw or become blinded until the start of your next turn.',
      'Sentience: The Sword of Zariel is a sentient weapon of lawful good alignment, with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18.',
      'Holy Light: As a bonus action, you can cause the sword to glow with a holy light. The sword sheds bright light in a 5-foot radius and dim light for an additional 5 feet.',
      'Truth Seer: As a bonus action, you can cast the detect thoughts spell from the sword (no spell slot, save DC 13). Once used, this property can\'t be used again until the next dawn.',
      'Solar Blessing: When you hit a fiend or undead with the sword, it takes an additional 2d8 radiant damage.',
      'Divine Spells — At Will: Detect Evil and Good, Invisibility',
      'Divine Spells — 3/Day Each: Blade Barrier, Dispel Evil and Good, Resurrection',
      'Divine Spells — 1/Day Each: Commune, Control Weather',
    ],
    image: '/images/items/sword-of-zariel.png',
  },

  {
    slug: 'godsbane',
    name: 'Godsbane',
    type: 'Weapon (greatsword)',
    rarity: 'Artifact',
    attunement: true,
    attunementNote: 'Attunement requires 1 hour spent alone in darkness. At the end of that hour, make a DC 18 Wisdom saving throw or gain a long-term madness.',
    description: 'A jagged blackened blade crossed by violet fractures that glow with inner light. The crimson edge is sharp in a way that feels deliberate — not forged, but willed into being. A baleful gem at the crossguard pulses like a dying heart. Cyric wielded this blade to kill Mystra, goddess of magic, and the Weave has been unraveling ever since. While attuned, you cannot serve any deity, and divine beings within 1 mile sense your presence. Turned against Cyric by Velkyn Kensek in the Domain of the Shattered Weave — the god\'s own blade became the instrument of his undoing. Claimed by the party after his death.',
    properties: [
      '+3 weapon bonus to attack and damage rolls.',
      '+2d8 necrotic damage on all hits, ignoring necrotic resistance.',
      'Shatter the Faithful: When you hit a celestial, fiend, or divine avatar, that creature must make a DC 18 Constitution saving throw or suffer Weave Rupture: disadvantage on all concentration checks and the creature\'s next spell deals half damage / the creature\'s next attack roll is made with disadvantage. On a failed save, the hit also deals an additional +2d8 necrotic damage.',
      'Curse — The Weight of Deicide: Cannot be willingly unattuned except by being reduced to 0 HP or by a Wish spell. Each time you kill a divine being, make a DC 20 Wisdom saving throw or permanently lose 1 point of Wisdom. At Wisdom 8 or lower, the blade begins to whisper compulsions.',
      'While attuned: You cannot serve any deity in any capacity. Divine beings of any alignment sense your presence within 1 mile.',
    ],
    image: '/images/items/godsbane.png',
  },
];

export const consumables: ConsumableGroup[] = [
  {
    title: 'Potions',
    items: [
      { name: 'Potion', description: 'Restore 25% of maximum HP.' },
      { name: 'Hi-Potion', description: 'Restore 50% of maximum HP.' },
      { name: 'Max-Potion', description: 'Restore 100% of maximum HP.' },
    ],
  },
  {
    title: 'Ethers (Spell Slots)',
    items: [
      { name: 'Ether', description: 'Restore spell slot points equal to 5 (1 point = 1 spell slot level).' },
      { name: 'Hi-Ether', description: 'Restore spell slot points equal to 10.' },
      { name: 'Max-Ether', description: 'Restore spell slot points equal to 15.' },
    ],
  },
  {
    title: 'Party Items',
    items: [
      { name: 'Group Potion', description: 'Restore 50% HP to all party members. Does not revive downed characters, but applies when raised.' },
      { name: 'Group Ether', description: 'Each spellcaster in the party restores 5 spell slot points.' },
    ],
  },
  {
    title: 'Revival Items',
    items: [
      { name: 'Phoenix Down', description: 'Revive a downed character to 25% of maximum HP.' },
      { name: 'Max Phoenix Down', description: 'Revive a downed character to 100% of maximum HP.' },
      { name: 'Pure Phoenix Feather', description: 'Revive a downed character with the full benefit of a long rest.' },
    ],
  },
  {
    title: 'Aura Beads',
    items: [
      { name: 'Resistance Bead', description: 'Grant one target resistance to a chosen damage type until the next short rest.' },
      { name: 'Resistance Hi-Bead', description: 'Grant all creatures within 10 ft resistance to a chosen damage type for 3 minutes.' },
      { name: 'Strengthening Bead', description: 'Improve critical hit range to 18–20 for 1 minute.' },
      { name: 'Magic Bead', description: 'Add an additional damage type to all attacks until the next short rest.' },
    ],
  },
];

export const homebrewRules: HomebrewRule[] = [
  {
    title: 'Grievous Wounds',
    description: 'When a character is reduced to 0 HP three or more times within a single combat encounter, they roll 1d6 after being revived: (1) Lose a limb (roll 1d4: arm, hand, leg, foot); (2) Lose an eye; (3) Lose hearing; (4) Lose speech; (5–6) Concussion (disadvantage on all rolls until treated). All grievous wounds can be healed by Greater Restoration.',
  },
  {
    title: 'Thrown Potions',
    description: 'Potions can be thrown as an improvised ranged attack. Maximum range = 10 ft + (Strength modifier × 5 ft). A hit delivers the potion\'s effect to the target; a miss scatters.',
  },
  {
    title: 'Consuming Potions',
    description: 'Drinking a potion is a bonus action, not an action.',
  },
];
