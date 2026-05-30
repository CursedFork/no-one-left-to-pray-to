import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BestiaryEntry } from '../types';
import StatusPill from './StatusPill';
import TagBadge from './TagBadge';

export default function BestiaryCard({ entry }: { entry: BestiaryEntry }) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Link
        to={`/bestiary/${entry.slug}`}
        className="block bg-bg-panel border border-accent-gold/20 rounded-sm p-5 hover:border-accent-gold/50 transition-colors duration-200 group h-full"
        style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <h2
              className="text-base font-bold text-parchment tracking-wide group-hover:text-accent-gold transition-colors duration-200 truncate"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {entry.name}
            </h2>
            <p
              className="text-xs text-parchment-dark/50 italic mt-0.5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {entry.role}
            </p>
          </div>
          <StatusPill status={entry.status} />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {entry.tags.filter(t => t !== entry.status).slice(0, 3).map(tag => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <p
          className="text-sm text-parchment-dark/60 leading-relaxed line-clamp-2 italic"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {entry.description.slice(0, 120)}…
        </p>
      </Link>
    </motion.div>
  );
}
