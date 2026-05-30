import type { ReactNode } from 'react';

interface HeroProps {
  title: string;
  tagline?: string;
  children?: ReactNode;
}

export default function Hero({ title, tagline, children }: HeroProps) {
  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blood/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-accent-violet/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {tagline && (
          <p
            className="text-accent-gold/70 text-sm tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic' }}
          >
            {tagline}
          </p>
        )}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-parchment tracking-wide leading-tight"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {title}
        </h1>
        {children && (
          <div className="mt-8 text-parchment-dark/80 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
