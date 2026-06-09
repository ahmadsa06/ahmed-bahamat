import { Star } from "lucide-react";

/** Rating stars — stay amber (design-system: the one functional color exception). */
export default function Stars({ rating, count = 5 }: { rating: number; count?: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of ${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 text-rating"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          aria-hidden
        />
      ))}
    </div>
  );
}
