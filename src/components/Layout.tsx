import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './Nav';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer className="border-t border-accent-gold/15 py-6 px-4 text-center">
        <p className="text-ink-muted text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          A D&amp;D Campaign Run by Andrew Kozikowski
        </p>
        <p className="text-ink-muted/60 text-xs mt-1 tracking-wide">
          Players: Corrine Carpenter &nbsp;·&nbsp; Jameson Carpenter &nbsp;·&nbsp; Latasha Kozikowski &nbsp;·&nbsp; Callum McLean &nbsp;·&nbsp; Eden Zheng
        </p>
      </footer>
    </div>
  );
}
