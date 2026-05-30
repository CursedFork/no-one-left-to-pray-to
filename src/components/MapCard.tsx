import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import type { MapEntry } from '../types';

interface MapCardProps {
  map: MapEntry;
  onClick: () => void;
}

export default function MapCard({ map, onClick }: MapCardProps) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <button
        onClick={onClick}
        className="w-full text-left bg-bg-panel border border-accent-gold/20 rounded-sm overflow-hidden hover:border-accent-gold/50 transition-colors duration-200 group"
        style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
      >
        {/* Image area */}
        <div className="relative h-44 bg-bg-base overflow-hidden">
          {map.image ? (
            <img
              src={map.image}
              alt={map.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : null}
          {/* Fallback overlay always present */}
          <div className="absolute inset-0 flex items-center justify-center bg-bg-panel/60">
            <div className="text-center">
              <Map size={32} className="text-accent-gold/30 mx-auto mb-2" />
              <span
                className="text-xs text-parchment-dark/40 tracking-widest uppercase"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {map.title}
              </span>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-panel via-transparent to-transparent" />
        </div>

        <div className="p-4">
          <h2
            className="text-sm font-bold text-parchment tracking-wide mb-2 group-hover:text-accent-gold transition-colors duration-200"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {map.title}
          </h2>
          <p
            className="text-xs text-parchment-dark/60 leading-relaxed line-clamp-3 italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {map.description}
          </p>
          <span className="mt-3 inline-block text-xs text-accent-gold/40 group-hover:text-accent-gold/80 transition-colors tracking-wide">
            View full map →
          </span>
        </div>
      </button>
    </motion.div>
  );
}
