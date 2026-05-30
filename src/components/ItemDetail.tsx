import type { MagicItem } from '../types';
import Parchment from './Parchment';
import Divider from './Divider';
import { Check } from 'lucide-react';

export default function ItemDetail({ item }: { item: MagicItem }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        {item.image && (
          <div className="flex justify-center mb-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-contain opacity-80"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs px-3 py-1 rounded border border-accent-gold/40 text-accent-gold tracking-widest uppercase">
            {item.rarity}
          </span>
          <span className="text-xs px-3 py-1 rounded border border-parchment-dark/30 text-parchment-dark/60 tracking-wide">
            {item.type}
          </span>
          {item.attunement && (
            <span className="text-xs px-3 py-1 rounded border border-accent-violet/30 text-accent-violet tracking-wide">
              Requires Attunement
            </span>
          )}
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {item.name}
        </h1>
        {item.attunementNote && (
          <p className="mt-3 text-sm text-parchment-dark/50 italic max-w-lg mx-auto" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {item.attunementNote}
          </p>
        )}
      </header>

      <Divider />

      <Parchment className="p-8 sm:p-10 mb-8">
        <p
          className="text-ink leading-relaxed mb-6 drop-cap"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem' }}
        >
          {item.description}
        </p>

        {item.properties.length > 0 && (
          <>
            <div className="h-px bg-ink/10 my-6" />
            <h2
              className="text-xs tracking-widest uppercase text-ink-muted mb-4"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Properties
            </h2>
            <ul className="space-y-3">
              {item.properties.map((prop, i) => {
                const colonIdx = prop.indexOf(':');
                const hasLabel = colonIdx > -1 && colonIdx < 50;
                return (
                  <li key={i} className="flex gap-3 text-ink" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}>
                    <Check size={14} className="text-accent-blood/60 mt-1 flex-shrink-0" />
                    <span>
                      {hasLabel ? (
                        <>
                          <span className="font-semibold italic">{prop.slice(0, colonIdx)}:</span>
                          {prop.slice(colonIdx + 1)}
                        </>
                      ) : prop}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Parchment>
    </article>
  );
}
