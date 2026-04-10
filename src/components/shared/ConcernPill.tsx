interface ConcernPillProps {
  label: string;
  dark?: boolean;
  active?: boolean;
  onClick?: () => void;
  removable?: boolean;
}

export function ConcernPill({ label, dark = false, active = false, onClick, removable = false }: ConcernPillProps) {
  const baseClasses = "inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-body font-medium transition-all duration-200 cursor-pointer";
  const colorClasses = active
    ? "bg-warm-gold text-white"
    : dark
      ? "border border-warm-gold/40 text-warm-gold hover:bg-warm-gold/15"
      : "border-[1.5px] border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white";

  return (
    <button className={`${baseClasses} ${colorClasses}`} onClick={onClick}>
      {label}
      {removable && <span className="ml-1 text-sm leading-none">&times;</span>}
    </button>
  );
}
