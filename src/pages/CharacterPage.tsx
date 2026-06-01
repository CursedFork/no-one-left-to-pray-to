import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { characters } from '../data/characters';
import CharacterDetail from '../components/CharacterDetail';

function SealedPage({ name, god, accentColor }: { name: string; god: string; accentColor: string }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      {/* Wax seal */}
      <div className="flex justify-center mb-8">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center border-2"
          style={{
            borderColor: `${accentColor}50`,
            background: `${accentColor}12`,
            boxShadow: `0 0 40px ${accentColor}20, inset 0 0 20px ${accentColor}10`,
          }}
        >
          <Lock size={32} style={{ color: accentColor, opacity: 0.6 }} />
        </div>
      </div>

      <h1
        className="text-3xl font-bold tracking-[0.2em] uppercase mb-3"
        style={{ fontFamily: "'Cinzel', Georgia, serif", color: 'rgba(232,220,196,0.5)' }}
      >
        {name}
      </h1>

      <div
        className="w-12 h-px mx-auto mb-6"
        style={{ backgroundColor: `${accentColor}40` }}
      />

      <p
        className="text-base italic mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(232,220,196,0.35)', fontSize: '1.15rem' }}
      >
        This record is sealed.
      </p>
      <p
        className="text-sm"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(201,176,148,0.25)' }}
      >
        The story of {name} has not yet been opened to these pages.
      </p>

      <div
        className="mt-10 inline-block px-5 py-2 rounded-sm border text-xs tracking-widest uppercase"
        style={{
          borderColor: `${accentColor}25`,
          color: `${accentColor}40`,
          fontFamily: "'Cinzel', Georgia, serif",
        }}
      >
        Patron: {god}
      </div>

      <div className="mt-10">
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors"
          style={{ color: 'rgba(201,161,74,0.4)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,161,74,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,161,74,0.4)')}
        >
          <ArrowLeft size={12} /> Return to the party
        </Link>
      </div>
    </div>
  );
}

export default function CharacterPage() {
  const { slug } = useParams<{ slug: string }>();
  const character = characters.find(c => c.slug === slug);

  useEffect(() => {
    if (character) {
      document.title = character.unlocked
        ? `${character.name} — No One Left to Pray To`
        : `Sealed Record — No One Left to Pray To`;
    }
  }, [character]);

  if (!character) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-parchment-dark/50 text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          This soul is not recorded in these pages.
        </p>
        <Link to="/characters" className="mt-6 inline-block text-xs tracking-widest uppercase text-accent-gold/60 hover:text-accent-gold">
          ← Return to the party
        </Link>
      </div>
    );
  }

  if (!character.unlocked) {
    return <SealedPage name={character.name} god={character.god} accentColor={character.accentColor} />;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-parchment-dark/50 hover:text-accent-gold transition-colors"
        >
          <ArrowLeft size={12} /> Party Roster
        </Link>
      </div>
      <CharacterDetail character={character} />
    </div>
  );
}
