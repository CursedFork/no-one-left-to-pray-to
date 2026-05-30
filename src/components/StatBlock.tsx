import type { BestiaryEntry } from '../types';
import StatusPill from './StatusPill';
import TagBadge from './TagBadge';
import { ExternalLink } from 'lucide-react';

interface StatBlockProps {
  entry: BestiaryEntry;
}

export default function StatBlock({ entry }: StatBlockProps) {
  return (
    <div
      className="bg-parchment text-ink rounded-sm border border-accent-gold/30 overflow-hidden parchment-grain"
      style={{ boxShadow: 'inset 0 1px 3px rgba(26,20,16,0.1), 0 2px 8px rgba(26,20,16,0.4)' }}
    >
      {/* Gold rule header */}
      <div className="px-6 py-4 border-b-2 border-accent-gold/40 bg-parchment-dark/30">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2
              className="text-2xl font-bold text-accent-blood tracking-wide"
              style={{ fontFamily: "'Cinzel', Georgia, serif", fontVariant: 'small-caps' }}
            >
              {entry.name}
            </h2>
            <p className="text-ink-muted text-sm italic mt-0.5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {entry.role}
            </p>
          </div>
          <StatusPill status={entry.status} />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {entry.tags.map(t => <TagBadge key={t} tag={t} />)}
        </div>
      </div>

      <div className="p-6">
        {/* Description */}
        <p
          className="text-ink leading-relaxed mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
        >
          {entry.description}
        </p>

        {/* Stats grid */}
        {entry.stats && Object.keys(entry.stats).length > 0 && (
          <div className="mb-6">
            <div className="h-px bg-accent-blood/30 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {entry.stats.hp !== undefined && (
                <StatItem label="Hit Points" value={String(entry.stats.hp)} />
              )}
              {entry.stats.ac !== undefined && (
                <StatItem label="Armor Class" value={String(entry.stats.ac)} />
              )}
              {entry.stats.speed !== undefined && (
                <StatItem label="Speed" value={String(entry.stats.speed)} />
              )}
              {entry.stats.saveDC !== undefined && (
                <StatItem label="Save DC" value={String(entry.stats.saveDC)} />
              )}
              {entry.stats.saveBonuses !== undefined && (
                <StatItem label="Save Bonuses" value={String(entry.stats.saveBonuses)} />
              )}
            </div>
            <div className="h-px bg-accent-blood/30 mt-4" />
          </div>
        )}

        {/* Actions */}
        {entry.actions && entry.actions.length > 0 && (
          <div className="mb-5">
            <h3
              className="text-xs tracking-widest uppercase text-accent-blood/70 mb-3 font-semibold"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Actions
            </h3>
            <ul className="space-y-2">
              {entry.actions.map((action, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}>
                  <ActionText text={action} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Abilities */}
        {entry.abilities && entry.abilities.length > 0 && (
          <div className="mb-5">
            <h3
              className="text-xs tracking-widest uppercase text-accent-blood/70 mb-3 font-semibold"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Abilities
            </h3>
            <ul className="space-y-2">
              {entry.abilities.map((ability, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}>
                  <ActionText text={ability} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legendary Actions */}
        {entry.legendaryActions && entry.legendaryActions.length > 0 && (
          <div className="mb-5">
            <div className="h-px bg-accent-gold/20 mb-4" />
            <h3
              className="text-xs tracking-widest uppercase text-accent-gold/70 mb-3 font-semibold"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Legendary Actions
            </h3>
            <ul className="space-y-2">
              {entry.legendaryActions.map((action, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}>
                  <ActionText text={action} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legendary Reactions */}
        {entry.legendaryReactions && entry.legendaryReactions.length > 0 && (
          <div className="mb-5">
            <h3
              className="text-xs tracking-widest uppercase text-accent-violet/70 mb-3 font-semibold"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Legendary Reactions
            </h3>
            <ul className="space-y-2">
              {entry.legendaryReactions.map((reaction, i) => (
                <li key={i} className="text-sm text-ink leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}>
                  <ActionText text={reaction} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quote */}
        {entry.quote && (
          <blockquote
            className="border-l-4 border-accent-blood/40 pl-4 mt-5 italic text-ink-muted"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
          >
            {entry.quote}
          </blockquote>
        )}

        {/* Notes */}
        {entry.notes && (
          <div className="mt-5 pt-4 border-t border-ink/10">
            <p
              className="text-sm text-ink-muted italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="not-italic font-semibold text-ink-muted/80 tracking-wide uppercase text-xs">Note: </span>
              {entry.notes}
            </p>
          </div>
        )}

        {/* External link */}
        {entry.externalLink && (
          <div className="mt-4 pt-4 border-t border-ink/10">
            <a
              href={entry.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent-blood/70 hover:text-accent-blood transition-colors tracking-wide uppercase"
            >
              View Full Stat Block <ExternalLink size={11} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-2 bg-parchment-dark/20 rounded-sm border border-ink/10">
      <div className="text-xs text-ink-muted tracking-wide uppercase mb-0.5">{label}</div>
      <div className="font-bold text-ink text-sm" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>{value}</div>
    </div>
  );
}

function ActionText({ text }: { text: string }) {
  const colonIdx = text.indexOf(':');
  if (colonIdx > -1) {
    const name = text.slice(0, colonIdx);
    const rest = text.slice(colonIdx + 1);
    return (
      <>
        <span className="font-semibold italic">{name}:</span>
        {rest}
      </>
    );
  }
  return <>{text}</>;
}
