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
