import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BookOpen, Skull } from 'lucide-react';
import Divider from '../components/Divider';
import { sessions } from '../data/sessions';

const entryPoints = [
  {
    to: '/world',
    icon: Globe,
    title: 'The World',
    desc: 'Aethernox — its lands, faiths, and the strain beneath.',
  },
  {
    to: '/characters',
    icon: Users,
    title: 'The Party',
    desc: 'Five individuals bound by consequence, not loyalty.',
  },
  {
    to: '/sessions',
    icon: BookOpen,
    title: 'Session Recaps',
    desc: 'A chronicle of what has been done and cannot be undone.',
  },
  {
    to: '/bestiary',
    icon: Skull,
    title: 'The Bestiary',
    desc: 'The gods and creatures encountered on the deicidal road.',
  },
];

export default function Home() {
  const latest = sessions[sessions.length - 1];

  useEffect(() => {
    document.title = 'No One Left to Pray To';
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blood/8 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-violet/4 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <p
            className="text-accent-gold/60 text-sm tracking-widest uppercase mb-6 italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            A world held together by something that may not last.
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold text-parchment tracking-wide leading-none mb-8"
            style={{ fontFamily: "'Cinzel', Georgia, serif", textShadow: '0 2px 30px rgba(139,30,30,0.3)' }}
          >
            No One Left<br />to Pray To
          </h1>

          <Divider />

          <p
            className="text-parchment-dark/75 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem' }}
          >
            Aethernox looks like a normal fantasy world. The gods still exist. Magic still works.
            Life goes on. Yet something is wrong — not dramatically, not with fire in the sky
            and rivers of blood, but quietly. Persistently. In the spaces between answered prayers
            and the margins of maps that no longer quite match the territory. The Weave is unraveling.
            The gods are dying. A party of five has had a hand in both.
          </p>
        </motion.div>
      </section>

      {/* Entry point cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entryPoints.map(({ to, icon: Icon, title, desc }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            >
              <Link
                to={to}
                className="block bg-bg-panel border border-accent-gold/20 rounded-sm p-6 hover:border-accent-gold/50 transition-colors duration-200 group h-full"
                style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
              >
                <Icon size={22} className="text-accent-gold/50 mb-4 group-hover:text-accent-gold/80 transition-colors" />
                <h2
                  className="text-base font-bold text-parchment tracking-wide mb-2 group-hover:text-accent-gold transition-colors"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm text-parchment-dark/60 leading-relaxed italic"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest session callout */}
      {latest && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="border-t border-accent-gold/15 pt-8">
            <p
              className="text-xs tracking-widest uppercase text-parchment-dark/40 mb-4"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              Latest Session
            </p>
            <Link
              to={`/sessions/${latest.slug}`}
              className="block bg-bg-panel/60 border border-accent-gold/15 rounded-sm p-6 hover:border-accent-gold/35 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h2
                  className="text-xl font-bold text-parchment tracking-wide group-hover:text-accent-gold transition-colors"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {latest.title}
                </h2>
                <time className="text-xs text-parchment-dark/40 tracking-widest uppercase flex-shrink-0">
                  {latest.date}
                </time>
              </div>
              <p
                className="text-parchment-dark/65 italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
              >
                {latest.teaser}
              </p>
              <span className="mt-3 inline-block text-xs tracking-widest uppercase text-accent-gold/40 group-hover:text-accent-gold/70 transition-colors">
                Read recap →
              </span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
