import type { Character } from '../types';

export const characters: Character[] = [
  {
    slug: 'kutada',
    name: 'Kutada',
    age: 26,
    race: 'Half-Orc',
    class: 'Barbarian',
    subclass: 'Bear Totem',
    god: 'Talos',
    domain: 'Storms and Destruction',
    godSource: 'D&D 5E',
    endGoal: 'Claim Talos\'s throne as the strongest warrior.',
    background: 'Gladiator',
    flaws: [
      'Quick to pick a fight',
      'Punch first, questions later',
      'Short-tempered',
      'Unreasonable anger at storms',
    ],
    portrait: '/images/characters/kutada.png',
    unlocked: false,
    accentColor: '#4a5a6a',
    biography: `Kutada was born with violence in her blood — a truth her mother tried desperately to outrun. Her mother, a human arena fighter who had won her freedom through a decade of bloodshed, had hoped that settling in a quiet border town would be enough to give her half-orc daughter a different life. It wasn't. Kutada could feel the rage before she could name it: a live coal behind her sternum that flared whenever someone looked at her like she was lesser, whenever a storm rolled in off the mountains, whenever she was told to be still.

She was twelve when she entered her first fight — not in an arena but behind a tavern, two coppers wagered on whether she could last three rounds with a boy twice her size. She lasted seven and didn't stop until someone pulled her off. Word spread the way it always does in small places. By fifteen she had a name in the local circuits; by eighteen she was fighting in sanctioned bouts under the gladiatorial guilds, her bear totem tattoo freshly inked across her collarbone, a gift from a wandering shaman who recognized the fury in her as something older than mere temper.

The gladiatorial circuit gave her structure without softening her. She won more than she lost. She lost harder than most winners. What she couldn't find in the pits was purpose — the fights felt like repetition, like chewing on something that gave no nourishment. The crowds cheered for the blood, not for her. She wanted to be seen for something that mattered.

Talos found her during a lightning storm that killed six people in the valley where she was camped between bouts. She stood in the open while everyone else ran for cover, not from bravery but from the irrational fury the storm always lit in her — that deep inexplicable rage at the sky for doing what it had always done. A strike hit close enough to scatter dirt across her boots. In the ringing silence after, she heard a voice that sounded like thunder given a larynx: You fight everything except the thing that's worth fighting.

She didn't take that as a divine calling so much as a challenge she couldn't turn down. Talos doesn't offer warmth or protection or meaning in the philosophical sense — Talos offers an answer to the question of what happens when you point all that fury in a direction worthy of it. For Kutada, that direction is upward. Thrones are not given; they are taken. She has decided to take one.

The storms still make her furious. She suspects they always will. She suspects that's the point — a god of storms would want a champion who rages against the sky rather than cowering beneath it. She doesn't worship Talos so much as intend to surpass him. The difference between devotion and ambition has never interested her. Thrones are meant to be taken.`,
  },

  {
    slug: 'kuxtal-tun',
    name: 'Kuxtal Tun',
    age: 47,
    race: 'High Elf',
    class: 'Barbarian 6 / Warlock 14',
    subclass: 'Berserker / Pact of the Fiend',
    god: 'Ah Puch',
    domain: 'Torture',
    godSource: 'Mayan',
    endGoal: 'Cleanse yourself of your mental pain by claiming vengeance on the God of the cult who tortured you.',
    flaws: [
      'Reckless',
      'PTSD — rage triggers from chains',
      'Gambling addiction',
      'Relentless need to prove strength',
    ],
    portrait: '/images/characters/kuxtal-tun.png',
    unlocked: false,
    accentColor: '#7a2020',
    biography: `Kuxtal Tun grew up in a small elven village far from the political centers of the world — the kind of place where gossip travels faster than news and the worst thing that had happened in living memory was a bad harvest. She was known for her quick laugh and her inability to walk past a card game without sitting down. The gambling was a joke then. Later it would be one of the few anchors she had left.

She was twenty-three when the cult came. They did not announce themselves as such. They came as traders, then as guests, then in the night with binding chains and bladed instruments and a theology that required suffering as its sacrament. They took eleven people from the village. Kuxtal was one of them. She does not speak about what the years inside the cult's sanctum were like. The scars on her forearms speak for her. The way she reacts when she hears chains — the immediate, total shutdown of rational thought, the rage that takes over like a second person stepping into her skin — tells the rest.

Itzamna, a Mayan god of healing and medicine, intervened not through dramatic power but through a series of small graces: a guard who fell asleep at the wrong moment, a lock that had been oiled by the wrong hand, a corridor that was inexplicably empty when it should not have been. Kuxtal walked out. She does not call it divine favor. She calls it luck, because calling it anything else would require acknowledging a debt she doesn't know how to carry.

She wandered for years after, fighting for coin, gambling away the coin, fighting for more. She learned the warlock's pact somewhere in that period — a deal with something infernal in exchange for power, the specifics of which she discusses only when pressed, and even then only in fragments. The power felt like control after years of having none. She held onto it.

The gambling bar where she met Velkyn Kensek was not memorable in any particular way. The game was rigged; she noticed after three hands; she stayed anyway because she had nothing else to do and because the drow across the table had an interesting face. When Velkyn offered her a different kind of game — infiltrating a cult, raiding a sanctum, ending something that deserved to end — Kuxtal said yes before the offer was finished.

The cult raid went sideways. The relationship that formed in the aftermath of near-death did not. Kuxtal and Velkyn have a history now, which is not the same as an easy relationship. Kuxtal is reckless in ways that alarm even people used to recklessness. She picks fights with things larger than she is and calls it assessment. She doubles down when a sensible person would walk away. The gambling never really stopped — it just changed tables.

What drives her now is not revenge in the clean sense. It is more accurate to say she carries something inside that needs somewhere to go, a weight of accumulated suffering that has no release except forward motion. She intends to find the god behind the cult's theology, the divine presence that gave the torturers their justification, and end that justification at its source. She suspects this will not actually fix what is broken in her. She intends to do it anyway.`,
  },

  {
    slug: 'skavir-xarakas',
    name: 'Skavir Xarakas',
    age: 40,
    race: 'Tiefling',
    class: 'Fighter',
    god: 'Demeter',
    domain: 'Fertility',
    godSource: 'Greek Pantheon',
    endGoal: 'Prevent Demeter from claiming any more lives from your village.',
    background: 'Folk Hero',
    flaws: [
      'Antisocial',
      'Slow to trust',
      'Independent — won\'t accept help',
      'Avoids casual interaction',
    ],
    portrait: '/images/characters/skavir-xarakas.png',
    unlocked: false,
    accentColor: '#3d4a3a',
    biography: `The farm where Skavir Xarakas grew up sat at the high end of a mountain valley where the soil was thin and the seasons were short and the neighbors were two hours away on a clear day. His family worked it anyway — his father, a tiefling who had come to the mountains to avoid the complications of living among people who feared tieflings, and his younger brother, who inherited their father's easy laugh. His mother was a different matter. She had disappeared before Skavir's memory had fully formed, gone to explore the underplanes according to his father, though exactly where or why was a story that changed depending on how much his father had drunk.

The farm was adequate. Not comfortable, not prosperous, but adequate, until the year the harvests began to fail in a specific and deliberate way. The grain rotted in the ground before it could be cut. The root vegetables emerged from the soil withered and grey. The livestock gave no milk and then gave nothing at all. The neighbors reported the same. Someone, eventually, mentioned Demeter — the old Greek earth goddess, older than most of the gods who held current sway, with a reputation for demanding ritual that bordered on the punitive.

The elders organized a ceremony. Skavir was part of it. He was young enough that he thought participation was enough, that going through the motions would satisfy whatever mechanism was behind the blight. He was wrong. The ceremony ended with the earth opening. With children being taken — pulled into the ground by roots that moved with purpose, soil closing over them without a sound. Skavir fought. He was not strong enough. He was never going to be strong enough. That was, he suspects now, precisely the point.

Three children from the village were taken that day. He could not get them back. No one could explain why Demeter wanted them, or what the sacrifice was supposed to accomplish, or whether the harvests would recover now that she had taken what she demanded. The harvests did recover. The children did not return. Skavir decided both of these facts were unacceptable and spent the next fifteen years making himself into someone who might be able to do something about the second one.

Folk hero is the category his background falls into, which is a polite way of saying that people in the region knew him as someone who helped when helping cost something. He was not warm about it. He helped because he understood helplessness from the inside and found it intolerable to watch, not because he enjoyed company. His younger brother remained on the farm. Skavir visited when he could and left as quickly as was decent, uncomfortable with the weight of family, with the way his brother looked at him like he expected something.

He found his way toward Cyric's domain through a series of lateral moves — rumors, dead ends, a merchant who knew a priest who knew a scholar who had once found a reference to the kind of divine interference Demeter had committed and where one might go to seek redress. Redress is the wrong word for what he wants. He wants Demeter prevented. He wants a guarantee that no one else's children get pulled into the dark in service of a harvest that was going to come back anyway.

He does not discuss this goal casually. He does not discuss much casually. If you travel with Skavir Xarakas for long enough, you learn that every word he says is load-bearing and that the silence around his words is not unfriendliness so much as a total absence of use for small talk in a life that has not had room for it.`,
  },

  {
    slug: 'tian-rui',
    name: 'Tian-Rui',
    age: '1000+',
    race: 'Shadar-kai',
    class: 'Sorcerer 18 / Warlock 2',
    subclass: 'Aberrant Mind / The Undead',
    god: 'Yaoshi',
    domain: 'Immortality',
    godSource: 'Honkai Star Rail',
    endGoal: 'Reach the sweet embrace of death.',
    background: 'Mage of High Sorcery',
    flaws: [
      'Nonchalant',
      'Arrogant',
      'Nihilistic from immortality',
      'Guilt from past mistakes',
    ],
    portrait: '/images/characters/tian-rui.png',
    unlocked: false,
    accentColor: '#5a3a7a',
    dndBeyondLink: 'https://www.dndbeyond.com/characters/160037999',
    biography: `There is a particular kind of exhaustion that does not come from a lack of sleep. Tian-Rui has had more sleep than most beings will accumulate across all their lives combined. The exhaustion he carries is the exhaustion of having seen everything repeat — different names, different faces, the same shapes of tragedy — and having survived all of it through no particular virtue of his own.

He was born in Xiancheng, a city that prided itself on cultivation of magical talent, into a family of sufficient standing that his gifts were recognized early and developed deliberately. He was arrogant from the beginning. This is worth stating plainly because he is still arrogant now, a thousand years later, and he has had ample opportunity to become humble; the arrogance is not a phase or a wound. It is simply part of the architecture.

The appeal to Yaoshi — the god of immortality, or more precisely the god of life that does not end — was made somewhere in his early adulthood, when he was still young enough to believe that more time was the same as more opportunity. He wanted to finish what he was working on. He wanted time to master things that took time to master. The request seemed reasonable. Yaoshi granted it, with the understanding that divine gifts of this magnitude tend to reshape what they touch.

The reshaping was collective. The people of Xiancheng did not simply gain lifespans; they were transformed, their essence altered by Yaoshi's blessing until they became Shadar-kai — beings touched by the Shadowfell, their vitality redistributed in ways that extended life by making it colder, greyer, less immediate. Tian-Rui had not intended this for anyone but himself. The guilt of that — the fact that an entire people were reshaped by his petition — is one of the few things that still reaches him through the nonchalance he wears like armor.

He met Theo and Myrkal sometime in the second century. The details of how they came to travel together are less important than what happened at the end: Myrkal died. There was a Wish involved — one of those catastrophic moments where the solution seems elegant and the execution is not, where someone survives who should not have and something breaks in the world that cannot be cleanly repaired. Theo blamed Tian-Rui. Tian-Rui did not dispute this. There are things he did in that period that he disputes less every year, as the decades smooth the specifics into a generalized sense of having been careless with people who deserved better.

The deal with Lady Death came later — a formal arrangement, a pact with the Undead patron, the warlock's contract entered not for power but for the promise of an endpoint. He wants to die. This is not melodrama. After a thousand years, the desire for completion, for a proper ending, has become his primary orientation. Every near-death experience is both a failure and a reminder that something still won't let him go. He has had enough brushes with death to know that the madness lurking at the edge of his cognition is not metaphorical — there is something wrong in a mind that has processed a millennium, and he is aware of it in the way you are aware of a sound in the walls: present, continuous, and not yet catastrophic.

He goes by Ray with people he doesn't want to explain himself to, which is most people. His fighting style is overwhelming and precise, the kind of precision that comes from having had time to master things properly. He cares about the outcome of this campaign less because he believes in the cause and more because it is something to do, and because Velkyn, who has a peculiar stubbornness Tian-Rui finds more interesting than most things he's encountered recently, seems to be pointed in a direction that intersects with his own.`,
  },

  {
    slug: 'velkyn-kensek',
    name: 'Velkyn Kensek',
    age: 68,
    race: 'Drow',
    class: 'Fighter 14 / Warlock 6',
    subclass: 'Samurai / Pact of the Chain — Patron: Izanagi-no-okami',
    god: 'Izanami',
    domain: 'Creation and Death',
    godSource: 'Persona 4',
    endGoal: 'Driven by Izanagi to strike down Izanami as part of your pact.',
    background: 'Soldier',
    flaws: [
      'Gambling addiction',
      'Prone to unnecessary risks',
      'Arrogant',
      'Low self-esteem',
    ],
    portrait: '/images/characters/velkyn-kensek.png',
    unlocked: true,
    accentColor: '#3a4a6a',
    biography: `The drow army that operates beneath the city of Inaba is not an organization most surface-dwellers know exists, which is precisely the point. Velkyn Kensek served in it for forty-three years, first as infantry, then as a field commander with the kind of reputation that is built on outcomes rather than charm. He was good at the work. He was not good at the hours between the work, when the qualities that made him effective in a fight — the aggression, the pride, the willingness to stake more than he could afford — turned inward and spent themselves on card games and dice in underground establishments that had the good sense not to ask questions.

The gambling bar was in a tunnel district two levels below Inaba's main thoroughfare. The game was visibly rigged. Velkyn sat down anyway, because the alternative was going back to the barracks and lying awake, and because the high elf on the other side of the table had the particular quality of someone who was also, in their own way, not going back to anything.

That was Kuxtal Tun. The game lasted three hours. By the end of it they had established that they were both looking for a cult, that their reasons were different, and that neither of them was in a position to accomplish it alone. The cult raid was planned over the following week in a series of conversations conducted in that bar and two others like it, neither of them fully trusting the other, both of them proceeding anyway because trust is expensive and neither of them had any better options.

The raid went wrong in the way that raids planned in bars tend to go wrong — not catastrophically but enough that they nearly died twice before they were out. They got Kuxtal free from the situation she'd been in. The cost was that Velkyn spent three weeks recovering from a wound that should have killed him and didn't, which he attributes to stubbornness, and which Kuxtal attributes to a soldier's inability to die on anyone's schedule but his own.

The relationship rebuilt itself slowly over the following years, unevenly, with setbacks corresponding to Velkyn's worst gambling runs and Kuxtal's worst PTSD episodes. It is not a clean relationship. It is the kind of relationship that survives because both people are too stubborn to let it die and too honest with each other for it to become something comfortable and false.

The Tarrasque came from nowhere, as Tarrasques do. The defense of Inaba was not planned; it was improvised in real time by people who happened to be present and capable, and "Ray" — Tian-Rui, who was passing through for reasons he declined to elaborate — was one of them. Velkyn fought beside him for six hours. By the end of it he had an opinion of Tian-Rui that was grudging and sincere, which for Velkyn passes as high regard.

Izanagi-no-okami appeared in the aftermath. The god of creation did not offer explanations — divine patrons rarely do — but the nature of the pact was clear enough: Velkyn's continued existence and combat effectiveness in exchange for participation in the resolution of something that Izanagi had a stake in. Izanami, the goddess of death and creation's shadow, had become a problem that Izanagi could not address directly. A mortal champion operating in the world could. The arrogance required to accept a pact with a major deity on those terms is exactly the kind Velkyn possesses.

The low self-esteem and the arrogance coexist without resolution, which is a thing that happens to people who have spent decades compensating for the former with performances of the latter. He fights with a samurai's deliberate precision. He gambles like someone who believes, on some level, that he deserves to lose. He ended Cyric with Godsbane — the god's own weapon turned back against him, a deed of sufficient weight that he has not yet fully processed it. He is not sure he will.

Izanami is dead. Velkyn followed her into Yomi, destroyed her phylactery, and killed her beneath the central cherry tree of her own domain, which is the thing Izanagi had wanted from him since the beginning. What the completion of the pact means for his relationship with the god of creation — whether it ends, changes, or simply continues because something larger than either of them is still unresolved — is not yet clear. In Aurelith, the party is known as Godslayers. Posters. A word that opens doors by implying that refusing to open them is also an available outcome. Velkyn has not decided what to do with the reputation. He is still deciding what to do with the last two.

He commissioned new weapons from Garrik Ironvein at Ironvein Armaments — a longsword capable of seating one materia, a greatsword capable of holding two. Both look like nothing. Both are waiting to become something. Ironvein built them to accept materia and to change when it is placed in them; until then they are ordinary steel that passes through the world without announcing itself. Velkyn understands this. He has spent most of his life being exactly that: functional, unassuming, and considerably more dangerous than he looks.`,
  },
];
