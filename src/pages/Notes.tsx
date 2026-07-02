import { useEffect } from 'react';
import Divider from '../components/Divider';
import { npcs, looseThreads } from '../data/npcs';
import type { NpcStatus, ThreadStatus } from '../types';

const npcStatusClasses: Record<NpcStatus, string> = {
  'Traveling With Party': 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
  Alive: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
  Deceased: 'bg-accent-blood/30 text-red-300 border-accent-blood/50',
  Unknown: 'bg-parchment-dark/10 text-parchment-dark/60 border-parchment-dark/30',
};

const threadStatusClasses: Record<ThreadStatus, string> = {
  Open: 'bg-accent-gold/20 text-accent-gold border-accent-gold/40',
  Resolved: 'bg-parchment-dark/10 text-parchment-dark/60 border-parchment-dark/30',
};

export default function Notes() {
  useEffect(() => {
    document.title = 'NPCs & Loose Threads — No One Left to Pray To';
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Notable Faces &amp; Unfinished Business
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          NPCs &amp; Loose Threads
        </h1>
      </header>

      <Divider />

      <section className="mb-14">
        <h2
          className="text-2xl font-bold text-accent-gold tracking-wide mb-6"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Notable NPCs
        </h2>

        <div className="space-y-5">
          {npcs.map(npc => (
            <div
              key={npc.slug}
              className="bg-bg-panel border border-accent-gold/20 rounded-sm p-5"
              style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="min-w-0">
                  <h3
                    className="text-lg font-bold text-parchment tracking-wide"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    {npc.name}
                  </h3>
                  <p
                    className="text-xs text-parchment-dark/50 italic mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {npc.role}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase whitespace-nowrap ${npcStatusClasses[npc.status]}`}
                >
                  {npc.status}
                </span>
              </div>

              <p
                className="text-parchment-dark/75 leading-relaxed mt-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
              >
                {npc.description}
              </p>

              {npc.firstAppearance && (
                <p
                  className="text-xs text-parchment-dark/40 italic mt-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  First appearance: {npc.firstAppearance}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <h2
          className="text-2xl font-bold text-accent-gold tracking-wide mb-6"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Loose Threads
        </h2>

        <div className="space-y-5">
          {looseThreads.map(thread => (
            <div
              key={thread.slug}
              className="bg-bg-panel border border-accent-gold/20 rounded-sm p-5"
              style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3
                  className="text-lg font-bold text-parchment tracking-wide"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {thread.title}
                </h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase whitespace-nowrap ${threadStatusClasses[thread.status]}`}
                >
                  {thread.status}
                </span>
              </div>

              <p
                className="text-parchment-dark/75 leading-relaxed mt-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
              >
                {thread.description}
              </p>

              {thread.firstAppearance && (
                <p
                  className="text-xs text-parchment-dark/40 italic mt-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  First appearance: {thread.firstAppearance}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
