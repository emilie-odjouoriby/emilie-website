interface BulletListProps {
  items: readonly string[];
  className?: string;
}

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-encre/80">
          <span aria-hidden className="mt-1 shrink-0 text-corail">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
