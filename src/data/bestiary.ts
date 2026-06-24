import type { BestiaryEntry } from '../types';

export const bestiary: BestiaryEntry[] = [
  {
    slug: 'lich-avatar-of-izanami',
    name: 'The Lich',
    role: 'Avatar of Izanami',
    tags: ['Undead', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'An undead avatar incarnating the power of Izanami, goddess of death and creation. Led the undead horde that marched on Aurelith. Could invoke a Persona — Satanael — by carving a circle on the ground with its scythe and igniting blue flames within it.',
    stats: {
      hp: 100,
      ac: 18,
      speed: '50 ft',
      saveDC: 23,
      saveBonuses: 'Bonus to WIS / CHA / DEX saves',
    },
    actions: [
      'Scythe: +10 to hit, 2d8+5 slashing + 3d10 necrotic',
      'Life Aid: As an action, heal 2d12 HP',
    ],
    abilities: [
      'Shell of Darkness: As a bonus action, gain +5 AC until the start of your next turn',
    ],
    legendaryActions: [
      'Maeigaon (Legendary): All creatures within 30 ft must make a DEX saving throw. On a failure, they take 10d6 fire damage; half on success',
    ],
    notes: 'Persona activated by carving a circle in the ground with the scythe, which then ignites with blue flames. Satanael manifests within the flames.',
    externalLink: 'https://www.dndbeyond.com/monsters/16943-lich',
  },

  {
    slug: 'skeleton-champion',
    name: 'Skeleton Champion',
    role: 'Undead Officer',
    tags: ['Undead', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'Organized infantry units of the undead horde, operating with tactical intelligence far beyond mindless undead. Coordinated flanking maneuvers and protected each other under the Skeleton Lord\'s direction. Multiple defeated in the valley before Aurelith.',
    stats: {
      hp: 80,
      ac: 20,
      speed: '40 ft',
    },
    actions: [
      'Multiattack: Three greatsword attacks per turn',
      'Greatsword: +10 to hit, 2d8+4 slashing',
    ],
    abilities: [
      'Parry: When struck, target must make a DC 21 CON saving throw or be stunned for 1 round',
      'Undead Fortitude: When reduced to 0 HP, make a CON saving throw (DC = half damage dealt + 5). On success, drop to 1 HP instead',
    ],
  },

  {
    slug: 'skeleton-lord',
    name: 'Skeleton Lord',
    role: 'Field Commander of the Undead Horde',
    tags: ['Undead', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'The tactical intelligence directing the undead horde from the front. A creature of deliberate and devastating precision, wielding a swordspear with 10-foot reach. Its Doom ability converted necrotic damage into secondary strikes against additional targets, making it especially dangerous against clustered defenders.',
    stats: {
      hp: 200,
      ac: 24,
      speed: '50 ft',
    },
    actions: [
      'Multiattack: Three swordspear attacks per turn',
      'Swordspear: 10 ft reach, +14 to hit, 3d8+4 slashing + 3d10 necrotic',
      'Instill Fear (once per day): DC 24 CHA saving throw or become frightened',
    ],
    abilities: [
      'Doom (Recharge 5–6): For every point of necrotic damage dealt this round, deal half that amount as additional necrotic damage to one target within 120 ft',
      'Limited Magic Immunity: Immune to spells of 6th level and below',
    ],
  },

  {
    slug: 'holder-of-phylactery',
    name: 'Holder of the Phylactery',
    role: 'Rakshasa — Guardian of the Lich\'s Phylactery',
    tags: ['Fiend', 'Encountered', 'Bargained With'],
    status: 'Bargained With',
    description: 'Initially appeared as a well-dressed human riding in a bone carriage at the rear of the undead horde. Its true nature as a Rakshasa was revealed once it sustained 30 points of damage. The phylactery — a golden fan in a lacquered case — was concealed in a hidden compartment of its carriage. Negotiated its survival in exchange for revealing the phylactery\'s location.',
    notes: 'Currently bound by the party\'s promise not to harm it, given in exchange for the phylactery\'s location. The carriage was built of bone with hidden compartments, one of which held the phylactery. The Rakshasa\'s current whereabouts are unknown.',
    externalLink: 'https://www.dndbeyond.com/monsters/16990-rakshasa',
  },

  {
    slug: 'bone-naga',
    name: 'Bone Naga',
    role: 'Phylactery Defenders',
    tags: ['Undead', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'Five Bone Nagas assigned to guard the rakshasa\'s carriage from the south. Coiled, spitting, and relentless — the last line of defense protecting the Lich\'s phylactery from destruction.',
    notes: 'Five were present and all were defeated in the battle at the valley before Aurelith.',
    externalLink: 'https://www.aidedd.org/dnd/monstres.php?vo=bone-naga',
  },

  {
    slug: 'izanami',
    name: 'Izanami',
    role: 'Goddess of Death and Creation',
    tags: ['Divine', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'The goddess of death and creation, whose avatar led the undead horde against Aurelith and who was subsequently hunted into her own domain. The party followed her into the Blossoms of Yomi, destroyed her phylactery, and killed her beneath the central cherry tree of her shrine. She fought with five fans and the patience of something that had watched civilizations return to her in pieces; she lost anyway. The domain did not die with her — it simply went still. The petals stopped falling.',
    stats: {
      hp: 500,
      ac: 23,
      speed: '50 ft',
    },
    actions: [
      'Multiattack: Five fan attacks per turn',
      'Fan: +12 to hit, 1d6+8 piercing (one attack also deals 2d10 poison)',
      'Winds of Creation: Push all creatures within 30 ft away from Izanami',
      'Winds of Death: 30 ft radius — DC 23 DEX save. On failure, hit by 2d6 petal attacks; on success, 1d6 petal attacks',
    ],
    legendaryActions: [
      'Blow Away (Cost 2): Block all projectiles and ranged spells until the start of her next turn',
      'Blossom Teleport (Cost 1): Teleport to any cherry blossom tree within range',
      'Summon (Cost 3): A Skeleton Champion appears within 30 ft',
    ],
    legendaryReactions: [
      'Counterspell of Death: Cancel a spell targeting Izanami, then make 3 fan attacks against the caster',
      'Counterspell of Creation: Cancel a spell targeting Izanami, then trap the caster inside a cherry blossom tree (AC 10, 30 HP)',
    ],
    quote: '"You cling to life, as though it is yours to keep… but in the end, everything will return to me. Your deicidal journey ends here. I will not have the avatar of Izanagi continue to plague this world."',
  },

  {
    slug: 'zariel',
    name: 'Zariel',
    role: 'Archduchess of Avernus',
    tags: ['Archdevil', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'The Archduchess of Avernus — a fallen angel who had administered the first layer of Hell through force of will and centuries of experience. Killed in her own throne room by the party. Final blows landed simultaneously: Tian-Rui\'s disintegration beam and Skavir\'s twin laser pistols. She vanished on death, leaving only the Sword of Zariel and 2,000 gold pieces on the throne room floor.',
    notes: 'Left her legendary sword behind — either as a message, a gift, or an insult. The Sword of Zariel passed to Velkyn Kensek and remains in his possession.',
  },

  {
    slug: 'titivilus',
    name: 'Titivilus',
    role: 'Administrative Enforcer of Avernus',
    tags: ['Devil', 'Encountered', 'Erased'],
    status: 'Erased',
    description: 'Zariel\'s administrative enforcer — a devil who controlled information flow and access within Avernus\'s throne room. Returned from death twice through infernal reconstitution before Tian-Rui\'s disintegration beam ended him permanently. Three successive disintegrations appear sufficient to prevent infernal reconstitution.',
    notes: 'Tian-Rui\'s disintegration, applied three consecutive times, proved an effective solution to infernal reconstitution. This may be documented somewhere.',
  },

  {
    slug: 'cyric',
    name: 'Cyric',
    role: 'God of Murder',
    tags: ['Divine', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'The God of Murder, who was freed from infernal imprisonment in Avernus and immediately reclaimed Godsbane — which he had wanted more than he had wanted freedom. Revealed that he had killed Mystra, goddess of magic, with Godsbane. His Domain of the Shattered Weave served as the arena for the final confrontation. Killed by Velkyn Kensek with Godsbane — his own blade, turned against him by the same hand that had freed him. His death left Godsbane in the party\'s possession.',
    notes: 'Cyric had planned for his release and the subsequent confrontation. His laughter throughout was the laughter of someone who had seen this coming. The domain he tore into did not collapse upon his death — it simply became still.',
  },
];
