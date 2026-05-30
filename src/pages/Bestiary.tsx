import { useEffect, useState } from 'react';
import Divider from '../components/Divider';
import BestiaryCard from '../components/BestiaryCard';
import { bestiary } from '../data/bestiary';
import type { BestiaryStatus } from '../types';

const STATUS_FILTERS: (BestiaryStatus | 'All')[] = ['All', 'Active', 'Slain', 'Bargained With', 'Erased'];

export default function Bestiary() {
  const [filter, setFilter] = useState<BestiaryStatus | 'All'>('All');

  useEffect(() => {
    document.title = 'Bestiary — No One Left to Pray To';
  }, []);

  const filtered = filter === 'All' ? bestiary : bestiary.filter(e => e.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Antagonists &amp; Creatures
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Bestiary
        </h1>
      </header>

      <Divider />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by status">
        {STATUS_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-xs tracking-widest uppercase rounded-sm border transition-colors duration-150 ${
              filter === f
                ? 'bg-accent-gold/20 border-accent-gold/60 text-accent-gold'
                : 'border-parchment-dark/20 text-parchment-dark/50 hover:border-parchment-dark/40 hover:text-parchment-dark'
            }`}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(entry => (
          <BestiaryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
