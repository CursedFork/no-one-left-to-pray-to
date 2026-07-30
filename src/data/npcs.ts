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
];
