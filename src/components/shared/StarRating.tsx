interface StarRatingProps {
  rating: number;
  count?: number;
  dark?: boolean;
}

export function StarRating({ rating, count, dark = false }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5 text-warm-gold text-sm">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < fullStars ? "opacity-100" : i === fullStars && hasHalf ? "opacity-60" : "opacity-20"}>
            ★
          </span>
        ))}
      </div>
      {count !== undefined && (
        <span className={`text-xs font-body ${dark ? "text-soft-taupe" : "text-deep-bronze/50"}`}>
          ({count})
        </span>
      )}
    </div>
  );
}
