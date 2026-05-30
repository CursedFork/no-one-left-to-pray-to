import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';
import type { MagicItem } from '../types';

export default function ItemCard({ item }: { item: MagicItem }) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Link
        to={`/items/${item.slug}`}
        className="block bg-bg-panel border border-accent-gold/20 rounded-sm p-5 hover:border-accent-gold/50 transition-colors duration-200 group h-full"
        style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-sm bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center flex-shrink-0">
            <Sword size={18} className="text-accent-gold/60" />
          </div>
          <div className="min-w-0">
            <h2
              className="text-base font-bold text-parchment tracking-wide group-hover:text-accent-gold transition-colors duration-200"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {item.name}
            </h2>
            <p className="text-xs text-parchment-dark/50 tracking-wide">{item.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2 py-0.5 rounded border border-accent-gold/30 text-accent-gold/70 tracking-wide uppercase">
            {item.rarity}
          </span>
          {item.attunement && (
            <span className="text-xs px-2 py-0.5 rounded border border-parchment-dark/20 text-parchment-dark/50 tracking-wide uppercase">
              Attunement
            </span>
          )}
        </div>
        <p
          className="text-sm text-parchment-dark/60 leading-relaxed line-clamp-3 italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {item.description}
        </p>
      </Link>
    </motion.div>
  );
}
