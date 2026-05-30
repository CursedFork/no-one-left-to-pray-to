export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 my-8 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-accent-gold/20" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent-gold/50 flex-shrink-0">
        <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" fillOpacity="0.6" />
        <path d="M12 6L13.5 10.5H18L14.5 13L16 17.5L12 15L8 17.5L9.5 13L6 10.5H10.5L12 6Z" fill="currentColor" />
      </svg>
      <div className="flex-1 h-px bg-accent-gold/20" />
    </div>
  );
}
