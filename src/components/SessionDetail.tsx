import React from 'react';
import type { Session } from '../types';
import Parchment from './Parchment';
import Divider from './Divider';

interface SessionDetailProps {
  session: Session;
}

function renderBody(body: string) {
  const parts = body.split('\n\n').filter(Boolean);
  const elements: React.ReactElement[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    // Detect blockquote: lines starting with >
    if (part.startsWith('>')) {
      const text = part.replace(/^>\s*/gm, '').trim();
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-accent-blood/60 pl-5 my-6 italic text-ink-muted"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem' }}
        >
          {text}
        </blockquote>
      );
    } else {
      elements.push(
        <p
          key={i}
          className={`mb-5 last:mb-0 leading-relaxed text-ink ${i === 0 ? 'drop-cap' : ''}`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem' }}
        >
          {part}
        </p>
      );
    }
  }

  return elements;
}

export default function SessionDetail({ session }: SessionDetailProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        <time
          className="block text-xs text-parchment-dark/50 tracking-widest uppercase mb-4"
          dateTime={session.date}
        >
          {session.date}
        </time>
        <h1
          className="text-3xl sm:text-4xl font-bold text-parchment tracking-wide mb-4"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {session.title}
        </h1>
        <p
          className="text-lg italic text-accent-gold/70 max-w-xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {session.teaser}
        </p>
      </header>

      <Divider />

      {/* Leatherbound journal parchment */}
      <Parchment className="p-8 sm:p-12">
        <div className="relative">
          {/* Stitching effect at top */}
          <div className="flex gap-2 justify-center mb-8 opacity-30" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-4 h-0.5 bg-ink-muted rounded-full" />
            ))}
          </div>
          {renderBody(session.body)}
        </div>
      </Parchment>
    </article>
  );
}
