import { useEffect } from 'react';
import Divider from '../components/Divider';
import SessionTimelineItem from '../components/SessionTimelineItem';
import { sessions } from '../data/sessions';

export default function Sessions() {
  useEffect(() => {
    document.title = 'Session Recaps — No One Left to Pray To';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-4">
        <p
          className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          A Chronicle of Events
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-parchment tracking-wide"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          Session Recaps
        </h1>
      </header>

      <Divider />

      <div className="mt-4">
        {sessions.map((session, i) => (
          <SessionTimelineItem key={session.slug} session={session} index={i} />
        ))}
      </div>
    </div>
  );
}
