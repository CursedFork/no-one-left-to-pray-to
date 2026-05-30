import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { bestiary } from '../data/bestiary';
import StatBlock from '../components/StatBlock';

export default function BestiaryPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = bestiary.find(e => e.slug === slug);

  useEffect(() => {
    if (entry) {
      document.title = `${entry.name} — No One Left to Pray To`;
    }
  }, [entry]);

  if (!entry) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-parchment-dark/50 text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          This creature is not recorded in these pages.
        </p>
        <Link to="/bestiary" className="mt-6 inline-block text-xs tracking-widest uppercase text-accent-gold/60 hover:text-accent-gold">
          ← Return to the bestiary
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/bestiary"
        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-parchment-dark/50 hover:text-accent-gold transition-colors mb-8"
      >
        <ArrowLeft size={12} /> Bestiary
      </Link>
      <StatBlock entry={entry} />
    </div>
  );
}
