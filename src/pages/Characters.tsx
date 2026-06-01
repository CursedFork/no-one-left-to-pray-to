import { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import Divider from '../components/Divider';
import { characters } from '../data/characters';

export default function Characters() {
  useEffect(() => {
    document.title = 'The Party — No One Left to Pray To';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Dramatis Personae
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          The Party
        </h1>

        <p
          className="mt-5 max-w-xl mx-auto text-sm italic leading-relaxed text-parchment-dark/45"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
        >
          These records are bound by the same covenant that binds their subjects. Each page opens
          only when the god that holds it loosens their grip — which is to say, when they no longer
          can. Slay the patron. Claim the page.
        </p>
      </header>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {characters.map(char => (
          <CharacterCard key={char.slug} character={char} />
        ))}
      </div>
    </div>
  );
}
