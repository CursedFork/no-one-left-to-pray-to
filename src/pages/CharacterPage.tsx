import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { characters } from '../data/characters';
import CharacterDetail from '../components/CharacterDetail';

export default function CharacterPage() {
  const { slug } = useParams<{ slug: string }>();
  const character = characters.find(c => c.slug === slug);

  useEffect(() => {
    if (character) {
      document.title = `${character.name} — No One Left to Pray To`;
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
