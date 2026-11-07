import type { MagicItem, ConsumableGroup, HomebrewRule } from '../types';

export const magicItems: MagicItem[] = [
  {
    slug: 'sword-of-zariel',
    name: 'Sword of Zariel',
    type: 'Weapon (longsword)',
    rarity: 'Artifact',
    attunement: true,
    attunementNote: 'Requires attunement by a creature the sword deems worthy. The weapon can choose to attune to a bearer or reject them.',
    description: 'This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, its blade is keen and its purpose is clear: to smite evil wherever it is found. It was left behind by Zariel upon her death in her throne room — a thing left by something that had prepared for the possibility of defeat. Currently wielded by Skavir Xarakas.',
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
      'Divine Casting: The sword\'s spells use your spellcasting ability modifier and need no components.',
      'Quick Attunement: Attuning to the sword does not require a short rest.',
      'Spell Ward: You have advantage on saving throws against spells and other magical effects, and advantage on Insight checks while you hold it.',
      'Fiendbane Light: Fiends have disadvantage on attack rolls against you while you are in the bright light of its Holy Light.',
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
    description: 'A jagged blackened blade crossed by violet fractures that glow with inner light. The crimson edge is sharp in a way that feels deliberate — not forged, but willed into being. A baleful gem at the crossguard pulses like a dying heart. Cyric wielded this blade to kill Mystra, goddess of magic, and the Weave has been unraveling ever since. While attuned, you cannot serve any deity, and divine beings within 1 mile sense your presence. Turned against Cyric by Velkyn Kensek in the Domain of the Shattered Weave — the god\'s own blade became the instrument of his undoing. Claimed by the party after his death. It has killed twice more since: Kutada drove it through the open mouth of Talos in the Colosseum at Aurelith, and Kuxtal Tun cleaved the skull of Ah Puch with it.',
    properties: [
      '+3 weapon bonus to attack and damage rolls.',
      '+2d8 necrotic damage on all hits, ignoring necrotic resistance.',
      'Shatter the Faithful: When you hit a celestial, fiend, or divine avatar, that creature must make a DC 18 Constitution saving throw or suffer Weave Rupture: disadvantage on all concentration checks and the creature\'s next spell deals half damage / the creature\'s next attack roll is made with disadvantage. On a failed save, the hit also deals an additional +2d8 necrotic damage.',
      'Curse — The Weight of Deicide: Cannot be willingly unattuned except by being reduced to 0 HP or by a Wish spell. Each time you kill a divine being, make a DC 20 Wisdom saving throw or permanently lose 1 point of Wisdom. At Wisdom 8 or lower, the blade begins to whisper compulsions.',
      'While attuned: You cannot serve any deity in any capacity. Divine beings of any alignment sense your presence within 1 mile.',
      'Attunement Insight: If you succeed on the attunement saving throw, you permanently sense unraveling magic nearby.',
      'Godslayer: It is the only known weapon besides a god that can permanently kill a god. When drawn, it thins the air, falters spells and gathers shadow at the wielder\'s feet.',
      'Divine Immunity Broken: The necrotic damage ignores resistance, and divine creatures and celestials cannot be immune to it.',
      'Current Holder: The party. It passed from Cyric to Velkyn\'s kill, was thrown by Velkyn to Kutada in the Colosseum, and Kutada killed Talos with it. Kuxtal then used it to kill Ah Puch. Who is attuned to it, and how many points of Wisdom have been lost, has not been recorded.',
    ],
    image: '/images/items/godsbane.png',
  },

  {
    slug: 'buster-sword',
    name: 'Buster Sword',
    type: 'Weapon (greatsword)',
    rarity: 'Unrecorded',
    attunement: false,
    description: 'A greatsword commissioned by Velkyn Kensek from Garrik Ironvein of Ironvein Armaments in Aurelith. Ironvein delivered it finished, with two sockets cut into the flat of the blade. Velkyn seated a Fire Opal in the first, and the steel took on a red-orange cast, as if it had been left too long in the forge. It looks like ordinary steel until something is placed in it.',
    properties: [
      'Sockets: Two sockets are cut into the flat of the blade, built to receive materia (see Materia and Gems below).',
      'Fire Opal: A Fire Opal is seated in the first socket. It turns the steel red-orange and sets flame along the swing. On a command word, the blade ignites for +2d6 fire damage and sheds bright light out to 40 feet.',
    ],
  },

  {
    slug: 'stormbreaker',
    name: 'Stormbreaker',
    type: 'Weapon (maul)',
    rarity: 'Legendary',
    attunement: true,
    attunementNote: 'Attunement takes 1 hour held aloft beneath open sky during a storm. If there is no storm, or the weapon judges the wielder unready, no lightning comes and the attempt cannot be repeated for 1 week.',
    description: "A colossal maul forged from meteoric iron in the first thunderstorm, and the weapon of Talos. It resizes to its wielder. Whether the party claimed it after Talos died has not been recorded.",
    properties: [
      '+3 Maul: +3 bonus to attack and damage rolls. Always two-handed.',
      'Thunder Damage: +2d8 thunder damage on a hit.',
      'Thunder Resistance: While attuned, you have resistance to thunder damage.',
      'Thunderstruck (3 charges, regain 1d3 at dawn): On a hit, expend 1 charge. Each creature within 10 feet of the target (not the wielder) must succeed on a DC 18 Constitution saving throw or take 18 (4d8) thunder damage, be pushed 10 feet and be knocked prone.',
      'Curse, The Storm Demands: If 24 hours pass without combat or a contest of strength, make a DC 15 Wisdom saving throw or feel compelled to seek one. Fleeing a fight while wielding it makes the weapon keen with audible thunder for a mile.',
    ],
  },

  {
    slug: 'lightning-lance',
    name: 'Lightning Lance',
    type: 'Weapon (javelin)',
    rarity: 'Legendary',
    attunement: true,
    attunementNote: 'Can only be attuned beneath open sky.',
    description: 'A slender storm-forged spear, a shard of the first bolt Talos hurled. Kutada drove it into Cassian Crassis to kill him at the end of the Colosseum battle in Aurelith, and she has it now.',
    properties: [
      '+3 Javelin: +3 bonus to attack and damage rolls, with +2d6 lightning damage. Thrown range 60/240 ft. Returns to the hand after every throw.',
      'Chain of Storms: On a critical hit, lightning arcs to a second creature within 15 feet. The creature must succeed on a DC 18 Dexterity saving throw or take 7 (2d6) lightning damage.',
      'Skyfall Throw (1/day): Hurl the lance skyward and call a bolt down at a point within 120 feet. Creatures within 15 feet take 28 (8d6) lightning damage, or half as much with a successful DC 18 Dexterity saving throw.',
      "Curse, Storm's Attention: The lance attracts local storms. You have disadvantage on Stealth checks outdoors during storms.",
    ],
  },

  {
    slug: 'excalibur',
    name: 'Excalibur',
    type: 'Weapon (longsword)',
    rarity: 'Legendary',
    attunement: true,
    attunementNote: 'Only a creature who has claimed a title, throne or dominion not freely given, such as a seized crown, can attune to it.',
    description: 'Silver-white steel with seven gem sockets, all filled. It was wielded by Cassian Crassis, the Would-Be King of Aurelith, when his Court of Gold took the field in the Colosseum. The party claimed it after Crassis died and it is in their possession. Who carries it has not been recorded.',
    properties: [
      '+3 Longsword: +3 bonus to attack and damage rolls, with +1d8 radiant damage.',
      'Star Sapphire: Truesight out to 30 feet.',
      'Star Ruby: +2d6 radiant damage against fiends and undead. Sheds sunlight in a 30-foot radius.',
      'Yellow Sapphire: Cast haste on yourself once per day, with no concentration.',
      'Black Sapphire: Immune to the blinded condition. Unseen attackers have disadvantage against you.',
      'Ruby: +3d6 fire damage. Once per long rest, a 20-foot cone deals 6d6 fire damage (DC 17 Dexterity saving throw for half).',
      'Jacinth: Resistance to fire, cold, lightning, acid and thunder damage.',
      'Black Opal: +2d6 psychic damage. When it drops a creature to 0 hit points, allies within 30 feet must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute.',
      'Curse, The Weight of the Crown: When someone forces you to kneel, yield or submit, make a DC 15 Wisdom saving throw or fly into a rage at them (advantage on attacks, disadvantage on saving throws until the end of your next turn).',
    ],
  },

  {
    slug: 'armor-of-midas',
    name: 'Armor of Midas',
    type: 'Armor (plate)',
    rarity: 'Legendary',
    attunement: false,
    description: 'Solid gold plate no heavier than steel. It was worn by Cassian Crassis, the Would-Be King of Aurelith, in his last battle in the Colosseum. The party claimed it after Crassis died and it is in their possession. Who wears it has not been recorded.',
    properties: [
      'Golden Plate: Base AC 20 + Dexterity modifier (maximum 2).',
      'Resistance: Resistance to nonmagical bludgeoning, piercing and slashing damage.',
      'Midas Touch: When a creature hits the wearer with a melee weapon, it must succeed on a DC 17 Constitution saving throw or have disadvantage on its next attack with that weapon.',
      'Curse, Golden Hunger: The wearer feels a compulsion for wealth. If reduced to visible poverty or publicly humiliated about status, make a DC 15 Wisdom saving throw or lose your next turn in indignant shock.',
    ],
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

export const gemTiers: ConsumableGroup[] = [
  {
    title: 'Ornamental Gems (about 10 gp)',
    items: [
      { name: 'Hematite', description: '+1d4 force damage. Advantage on checks to avoid being disarmed.' },
      { name: 'Obsidian', description: 'Counts as silvered. +1d4 slashing or piercing damage on a critical hit.' },
      { name: 'Tiger Eye', description: 'Advantage on the first attack roll each combat.' },
      { name: 'Malachite', description: 'Mold Earth 3/day when struck against stone or ground.' },
      { name: 'Turquoise', description: 'Resistance to falling damage.' },
      { name: 'Moss Agate', description: 'Counts as a spellcasting focus. +1 to Nature checks while held.' },
    ],
  },
  {
    title: 'Semi-Precious Gems (about 50 gp)',
    items: [
      { name: 'Bloodstone', description: '+1d4 necrotic damage. Regain 1 HP on a critical hit.' },
      { name: 'Citrine', description: 'Sheds 10-ft sunlight as a bonus action, 3/day, for 1 minute.' },
      { name: 'Onyx', description: 'Advantage on saves against being frightened while drawn.' },
      { name: 'Moonstone', description: 'Advantage on Stealth in dim light or darkness.' },
      { name: 'Carnelian', description: '+5 ft speed after you hit this turn.' },
      { name: 'Star Rose Quartz', description: 'Advantage on saves against being charmed.' },
    ],
  },
  {
    title: 'Fancy Gems (about 100 gp)',
    items: [
      { name: 'Amethyst', description: '+1d6 psychic damage. Detect Thoughts 1/day.' },
      { name: 'Garnet', description: '+1d6 fire damage. 1/day, a 10-ft burst on a hit (2d6 fire, DC 13 DEX save for half).' },
      { name: 'Jade', description: 'Advantage on death saves while attuned.' },
      { name: 'Black Pearl', description: 'The weapon can be thrown and returns at the start of your next turn.' },
      { name: 'Jet', description: '+1d6 necrotic damage against undead. Advantage against being turned or frightened by them.' },
      { name: 'Tourmaline', description: 'Change the damage type between bludgeoning, piercing and slashing as a bonus action.' },
      { name: 'Spinel', description: '+1 to initiative while carried.' },
    ],
  },
  {
    title: 'Precious Gems (about 500 gp)',
    items: [
      { name: 'Aquamarine', description: 'Swim speed equal to your walking speed. Water Breathing 1/day.' },
      { name: 'Peridot', description: '+1d8 poison damage. A critical hit poisons for 1 minute (DC 15 CON negates).' },
      { name: 'Topaz', description: 'Resistance to one chosen type at attunement (necrotic, poison or acid).' },
      { name: 'Alexandrite', description: '+1d6 radiant damage by day, +1d6 necrotic damage by night.' },
      { name: 'Blue Spinel', description: 'Advantage on sight-based Perception checks in low light.' },
    ],
  },
  {
    title: 'Gem Tier (about 1,000 gp)',
    items: [
      { name: 'Fire Opal', description: 'Flame tongue. A command word ignites the weapon for +2d6 fire damage and 40-ft bright light.' },
      { name: 'Blue Sapphire', description: 'Frost brand. +2d6 cold damage, resistance to fire, and melts snow and ice within 30 ft.' },
      { name: 'Black Opal', description: '+2d6 psychic damage. Fear (DC 15) 1/day when it drops a creature to 0 HP.' },
      { name: 'Star Ruby', description: '+2d6 radiant damage against fiends and undead. 30-ft sunlight on command.' },
      { name: 'Star Sapphire', description: 'Truesight 30 ft while drawn and held.' },
      { name: 'Yellow Sapphire', description: 'Haste on yourself 1/day, no concentration, for 1 minute.' },
      { name: 'Opal', description: 'An extra reaction each round, only for opportunity attacks.' },
    ],
  },
  {
    title: 'Jewel Tier (about 5,000 gp)',
    items: [
      { name: 'Diamond', description: 'Revivify once per long rest, consuming itself (re-socket after).' },
      { name: 'Ruby', description: '+3d6 fire damage. A 20-ft cone of 6d6 fire once per long rest (DC 17 DEX save for half).' },
      { name: 'Black Sapphire', description: 'Immune to the blinded condition. Unseen attackers have disadvantage.' },
      { name: 'Jacinth', description: 'Resistance to fire, cold, lightning, acid and thunder damage while attuned.' },
    ],
  },
];

export const economyRules: HomebrewRule[] = [
  {
    title: 'Materia Socketing',
    description: "Certain weapons are built with sockets to receive materia (gems). They look mundane until materia are seated, then gain magical potential and the look of an enchanted item. Each weapon has a capacity: a longsword holds 1, a greatsword holds 2, and Excalibur holds 7. Materia are activated by a command word. The smith is Garrik Ironvein of Ironvein Armaments in Aurelith. Velkyn's Buster Sword is the two-socket greatsword Garrik built, and Velkyn also owns a longsword with one socket.",
  },
  {
    title: 'Bargaining',
    description: 'A Persuasion check of DC 15 gives a 10% discount, and DC 20 gives 20%. Failing by 5 or more raises the price by 10%.',
  },
  {
    title: 'Shops and Merchants',
    description: "Before its destruction, Aurelith had a Universal Shop Table: weapons, armor, potions, ethers, aura beads and wondrous items such as a Bag of Holding, Sending Stones, a Cloak of Protection, Boots of Elvenkind and a Wand of Magic Missile. Known shops and merchants were Ironvein Armaments (Garrik Ironvein, a dwarven master smith who also supplies gossip), a gem merchant who is terrified of the party, and the Scholar's Respite tavern.",
  },
  {
    title: 'Rewards So Far',
    description: "The party has received 2,000 gp from Zariel's coffers, 1,000 gp each (5,000 total) from Lord Crassis for ending the lich threat, and a very large payout from Tian-Rui's Colosseum bet on Kutada.",
  },
];

export const customMechanics: HomebrewRule[] = [
  {
    title: 'Withering (Demeter)',
    description: 'A cumulative condition. Level 1: disadvantage on ability checks. 2: speed halved. 3: disadvantage on attack rolls and saving throws. 4: cannot regain hit points. 5: whenever the creature takes damage, it takes an extra 10 (3d6) necrotic damage. 6: the creature withers to dust and dies. A long rest reduces Withering by one level (two with Greater Restoration or comparable magic), and Lesser Restoration removes one level. Death by Withering can be undone only by True Resurrection or Wish.',
  },
  {
    title: 'Lingering Agony (Ah Puch)',
    description: 'A cumulative condition. Level 1: disadvantage on concentration checks. 2: speed halved. 3: disadvantage on attack rolls. 4: maximum hit points reduced by 10. 5: whenever the creature is healed, it instead takes damage equal to half the healing it would have received, rounded down. 6: the creature dies, and only True Resurrection or Wish restores it. A long rest reduces it by one level (two with Greater Restoration or comparable magic), and Lesser Restoration removes one level. A creature also gains a level at the start of each of its turns while below one quarter of its hit point maximum.',
  },
  {
    title: 'Suspicion Clock (Ah Puch Infiltration)',
    description: "The cult's suspicion is tracked from 0 to 6. It rises by 1 for a failed Deception or Persuasion check (DC 20) when questioned, visibly comforting a captive, Kuxtal being visibly shaken by chains without anyone steadying her, or casting an obviously protective or detecting spell. It rises by 2 for refusing a step of the rite, and killing a cultist jumps it to 6. It falls by 1 for a convincing performance (DC 22 Deception or Performance, once per scene), the guide cultist vouching (once), or offering the Warden something of real value (once). At 0 to 2 the cult is polite and watchful, at 3 to 4 the Overseer asks pointed questions and the Warden adds a harder rite step, at 5 the Warden tests the party directly, and at 6 the cover is blown. The party took the offensive and slaughtered cultists, so the clock effectively sat at 6.",
  },
  {
    title: 'Leverage (Optional, The Quiet Host)',
    description: "For each true thing the party gives the Warden at the Vigil, Ah Puch gains one point of Leverage, to a maximum of five. During the fight he can spend one as a bonus action to speak in a child's voice: one creature within 60 ft takes 22 (4d10) psychic damage, no save. Whether it was used has not been recorded.",
  },
  {
    title: 'The Marked Locks',
    description: 'The blood smeared on each cell lock acts as cult law and as a Cell Ward: a creature behind a blood-marked lock is protected as if by the sanctuary spell (DC 13), and only the person whose blood marked it, or the Warden, can open it. In play the party found the ritual and Tian-Rui dispelled it, then left the children in the cells to keep them out of combat.',
  },
  {
    title: 'Storm Circle (Talos)',
    description: 'Talos raised a ring of wind and lightning on the Colosseum sand. Entering costs a creature its entire movement and a DC 20 DEX save, or it takes 27 (8d6) lightning damage. Each additional combatant beyond the first two strengthened Talos.',
  },
  {
    title: 'Domains of the Gods',
    description: "Each god fights in a manifested domain. Cyric's Domain of the Shattered Weave has marble floors cracked with violet fractures, stained glass of gods being struck down, a Throne of Unmaking, and eyes in the void. Izanami's Domain of Blossoms is silent, with decaying cherry blossoms that turn to ash on touch, 1d6 acid damage per petal, and a Torii gate entrance. Demeter fought in the Domain of the Rotting Home, Talos in a Storm Circle on the Colosseum sand, and Ah Puch in the Domain of Echoed Suffering.",
  },
  {
    title: 'Chains of Eternity (Homebrew Spell)',
    description: "7th-level abjuration (ritual). Casting time 1 hour. Range touch. Components V, S, M (a few drops of blood from each creature you want to bind, which the spell consumes). Duration until dispelled. Classes Cleric, Warlock, Wizard. You trace a binding in the blood of your captives and speak it into the space around them. Choose an area of any shape that fits within a 20-foot-radius sphere centered on a point you touch, such as a cell, a crypt or a small courtyard. Each creature whose blood you used must be inside the area when you finish casting. Those creatures become marked, and the edge of the area becomes the spell's boundary. Whenever a marked creature tries to leave the area, whether by crossing the boundary, teleporting or any other means, the blood in its veins burns. The creature takes 8d8 psychic damage and must succeed on a Wisdom saving throw against your spell save DC or be tormented by nightmares. This happens each time it makes such an attempt. A creature tormented by nightmares gains no benefit from finishing a long rest, and repeats the Wisdom saving throw each time it finishes one. On a success, the nightmares end and it gains the benefit of that rest. The nightmares also end if you release the creature or the spell ends. You can release one or all marked creatures at any time as an action, no matter how far away you are. The spell ends when you release the last marked creature or when it is dispelled. If a marked creature dies, its mark fades. The cult uses this style of magic on its cells.",
  },
];
