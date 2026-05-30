export default function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-parchment-dark border border-parchment-dark/20 bg-parchment-dark/5 tracking-wide">
      {tag}
    </span>
  );
}
