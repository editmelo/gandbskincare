interface SectionHeaderProps {
  kicker: string;
  headline: string;
  accentWord: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({ kicker, headline, accentWord, dark = false, centered = true }: SectionHeaderProps) {
  const parts = headline.split(accentWord);
  return (
    <div className={centered ? "text-center mb-10" : "mb-10"}>
      <p className="kicker">{kicker}</p>
      <h2 className={`font-display text-3xl md:text-4xl ${dark ? "text-cream" : "text-deep-bronze"}`}>
        {parts[0]}
        <span className="text-warm-gold italic">{accentWord}</span>
        {parts[1] || ""}
      </h2>
    </div>
  );
}
