export default function About() {
  return (
   <div className="min-h-screen bg-transparent text-soft-white flex flex-col">
  <main className="grow max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center">
    <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
      <span className="text-gold uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
        About AstroWizard
      </span>

      <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-violet-glow via-mystic-pink to-gold bg-clip-text text-transparent leading-tight">
        Trusted Indian Astrology For Modern Life
      </h1>

      <p className="text-light-gray text-lg md:text-xl leading-relaxed">
        AstroWizard brings together experienced astrologers from across India
        to help people find clarity in career, marriage, relationships,
        business, health, and everyday life through authentic Vedic astrology.
      </p>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {[
        {
          value: "25K+",
          label: "Kundlis Analysed",
          desc: "Detailed horoscope readings and personalised guidance sessions.",
        },

        {
          value: "4.9★",
          label: "User Satisfaction",
          desc: "Trusted by users across India for genuine astrology consultation.",
        },

        {
          value: "50+",
          label: "Verified Astrologers",
          desc: "Experts in Vedic astrology, numerology, vastu, tarot, and more.",
        },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-dark-surface border border-muted-gray/30 rounded-2xl p-8 hover:border-violet-glow/50 transition-all duration-300 relative group overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-violet-glow/5 rounded-full blur-2xl group-hover:bg-violet-glow/10 transition-all duration-500"></div>

          <div className="text-4xl md:text-5xl font-extrabold text-violet-glow mb-2">
            {stat.value}
          </div>

          <div className="text-lg font-semibold text-soft-white mb-2">
            {stat.label}
          </div>

          <div className="text-sm text-light-gray">
            {stat.desc}
          </div>
        </div>
      ))}
    </div>

    {/* Story Section */}
    <div className="bg-dark-surface/50 border border-muted-gray/20 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-soft-white">
          Rooted In Vedic Wisdom & Indian Traditions
        </h2>

        <p className="text-light-gray leading-relaxed">
          AstroWizard was created with the vision of making authentic Indian
          astrology more accessible in today’s digital world. Our platform
          connects users with trusted astrologers who specialize in kundli
          reading, marriage matching, numerology, vastu, palmistry, and
          spiritual guidance.
        </p>

        <p className="text-light-gray leading-relaxed">
          Whether you are facing confusion in career, delays in marriage,
          relationship challenges, financial problems, or simply looking for
          spiritual direction, our experts provide practical guidance backed by
          years of astrological experience.
        </p>
      </div>

      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-linear-to-br from-royal-indigo to-space-dark flex items-center justify-center border border-muted-gray/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)] animate-pulse"></div>

        <div className="text-center p-6 space-y-2 z-10">
          <span className="text-4xl">🪔</span>

          <h3 className="text-xl font-bold text-gold">
            Guidance Through Ancient Wisdom
          </h3>

          <p className="text-xs text-light-gray max-w-xs">
            "Vedic astrology is not just prediction — it is guidance to help
            you make better decisions in life."
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
  );
}
