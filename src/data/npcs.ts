import type { Npc, LooseThread } from '../types';

export const npcs: Npc[] = [
  {
    slug: 'dave',
    name: 'Dave',
    role: 'Failed Bandit, Adopted Stray',
    status: 'Traveling With Party',
    description: 'A commoner from a small farming village sliding toward famine, who took up a dagger bought with the last of his family\'s gold and tried his luck ambushing the party on the lake road. He fled nothing and gained nothing — his fellow bandits ran, and he alone held his ground. The party did not kill him. They talked to him instead, and somewhere in that conversation he stopped being a threat and became a traveling companion, a non-combatant now walking among the people the capital calls Godslayers.',
    firstAppearance: 'The Long Way Home',
  },
];

export const looseThreads: LooseThread[] = [
  {
    slug: 'kutadas-murder-charge',
    title: "Kutada's Murder Charge",
    status: 'Open',
    description: 'Kutada killed a halfling in an Aurelith tavern — dishware first, then the halfling himself, thrown across the room. The manner of it was ugly enough that the patrons carried the account to the city guard. The party left the capital before it caught up with her, but Aurelith does not forget its Godslayers, and the guards marked her passage on the way out with looks that said the account was still open.',
    firstAppearance: 'What the Soil Remembers — Part II',
  },
  {
    slug: 'demeters-famine-warning',
    title: "Demeter's Famine Warning",
    status: 'Open',
    description: 'Demeter\'s dying argument was not a bluff dressed as philosophy — she meant it. A famine is gathering over the land that her sacrifices were, by her account, holding back. She is dead and the debt she claimed to be servicing has not gone anywhere. Whether the warning was true, exaggerated, or a last attempt to make her death cost the party something, remains unconfirmed.',
    firstAppearance: 'The Last Harvest',
  },
  {
    slug: 'remaining-demeter-churches',
    title: 'The Remaining Demeter Churches',
    status: 'Open',
    description: 'The interrogated priest marked three churches raised in Demeter\'s name before he escaped: one in Aurelith, one in the western region, one in the north. The Aurelith church\'s congregation scattered when Skavir drove the merchants out of the capital. The other two — western and northern — have not been located or dealt with, and Demeter\'s death does not necessarily mean her clergy stopped believing in the arithmetic she died defending.',
    firstAppearance: 'What the Soil Remembers — Part II',
  },
  {
    slug: 'fall-of-aurelith',
    title: 'The Fall of Aurelith and the Refugees',
    status: 'Open',
    description: 'Meteors fell across Aurelith after Cassian Crassis died, killing civilians who had no part in any of it. By some accounts the party called them down. The capital was destroyed, and its survivors now live in refugee camps and the ruins. The party looted half-emptied shops afterward, and Velkyn killed several angry survivors and called it duty. How the survivors, and the rest of Aethernox, will answer the Godslayers is not yet known.',
    firstAppearance: 'Ash Over Aurelith',
  },
  {
    slug: 'memory-fog',
    title: "The Memory Fog and Kuxtal's Lost Memories",
    status: 'Open',
    description: "Kuxtal could not recall where her dungeon had been, how close she and Velkyn had once been, or even the name of her own god. The same fog seemed to lie over the whole city: Tian-Rui read an entry about Yaoshi in the library and dismissed it, and only Kuxtal found a book on Ah Puch. Whether Ah Puch's death lifted the fog, and what Kuxtal has gotten back, has not been recorded.",
    firstAppearance: 'The Weight of Victory',
  },
  {
    slug: 'hollow-tree-captives',
    title: 'The Children and the Overseer in the Hollow Tree',
    status: 'Open',
    description: "To win an audience with Ah Puch, the party took five children from the edge of a refugee camp and brought them to the hollow tree. The children were kept in the Waiting Cells, where the party dispelled the wards on the locks and left the children inside, safer and out of the fighting. The party also captured the cult's Overseer. When the party left for Necropolis, the five children and the Overseer remained in the hollow tree, and nothing has been recorded about what became of them.",
    firstAppearance: 'The Last Place of Safety (The Hollow Below, Part One)',
  },
  {
    slug: 'aurelith-cult-hideout',
    title: 'The Second Ah Puch Hideout',
    status: 'Open',
    description: "Kuxtal and Velkyn found a second hideout of Ah Puch's cult beneath a grate in the Temple District of Aurelith, and it has not been dealt with. Followers of Ah Puch were later seen openly among the refugees, unafraid, and one of them admitted that the cult admired the Godslayers. Every dead god, he said, leaves a wound that bleeds the suffering Ah Puch feeds on.",
    firstAppearance: 'Cages and Whispers',
  },
  {
    slug: 'missing-relics',
    title: 'Excalibur, the Armor of Midas and Stormbreaker',
    status: 'Open',
    description: "The party claimed Excalibur and the Armor of Midas after Cassian Crassis died. Stormbreaker is unaccounted for as well. The record does not yet say where any of the three ended up or who carries them.",
    firstAppearance: 'Ash Over Aurelith',
  },
];
