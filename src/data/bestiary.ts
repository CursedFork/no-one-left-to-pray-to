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

  {
    slug: 'demeters-watchdog',
    name: "Demeter's Watchdog",
    role: "Threshold Guardian — the Harvest's Watchdog",
    tags: ['Plant', 'Construct', 'Encountered', 'Slain'],
    status: 'Slain',
    description: 'A scarecrow-construct of straw, bone, and bramble, set to guard the wall sealing Skavir\'s home village. Built to devastate lesser trespassers. Torn down with brutal efficiency by the party, though it burst into a cloud of spores on death — a last defense that nearly caught Dave full in the chest.',
    stats: {
      hp: 241,
      ac: 18,
      speed: '30 ft., burrow 20 ft.',
      saveBonuses: 'STR +11, CON +11',
    },
    actions: [
      'Multiattack: Two Bramble Fist attacks; can replace one with Grasping Vine if available',
      'Bramble Fist: +11 to hit, reach 10 ft., 17 (2d10 + 6) bludgeoning + 9 (2d8) poison',
      'Grasping Vine (Recharge 4–6): One creature within 30 ft, DC 22 STR save or pulled up to 20 ft and restrained. Escape: DC 22 STR check (action)',
      'Reaping Sweep (Recharge 6): 15-ft cone, DC 22 DEX save, 33 (6d10) slashing (half on success); fail also knocks prone',
    ],
    abilities: [
      'Rooted Vigilance: Advantage on saves against being knocked prone or moved while in contact with soil',
      'Blighted Regrowth: At the start of its turn, if in contact with blighted/natural soil and at 1+ HP, regains 15 HP. Does not regrow on scorched, frozen, or stone ground, or if it took fire damage since its last turn',
      'Spore Burst: At 0 HP, bursts. Creatures within 10 ft make DC 22 CON save or take 17 (5d6) poison and are poisoned until the end of their next turn',
    ],
    notes: 'CR 13. Resists bludgeoning and piercing; vulnerable to fire; immune to poison. Encountered at the bramble wall on the approach to Skavir\'s village, alongside the discovery that the village and its people had been cursed. Homebrew.',
  },

  {
    slug: 'heartroot',
    name: 'The Heartroot',
    role: 'Anchor of the Bramble Wall',
    tags: ['Plant', 'Construct', 'Objective', 'Encountered', 'Destroyed'],
    status: 'Destroyed',
    description: "A knotted mass of root and thorn pulsing at the center of Skavir's village, the anchor from which the bramble wall sealing the village drew its life. It could not be reasoned with and would not stop regrowing — only destroying it would open a way out. Burned down by the party when no other option remained, which withered the wall within minutes but summoned Demeter to the village early, before they had finished preparing for her.",
    stats: {
      hp: 150,
      ac: 15,
      speed: '0 ft. (immobile)',
    },
    abilities: [
      'Regrowth: At the start of each round, the Heartroot regains 15 hit points unless it took fire damage since the end of the party\'s last turn — a scorched patch on the bramble does not regrow',
      'Warded by the Wall: While the Heartroot lives, the bramble wall is impassable. Climbing it draws lashing thorns; flying over is met by thorns growing to meet the climber; burning the wall itself does nothing — only the Heartroot matters',
      'Reaction — Thorn Lash: When a creature damages the Heartroot in melee, thorns whip out. DC 20 DEX save or 14 (4d6) piercing and grappled (escape DC 18) until the start of its next turn',
    ],
    notes: 'Encounter objective rather than a combatant — resists bludgeoning and piercing, vulnerable to fire, immune to poison and psychic. Destroying it (or reducing it below half HP) is what summons Demeter early. Homebrew.',
  },

  {
    slug: 'tortured-vessel',
    name: 'Tortured Vessel',
    role: "Demeter's Sacrificed Tribute",
    tags: ['Undead', 'Divine Servant', 'Encountered', 'Destroyed'],
    status: 'Destroyed',
    description: 'One of the children Demeter took as tribute over the years, raised as a small screaming psychic undead bound to her will and wearing the half-formed features of whoever looks at it. Summoned by Demeter during the fight in Skavir\'s village. Released when she died — its suffering finally stilled, it crumbled to grave-dust rather than continuing to exist bound to nothing.',
    stats: {
      hp: 50,
      ac: 20,
      speed: '5 ft., fly 30 ft. (hover)',
      saveBonuses: 'WIS +5, CHA +7',
    },
    actions: [
      'Clutching Wail: +7 to hit, reach 10 ft., 14 (3d6 + 4) psychic. DC 15 WIS save or deafened and unable to speak until the end of its next turn',
      'Whispered Accusation (Recharge 5–6): One creature within 30 ft, DC 15 WIS save or 21 (6d6) psychic and incapacitated until the end of its next turn; half damage and no incapacitation on a success',
    ],
    abilities: [
      'Bound to the Soil: Can\'t move more than 60 feet from Demeter. If she dies, each vessel is released and crumbles to grave-dust at the start of its next turn',
      'Aura of Anguish: A creature starting its turn within 15 ft, or entering that space, must succeed on a DC 15 WIS save or take 10 (3d6) psychic damage and have disadvantage on its next attack roll',
      'Borrowed Face: Wears the half-formed features of whoever looks at it. A creature within 30 ft at the start of its turn must succeed on a DC 15 WIS save or be unable to willingly move closer to it until the start of its next turn',
      'Dirge of the Buried: While within 30 ft of a tortured vessel, disadvantage on saves against being frightened',
      'Reaction — Shared Grave: When damaged by a creature within 10 ft, that attacker must succeed on a DC 15 WIS save or take 7 (2d6) psychic damage',
    ],
    notes: 'CR 5. Resists cold and necrotic; immune to poison and psychic. Homebrew.',
  },

  {
    slug: 'demeter',
    name: 'Demeter',
    role: 'Goddess of Fertility',
    tags: ['Divine', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: "The old Greek earth goddess, older than most deities who hold current sway, whose blight took Skavir's village and whose priests demand tribute in the form of children under ten, buried alive as fertilizer. Descended into the ruin of the cursed village to claim Skavir's younger brother — both as that year's tribute and as penance for the heresy of driving her followers from Aurelith. She offered the party her reasoning before the fighting started: that nature stands above even the gods, that the sacrifices held back a famine that would have taken far more than she claimed, that her harshness was necessity rather than cruelty. Skavir refused to grant her that justification. Killed in her own ritual circle, Velkyn driving the finishing sequence and yielding the final blow to Skavir so that the two struck her down together. The fourth god to fall to the party.",
    stats: {
      hp: 660,
      ac: 22,
      speed: '40 ft., burrow 40 ft.',
      saveDC: 25,
      saveBonuses: 'CON +14, WIS +16, CHA +17',
    },
    actions: [
      'Multiattack: Two Reaping Scythe and one Grasping Furrows; can replace one attack with Rot Bloom if available',
      'Reaping Scythe: +17 to hit, reach 15 ft., 26 (4d8 + 8) slashing + 18 (4d8) poison. If this reduces the target to half HP or lower, DC 25 CON save or gain one level of Withering',
      'Grasping Furrows: One creature within 60 ft, DC 25 STR save or restrained and taking 18 (4d8) poison at the start of each of its turns. Escape: DC 25 STR check (action). Up to three creatures at once',
      'Rot Bloom (Recharge 5–6): 30-ft-radius sphere within 90 ft, DC 25 CON save, 45 (10d8) poison + two Withering levels on a failure, half damage + one level on a success',
      'Reaping Furrow (1/Day, opening action): Buries one creature alive — restrained, blinded, unable to breathe, 22 (4d10) bludgeoning at the start of each of Demeter\'s turns. Free with a DC 25 STR check or by dealing 40 damage to the soil (AC 15)',
    ],
    abilities: [
      'Legendary Resistance (3/Day): If Demeter fails a saving throw, she can choose to succeed instead',
      'Domain of the Rotting Home: Fights within a decaying mirror of the village she cursed. Never surprised there; advantage on saves against being moved or removed from it',
      'Communion of Roots: Binds the party into a shared web of suffering — when a bound creature first gains a condition, each other bound creature must succeed on a DC 25 CON save or gain the same condition until the end of their next turn',
      "The Bountiful Toll: Whenever a creature within 60 ft is reduced to 0 HP or dies, Demeter regains 30 HP",
      "Famine's Patience: At the start of its turn, any creature that didn't attack, cast a spell, or move toward Demeter on its previous turn gains one level of Withering",
      'Magic Resistance: Advantage on saving throws against spells and other magical effects',
      'Divine Weapons: Weapon attacks are magical and deal an extra 18 (4d8) poison damage (included above)',
      "Wound of Godsbane: Against a creature attuned to Godsbane, The Bountiful Toll can't heal her and her Legendary Resistance doesn't function against Godsbane's strikes",
      'Bonus Action — Mold the Fallow Ground (Recharge 4–6): Reshapes a 60-ft cube into grasping earth — difficult terrain, DC 25 DEX save or restrained to the waist on entering it. Demeter and her summons ignore it',
      'Reaction — The Bountiful Toll: When a creature within 60 ft drops to 0 HP, Demeter regains 30 HP and gains advantage on her next attack',
    ],
    legendaryActions: [
      "Furrow's Grip: Demeter uses Grasping Furrows",
      'Chorus of the Buried (Costs 2): Summons up to two Tortured Vessels within 30 ft (max four active)',
      'Blighted Communion (Costs 2): One Communion-bound creature and everyone sharing a condition with it takes 22 (4d10) psychic damage',
    ],
    quote: '"You call it cruelty. I call it arithmetic. Nature does not forgive an unpaid debt, and I am the only one honest enough to collect it before the famine collects for itself."',
    notes: "CR 30. Immune to poison; resists cold and necrotic and nonmagical bludgeoning/piercing/slashing; immune to charmed, exhaustion, frightened, poisoned. Withering (her signature condition) is cumulative: 1 — disadvantage on ability checks; 2 — speed halved; 3 — disadvantage on attacks and saves; 4 — can't regain HP; 5 — extra 10 necrotic on damage taken; 6 — withers to dust and dies. A long rest reduces it by one level; Lesser Restoration removes one level. Bloodied Phase (Fallow Winter, at or below 330 HP): poison damage becomes necrotic and ignores resistance, Divine Weapons damage rises to 27 (6d8), and she gains an additional legendary action per round. Lair actions available: Collapsing Home, The Graves Open, Blossoms of Blight. Three churches raised in her name were known before her death: one in Aurelith, one in the western region, one in the north — the latter two remain unresolved. Homebrew.",
  },

  {
    slug: 'talos',
    name: 'Talos',
    role: 'God of Storms and Destruction',
    tags: ['Divine', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: "A storm god who had grown restless and hungry for a worthy challenger. He came to Aurelith and fought challengers in the Colosseum, the same arena that raised Kutada, his own champion. He spoke only to her. He hammered her down again and again and she stood up every time. When he was done, she scolded him for being less than he had promised to be, and drove Godsbane through his open mouth. Killed by Kutada in the Colosseum of Aurelith. The Colosseum bookmakers lost heavily.",
    notes: 'The fifth god to fall to the party, and Kutada\'s own patron. Tian-Rui had placed the party\'s money on her.',
  },

  {
    slug: 'cassian-crassis',
    name: 'Cassian Crassis',
    role: 'The Would-Be King, Lord of the Merchant Guild of Aurelith',
    tags: ['Mortal', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: "Lord of the Merchant Guild of Aurelith, the same Lord Crassis who rewarded the party after the horde was turned, and who some in the city had begun to call a king. He took the field at the head of the Court of Gold, wielding Excalibur and wearing the Armor of Midas, with his Advisor, three Court Sorcerers and wave after wave of Royal Guards. Skavir was dropped again and again. Crassis spent a golden feather to revive his Advisor, then fought in earnest to kill. Killed by Kutada, who drove the Lightning Lance into him. The party claimed Excalibur and the Armor of Midas.",
    notes: 'Met in the Colosseum of Aurelith, where he leapt down into the arena after Talos fell. Aurelith was destroyed in the same battle.',
  },

  {
    slug: 'ah-puch',
    name: 'Ah Puch',
    role: 'God of Torture and Untimely Death',
    tags: ['Divine', 'Boss', 'Encountered', 'Slain'],
    status: 'Slain',
    description: "The god behind the cult that tortured Kuxtal Tun. The party reached his domain through his cult's own ritual, finishing it with the cultists as the sacrifice. He received them as guests at the end of a long table, behind a mask, and invited them to sit. He offered a truce if the party would simply keep causing suffering. The party struck first. When the mask came off, beneath it he had no skin and no flesh. His chains caught Tian-Rui and dragged him to the Wheel. Killed by Kuxtal with Godsbane. She told the God of Torture that he no longer controlled her nightmares, and cleaved his skull. He turned to ash.",
    notes: 'The sixth god to fall to the party. His cult kept a base inside a hollow tree, and a second hideout beneath a grate in Aurelith has not been dealt with.',
  },

  {
    slug: 'cult-of-ah-puch',
    name: 'Cultists of Ah Puch',
    role: 'The Hollow Below',
    tags: ['Mortal', 'Undead', 'Encountered', 'Slain'],
    status: 'Slain',
    description: "The cult that kept a base in a hollow tree outside Aurelith, marked by chain-link tattoos around the wrist. Its members wore gray robes, and its leaders wore purple and white with red lining. The party killed everyone in gray robes. The chain tattoos glowed red, and any cultist not wholly destroyed rose as undead, so the party kept clearing them until none were left intact. They killed the head cultist quickly, then used the remaining cultists as the sacrifice to complete the ritual that carried them to Ah Puch.",
    notes: 'The cult base is cleared, but followers of Ah Puch were also seen openly among the refugees of Aurelith, and a second hideout beneath a grate in the Temple District has not been dealt with. The Warden, Oxlahun Kan, and the captured Overseer are not recorded as dead.',
  },
];
