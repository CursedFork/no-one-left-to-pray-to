import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const initials = character.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

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
        {/* Portrait — full bleed art */}
        <div className="relative h-72 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: character.accentColor }} />
          {character.portrait ? (
            <>
              <img
                src={character.portrait}
                alt={character.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-panel via-bg-panel/30 to-transparent" />
            </>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: `${character.accentColor}15` }}
            >
              <span
                className="text-5xl font-bold"
                style={{ fontFamily: "'Cinzel', Georgia, serif", color: character.accentColor }}
              >
                {initials}
              </span>
            </div>
          )}
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
