import { useEffect } from 'react';
import Divider from '../components/Divider';
import TableOfContents from '../components/TableOfContents';
import { loreSections } from '../data/lore';

export default function World() {
  useEffect(() => {
    document.title = 'World of Aethernox — No One Left to Pray To';
  }, []);

  const allEntries = loreSections.flatMap(section => {
    const entries = [{ id: section.id, heading: section.heading }];
    if (section.subsections) {
      section.subsections.forEach(sub => entries.push({ id: sub.id, heading: sub.heading }));
    }
    return entries;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          The Living World
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Aethernox
        </h1>
      </header>

      <Divider />

      <div className="flex gap-12">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Continent map */}
          <figure className="mb-12">
            <div className="relative bg-bg-panel border border-accent-gold/20 rounded-sm overflow-hidden">
              <img
                src="/images/maps/aethernox-map.jpg"
                alt="The continent of Aethernox"
                className="w-full h-auto max-h-[500px] object-cover object-center"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                  const parent = el.parentElement;
                  if (parent) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'h-48 flex items-center justify-center text-parchment-dark/30';
                    placeholder.style.fontFamily = "'Cinzel', Georgia, serif";
                    placeholder.innerHTML = '<span class="text-sm tracking-widest uppercase">Aethernox Continent Map</span>';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
            <figcaption
              className="text-center text-sm text-parchment-dark/50 italic mt-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Aethernox looks like a normal fantasy world — but something is wrong.
            </figcaption>
          </figure>

          {/* Lore sections */}
          {loreSections.map((section) => (
            <div key={section.id} className="mb-14">
              <h2
                id={section.id}
                className="text-2xl font-bold text-accent-gold tracking-wide mb-5 scroll-mt-24"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {section.heading}
              </h2>

              {section.body.split('\n\n').filter(Boolean).map((para, i) => (
                <p
                  key={i}
                  className="text-parchment-dark/80 leading-relaxed mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem' }}
                >
                  {para}
                </p>
              ))}

              {section.subsections && (
                <div className="mt-8 space-y-10 pl-4 border-l border-accent-gold/15">
                  {section.subsections.map(sub => (
                    <div key={sub.id}>
                      <h3
                        id={sub.id}
                        className="text-lg font-bold text-parchment tracking-wide mb-3 scroll-mt-24"
                        style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                      >
                        {sub.heading}
                      </h3>
                      {sub.body.split('\n\n').filter(Boolean).map((para, i) => (
                        <p
                          key={i}
                          className="text-parchment-dark/75 leading-relaxed mb-3"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <Divider />
            </div>
          ))}
        </div>

        {/* Sticky TOC */}
        <TableOfContents entries={allEntries} />
      </div>
    </div>
  );
}
