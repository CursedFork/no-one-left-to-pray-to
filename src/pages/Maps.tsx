import { useEffect, useState } from 'react';
import Divider from '../components/Divider';
import MapCard from '../components/MapCard';
import MapLightbox from '../components/MapLightbox';
import { maps } from '../data/maps';
import type { MapEntry } from '../types';

export default function Maps() {
  const [selected, setSelected] = useState<MapEntry | null>(null);

  useEffect(() => {
    document.title = 'Maps — No One Left to Pray To';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Locations &amp; Battlemaps
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Maps
        </h1>
      </header>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {maps.map(map => (
          <MapCard key={map.slug} map={map} onClick={() => setSelected(map)} />
        ))}
      </div>

      <MapLightbox map={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
