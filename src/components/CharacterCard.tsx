import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

function SealedCard({ character }: { character: Character }) {
  return (
    <div
      className="block bg-bg-panel border border-accent-gold/15 rounded-sm overflow-hidden cursor-not-allowed select-none"
      style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.5)' }}
    >
      {/* Portrait — dimmed */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: character.accentColor, opacity: 0.3 }} />
        {character.portrait && (
          <img
            src={character.portrait}
            alt=""
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(80%) brightness(0.25)' }}
          />
        )}
        {/* Seal overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          {/* Wax seal ring */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: `${character.accentColor}60`,
              background: `${character.accentColor}18`,
              boxShadow: `0 0 20px ${character.accentColor}25`,
            }}
          >
            <Lock size={22} style={{ color: character.accentColor, opacity: 0.7 }} />
          </div>
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Cinzel', Georgia, serif", color: `${character.accentColor}90` }}
          >
            Sealed
          </span>
        </div>
      </div>

      {/* Info — partially redacted */}
      <div className="p-5">
        <h2
          className="text-lg font-bold tracking-wide mb-1"
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: 'rgba(232,220,196,0.35)' }}
        >
          {character.name}
        </h2>
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(201,176,148,0.25)' }}>
          {character.race} &nbsp;·&nbsp; {character.class}
        </p>
        <p
          className="text-sm italic leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(201,161,74,0.3)' }}
        >
          This record has not yet been opened.
        </p>
        <div className="mt-4 pt-4 border-t border-accent-gold/8 flex items-center justify-between">
          <span className="text-xs tracking-wide" style={{ color: 'rgba(201,176,148,0.2)' }}>{character.god}</span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: `${character.accentColor}40` }}
          >
            Locked
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const initials = character.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (!character.unlocked) {
    return (
      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
        <SealedCard character={character} />
      </motion.div>
    );
  }

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
              <div className="absolute inset-0 bg-gradient-to-t from-bg-panel/70 via-transparent to-transparent" />
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
