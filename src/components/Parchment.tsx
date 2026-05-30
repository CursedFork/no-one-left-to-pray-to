import type { ReactNode, ElementType } from 'react';

interface ParchmentProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Parchment({ children, className = '', as: Tag = 'div' }: ParchmentProps) {
  return (
    <Tag
      className={`relative bg-parchment text-ink rounded-sm border border-accent-gold/20 shadow-inner parchment-grain ${className}`}
      style={{ boxShadow: 'inset 0 1px 3px rgba(26,20,16,0.15), 0 2px 8px rgba(26,20,16,0.4)' }}
    >
      {children}
    </Tag>
  );
}
