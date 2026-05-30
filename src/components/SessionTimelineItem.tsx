import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Session } from '../types';

interface SessionTimelineItemProps {
  session: Session;
  index: number;
}

export default function SessionTimelineItem({ session, index }: SessionTimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="relative flex gap-6 sm:gap-10"
    >
      {/* Date column */}
      <div className="flex flex-col items-center flex-shrink-0 w-20 sm:w-28">
        <div className="w-3 h-3 rounded-full bg-accent-gold/60 mt-1.5 flex-shrink-0 ring-4 ring-bg-base" />
        <div className="flex-1 w-px bg-accent-gold/15 mt-2" />
      </div>

      {/* Card */}
      <div className="pb-10 flex-1 min-w-0">
        <time
          className="block text-xs text-parchment-dark/50 tracking-widest uppercase mb-3"
          dateTime={session.date}
        >
          {session.date}
        </time>
        <Link
          to={`/sessions/${session.slug}`}
          className="block group"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="bg-bg-panel border border-accent-gold/20 rounded-sm p-5 sm:p-6 hover:border-accent-gold/40 transition-colors duration-200"
            style={{ boxShadow: '0 2px 12px rgba(26,20,16,0.4)' }}
          >
            <h2
              className="text-xl font-bold text-parchment tracking-wide mb-2 group-hover:text-accent-gold transition-colors duration-200"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {session.title}
            </h2>
            <p
              className="text-parchment-dark/70 leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem' }}
            >
              {session.teaser}
            </p>
            <span className="mt-4 inline-block text-xs tracking-widest uppercase text-accent-gold/50 group-hover:text-accent-gold transition-colors duration-200">
              Read recap →
            </span>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
