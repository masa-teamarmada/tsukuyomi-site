import Link from "next/link";

type PricingCardProps = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  highlight = false,
}: PricingCardProps) {
  return (
    <div
      className={`hex-card p-6 sm:p-8 flex flex-col ${
        highlight ? "border-accent-blue ring-1 ring-accent-blue/30" : ""
      }`}
    >
      {highlight && (
        <span className="text-xs text-accent-blue font-bold tracking-widest mb-2">
          POPULAR
        </span>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="text-sm text-muted">{period}</span>}
      </div>
      <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="text-accent-gold mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-8 block text-center rounded-lg py-3 font-semibold transition-all ${
          highlight
            ? "bg-accent-blue text-white hover:bg-accent-blue/90"
            : "border border-card-border text-foreground hover:border-accent-blue hover:text-accent-blue"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
