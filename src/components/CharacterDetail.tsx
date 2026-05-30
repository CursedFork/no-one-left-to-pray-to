import { ExternalLink } from 'lucide-react';
import type { Character } from '../types';
import Parchment from './Parchment';
import Divider from './Divider';

interface CharacterDetailProps {
  character: Character;
}

function Portrait({ character }: { character: Character }) {
  const initials = character.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (character.portrait) {
    return (
      <img
        src={character.portrait}
        alt={character.name}
        className="w-full h-full object-cover rounded-full"
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          t.style.display = 'none';
        }}
      />
    );
  }
  return (
    <span
      className="text-5xl font-bold"
      style={{ fontFamily: "'Cinzel', Georgia, serif", color: character.accentColor }}
    >
      {initials}
    </span>
  );
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const paragraphs = character.biography.split('\n\n').filter(Boolean);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        {/* Portrait */}
        <div className="flex justify-center mb-8">
          <div
            className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden border-4"
            style={{
              borderColor: character.accentColor,
              background: `${character.accentColor}20`,
              boxShadow: `0 0 32px ${character.accentColor}30`,
            }}
          >
            <Portrait character={character} />
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide mb-2"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {character.name}
        </h1>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-parchment-dark/60 tracking-wide mt-3 mb-6">
          <span>{character.race}</span>
          <span className="text-accent-gold/30">·</span>
          <span>{character.class}</span>
          <span className="text-accent-gold/30">·</span>
          <span>Age {character.age}</span>
          <span className="text-accent-gold/30">·</span>
          <span>{character.god} — {character.domain}</span>
        </div>

        {/* End goal pull-quote */}
        <p
          className="text-lg italic max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: character.accentColor,
          }}
        >
          "{character.endGoal}"
        </p>

        {character.dndBeyondLink && (
          <a
            href={character.dndBeyondLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-xs text-accent-gold/60 hover:text-accent-gold transition-colors tracking-wide uppercase"
          >
            View on D&amp;D Beyond <ExternalLink size={12} />
          </a>
        )}
      </div>

      <Divider />

      {/* Biography */}
      <Parchment className="p-8 sm:p-10 mb-8">
        <h2
          className="text-xs tracking-widest uppercase text-ink-muted mb-6 pb-2 border-b border-ink/10"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Biography
        </h2>
        <div className="text-ink leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem' }}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`mb-5 last:mb-0 ${i === 0 ? 'drop-cap' : ''}`}
            >
              {para}
            </p>
          ))}
        </div>
      </Parchment>

      {/* Flaws — torn note style */}
      <div
        className="relative bg-parchment-dark/90 p-6 rounded-sm border border-ink/10"
        style={{
          transform: 'rotate(-0.5deg)',
          boxShadow: '2px 4px 12px rgba(26,20,16,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border border-ink/20 bg-parchment"
          aria-hidden="true"
          style={{ boxShadow: '0 1px 3px rgba(26,20,16,0.3)' }}
        />
        <h3
          className="text-xs tracking-widest uppercase text-ink-muted mb-4 text-center"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Known Flaws
        </h3>
        <ul className="space-y-2">
          {character.flaws.map((flaw, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-ink"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
            >
              <span className="text-accent-blood mt-0.5 flex-shrink-0">—</span>
              {flaw}
            </li>
          ))}
        </ul>
        {character.background && (
          <p className="mt-4 pt-4 border-t border-ink/10 text-xs text-ink-muted tracking-wide text-center uppercase">
            Background: {character.background}
          </p>
        )}
      </div>
    </article>
  );
}
