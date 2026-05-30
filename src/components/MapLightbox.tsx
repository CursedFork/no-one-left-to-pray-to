import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Map } from 'lucide-react';
import type { MapEntry } from '../types';

interface MapLightboxProps {
  map: MapEntry | null;
  onClose: () => void;
}

export default function MapLightbox({ map, onClose }: MapLightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {map && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-base/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-5xl w-full max-h-full overflow-auto bg-bg-panel border border-accent-gold/30 rounded-sm"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-bg-panel/95 border-b border-accent-gold/20">
              <h2
                className="text-sm font-bold text-parchment tracking-wide"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {map.title}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 text-parchment-dark/60 hover:text-parchment transition-colors rounded"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="relative min-h-64 bg-bg-base flex items-center justify-center">
              {map.image ? (
                <img
                  src={map.image}
                  alt={map.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ) : (
                <div className="flex flex-col items-center gap-3 py-20 text-parchment-dark/30">
                  <Map size={48} />
                  <p
                    className="text-sm tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    Map image not yet loaded
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="p-5 border-t border-accent-gold/15">
              <p
                className="text-parchment-dark/70 leading-relaxed italic text-sm"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem' }}
              >
                {map.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
