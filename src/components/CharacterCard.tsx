import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

function Portrait({ character }: { character: Character }) {
  const initials = character.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (character.portrait) {
    return (
      <img
        src={character.portrait}
        alt={character.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-3xl font-bold" style="font-family:'Cinzel',Georgia,serif;color:${character.accentColor}">${initials}</span>`;
          }
        }}
      />
    );
  }

  return (
    <span
      className="text-3xl font-bold"
      style={{ fontFamily: "'Cinzel', Georgia, serif", color: character.accentColor }}
    >
      {initials}
    </span>
  );
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Link
        to={`/characters/${character.slug}`}
        className="block bg-bg-panel border border-accent-gold/20 rounded-sm overflow-hidden group hover:border-accent-gold/50 transition-colors duration-200"
        style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.5)' }}
      >
        {/* Portrait */}
        <div
          className="relative h-48 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: `${character.accentColor}15` }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden border-2 transition-colors duration-200"
            style={{ borderColor: `${character.accentColor}60`, background: `${character.accentColor}20` }}
          >
            <Portrait character={character} />
          </div>
          {/* Accent stripe at top */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: character.accentColor }} />
        </div>

        {/* Info */}
        <div className="p-5">
          <h2
            className="text-lg font-bold text-parchment tracking-wide mb-1"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {character.name}
          </h2>
          <p className="text-xs text-parchment-dark/60 tracking-widest uppercase mb-3">
            {character.race} &nbsp;·&nbsp; {character.class}
          </p>
          <p
            className="text-sm text-accent-gold/70 italic leading-snug line-clamp-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {character.endGoal}
          </p>

          <div className="mt-4 pt-4 border-t border-accent-gold/10 flex items-center justify-between">
            <span className="text-xs text-parchment-dark/40 tracking-wide">{character.god}</span>
            <span
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: character.accentColor }}
            >
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
