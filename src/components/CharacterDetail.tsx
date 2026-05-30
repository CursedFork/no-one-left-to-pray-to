import { ExternalLink } from 'lucide-react';
import type { Character } from '../types';
import Parchment from './Parchment';
import Divider from './Divider';

interface CharacterDetailProps {
  character: Character;
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const paragraphs = character.biography.split('\n\n').filter(Boolean);
  const initials = character.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <article className="max-w-4xl mx-auto">
      {/* === Cinematic Art Hero === */}
      {character.portrait ? (
        <div className="relative w-full h-[480px] sm:h-[600px] overflow-hidden">
          <img
            src={character.portrait}
            alt={character.name}
            className="w-full h-full object-cover object-top"
          />
          {/* Fade to page background at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/25 to-transparent" />
          {/* Soft vignette on sides */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base/50 via-transparent to-bg-base/50" />
          {/* Accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ backgroundColor: character.accentColor, opacity: 0.6 }}
          />
        </div>
      ) : (
        /* Fallback: plain accent background with initials */
        <div
          className="relative w-full h-48 flex items-center justify-center"
          style={{ backgroundColor: `${character.accentColor}18` }}
        >
          <span
            className="text-8xl font-bold opacity-20"
            style={{ fontFamily: "'Cinzel', Georgia, serif", color: character.accentColor }}
          >
            {initials}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
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

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
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
      </div>
    </article>
  );
}
