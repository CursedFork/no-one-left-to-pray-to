import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { sessions } from '../data/sessions';
import SessionDetail from '../components/SessionDetail';

export default function SessionPage() {
  const { slug } = useParams<{ slug: string }>();
  const session = sessions.find(s => s.slug === slug);

  useEffect(() => {
    if (session) {
      document.title = `${session.title} — No One Left to Pray To`;
    }
  }, [session]);

  if (!session) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-parchment-dark/50 text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          This session has not yet been recorded.
        </p>
        <Link to="/sessions" className="mt-6 inline-block text-xs tracking-widest uppercase text-accent-gold/60 hover:text-accent-gold">
          ← Return to the chronicle
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/sessions"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-parchment-dark/50 hover:text-accent-gold transition-colors"
        >
          <ArrowLeft size={12} /> All Sessions
        </Link>
      </div>
      <SessionDetail session={session} />
    </div>
  );
}
