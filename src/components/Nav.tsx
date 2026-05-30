import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/world', label: 'World' },
  { to: '/characters', label: 'Party' },
  { to: '/sessions', label: 'Sessions' },
  { to: '/bestiary', label: 'Bestiary' },
  { to: '/items', label: 'Items' },
  { to: '/maps', label: 'Maps' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-widest uppercase transition-colors duration-150 ${
      isActive
        ? 'text-accent-gold'
        : 'text-parchment-dark hover:text-accent-gold'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-bg-base/95 backdrop-blur-sm border-b border-accent-gold/15">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link
          to="/"
          className="font-display text-accent-gold tracking-widest text-lg hover:text-accent-gold/80 transition-colors"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          No One Left to Pray To
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-parchment-dark hover:text-accent-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-panel border-t border-accent-gold/15">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
