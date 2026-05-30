import { useEffect } from 'react';
import Divider from '../components/Divider';
import ItemCard from '../components/ItemCard';
import { magicItems, consumables, homebrewRules } from '../data/items';

export default function Items() {
  useEffect(() => {
    document.title = 'Items & Resources — No One Left to Pray To';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Artifacts &amp; Resources
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Magic Items
        </h1>
      </header>

      <Divider />

      {/* Artifacts */}
      <section className="mb-16">
        <h2
          className="text-lg font-bold text-accent-gold tracking-widest uppercase mb-6"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Artifacts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {magicItems.map(item => (
            <ItemCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Consumables & Homebrew Rules */}
      <section className="mb-10">
        <h2
          className="text-lg font-bold text-accent-gold tracking-widest uppercase mb-6"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Party Resources
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consumables.map(group => (
            <div
              key={group.title}
              className="bg-bg-panel border border-accent-gold/20 rounded-sm p-6"
              style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
            >
              <h3
                className="text-sm font-bold text-parchment tracking-wide mb-4 pb-3 border-b border-accent-gold/15"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map(item => (
                  <li key={item.name} className="flex gap-3">
                    <span
                      className="font-semibold italic text-parchment-dark flex-shrink-0"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', minWidth: '120px' }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="text-parchment-dark/60"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.95rem' }}
                    >
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Homebrew rules */}
          <div
            className="bg-bg-panel border border-accent-gold/20 rounded-sm p-6 lg:col-span-2"
            style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
          >
            <h3
              className="text-sm font-bold text-parchment tracking-wide mb-4 pb-3 border-b border-accent-gold/15"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Homebrew Rules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {homebrewRules.map(rule => (
                <div key={rule.title}>
                  <h4
                    className="font-bold italic text-parchment-dark mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
                  >
                    {rule.title}
                  </h4>
                  <p
                    className="text-parchment-dark/60 text-sm leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
