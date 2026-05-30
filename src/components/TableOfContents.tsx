import { useEffect, useState } from 'react';

interface TocEntry {
  id: string;
  heading: string;
}

interface TableOfContentsProps {
  entries: TocEntry[];
}

export default function TableOfContents({ entries }: TableOfContentsProps) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionMap = new Map<string, boolean>();

    entries.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionMap.set(id, entry.isIntersecting);
          const firstVisible = entries.find(e => sectionMap.get(e.id));
          if (firstVisible) setActive(firstVisible.id);
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [entries]);

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <nav
        className="sticky top-24 border-l border-accent-gold/20 pl-4"
        aria-label="Table of contents"
      >
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-4"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Contents
        </p>
        <ul className="space-y-2">
          {entries.map(({ id, heading }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-xs leading-snug transition-colors duration-150 ${
                  active === id
                    ? 'text-accent-gold'
                    : 'text-parchment-dark/50 hover:text-parchment-dark'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
