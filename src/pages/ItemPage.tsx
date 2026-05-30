import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { magicItems } from '../data/items';
import ItemDetail from '../components/ItemDetail';

export default function ItemPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = magicItems.find(i => i.slug === slug);

  useEffect(() => {
    if (item) {
      document.title = `${item.name} — No One Left to Pray To`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-parchment-dark/50 text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          This item is not recorded in these pages.
        </p>
        <Link to="/items" className="mt-6 inline-block text-xs tracking-widest uppercase text-accent-gold/60 hover:text-accent-gold">
          ← Return to items
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/items"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-parchment-dark/50 hover:text-accent-gold transition-colors"
        >
          <ArrowLeft size={12} /> All Items
        </Link>
      </div>
      <ItemDetail item={item} />
    </div>
  );
}
