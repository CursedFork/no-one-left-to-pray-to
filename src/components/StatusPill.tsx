import type { BestiaryStatus } from '../types';

const config: Record<BestiaryStatus, { label: string; classes: string }> = {
  Active: { label: 'Active', classes: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50' },
  Slain: { label: 'Slain', classes: 'bg-accent-blood/30 text-red-300 border-accent-blood/50' },
  'Bargained With': { label: 'Bargained', classes: 'bg-accent-gold/20 text-accent-gold border-accent-gold/40' },
  Erased: { label: 'Erased', classes: 'bg-accent-violet/20 text-violet-300 border-accent-violet/40' },
};

export default function StatusPill({ status }: { status: BestiaryStatus }) {
  const { label, classes } = config[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase ${classes}`}>
      {label}
    </span>
  );
}
