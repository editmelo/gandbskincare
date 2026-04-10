import Link from "next/link";
import { regimenProducts } from "@/data/products";

interface RegimenFlowProps {
  highlightStep?: string;
  dark?: boolean;
}

export function RegimenFlow({ highlightStep, dark = false }: RegimenFlowProps) {
  return (
    <div className="flex items-start gap-2 md:gap-4 justify-center overflow-x-auto pb-4">
      {regimenProducts.map((item, i) => {
        const isHighlighted = highlightStep === item.step;
        return (
          <div key={item.step} className="flex items-start gap-2 md:gap-4">
            <Link href={`/product/${item.product.slug}`} className="group block">
              <div className={`text-center rounded-2xl p-4 md:p-5 transition-all duration-300 w-28 md:w-36 ${
                dark
                  ? "hover:bg-warm-gold/10"
                  : isHighlighted
                    ? "bg-warm-gold/10 border-2 border-warm-gold shadow-lg shadow-warm-gold/10"
                    : "bg-white border border-warm-gold/15 shadow-sm hover:shadow-md hover:shadow-warm-gold/10"
              }`}>
                <div className="w-9 h-9 rounded-full bg-warm-gold text-white font-bold flex items-center justify-center font-display text-base mx-auto mb-3">
                  {i + 1}
                </div>
                <div className={`w-12 h-16 rounded-[14px_14px_6px_6px] mx-auto mb-2 ${
                  dark ? "bg-warm-gold/10 border border-warm-gold/20" : "bg-gradient-to-b from-light-beige to-cream border border-warm-gold/20"
                }`} />
                <p className="kicker !mb-1">{item.label}</p>
                <p className={`font-display text-xs ${dark ? "text-cream" : "text-deep-bronze"}`}>
                  {item.product.name.replace("Glow Cleansing Bar", "Glow Bar").replace("Nourish Moisturizing Oil", "Nourish Oil").replace("Rose Water Toner", "Rose Toner")}
                </p>
                <p className="text-[10px] font-body mt-0.5 text-warm-gold">
                  ${item.product.price.toFixed(2)}
                </p>
              </div>
            </Link>
            {i < regimenProducts.length - 1 && (
              <div className="flex items-center self-center pt-4 text-warm-gold/40 text-xl">→</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
