import { SectionHeader } from "@/components/shared/SectionHeader";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="kicker">Meet the Founder</p>
          <h1 className="font-display text-4xl md:text-5xl text-deep-bronze mt-2">Bryanne Buckhalter</h1>
          <p className="font-body text-sm text-deep-bronze/50 mt-2">Founder &amp; Skincare Specialist</p>
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-warm-gold/20 to-warm-gold/5 border-2 border-warm-gold/30 mx-auto mt-8 flex items-center justify-center">
            <span className="font-display text-3xl text-warm-gold/40">B</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 font-body text-base text-deep-bronze/80 leading-relaxed">
            <p>G&amp;B Natural Skincare was born out of frustration — and love. For years, Bryanne searched for skincare products that actually worked without harsh chemicals, artificial fragrances, or ingredients she couldn&apos;t pronounce. Everything was either too expensive, too complicated, or simply didn&apos;t deliver.</p>
            <p>So she started making her own. What began as kitchen experiments with turmeric, honey, and oils from her grandmother&apos;s recipes turned into something much bigger — a skincare line that actually worked, and a community of people who finally felt seen.</p>
            <blockquote className="border-l-4 border-warm-gold pl-6 py-2 my-8">
              <p className="font-display text-xl text-deep-bronze italic leading-relaxed">&ldquo;Every product is thoughtfully crafted with natural ingredients designed to support your skin — not work against it.&rdquo;</p>
              <cite className="font-body text-sm text-warm-gold mt-2 block not-italic">— Bryanne</cite>
            </blockquote>
            <p>Today, G&amp;B is more than just skincare — it&apos;s an experience. From pop-up events where Bryanne personally consults on skin concerns, to facial services that combine expertise with warmth, everything about G&amp;B is designed to make you feel confident in your own skin.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader kicker="What we stand for" headline="Built on three pillars" accentWord="three pillars" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "✦", title: "Confidence", text: "We believe glowing skin changes how you carry yourself. Our products don't just treat — they transform how you see yourself." },
              { icon: "♡", title: "Self-Love", text: "Skincare is an act of self-love, not vanity. Every ritual with G&B is a moment to invest in yourself and honor your body." },
              { icon: "◎", title: "Wellness", text: "Healthy skin starts from the inside out. We use natural ingredients because what you put on your body matters as much as what you put in it." },
            ].map(pillar => (
              <div key={pillar.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-gold/10 mx-auto mb-4 flex items-center justify-center text-2xl text-warm-gold">{pillar.icon}</div>
                <h3 className="font-display text-xl text-deep-bronze mb-2">{pillar.title}</h3>
                <p className="font-body text-sm text-deep-bronze/60 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader kicker="Our philosophy" headline="What natural means to us" accentWord="natural" />
          <div className="space-y-4 font-body text-base text-deep-bronze/80 leading-relaxed">
            <p>&ldquo;Natural&rdquo; gets thrown around a lot in skincare. At G&amp;B, it means something specific: every ingredient has a purpose, and that purpose is to nourish — not just to fill a label.</p>
            <p>We don&apos;t use parabens, sulfates, artificial fragrances, or dyes. But more than what we leave out, it&apos;s about what we put in: turmeric from trusted suppliers, raw honey with real antibacterial properties, oils that your skin recognizes and absorbs.</p>
            <p>When Bryanne formulates a new product, she asks one question: &ldquo;Would I put this on my own skin?&rdquo; If the answer isn&apos;t an immediate yes, it doesn&apos;t make the cut.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader kicker="Beyond products" headline="Rooted in community" accentWord="community" />
          <div className="max-w-3xl mx-auto font-body text-base text-deep-bronze/80 leading-relaxed space-y-4">
            <p>G&amp;B isn&apos;t just a brand you buy from — it&apos;s a community you belong to. Bryanne regularly hosts pop-up events where she meets customers face-to-face, offers personalized skin consultations, and creates a space where self-care feels accessible, not exclusive.</p>
            <p>Through facial services, workshops, and community outreach, G&amp;B is actively educating people about skincare, hygiene, and the power of natural ingredients. Because everyone deserves to understand their skin.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square rounded-xl bg-light-beige border border-warm-gold/10 flex items-center justify-center">
                <span className="text-warm-gold/20 text-3xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-4xl text-cream italic leading-relaxed">&ldquo;Your glow is always worth investing in.&rdquo;</p>
          <p className="font-body text-sm text-warm-gold mt-4">— Bryanne, Founder</p>
        </div>
      </section>
    </>
  );
}
