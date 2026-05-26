export default function Services() {
  const services = [
  {
    icon: "🪔",
    title: "Kundli Analysis",
    description:
      "Get detailed insights into your career, marriage, health, finance, and future through personalised birth chart analysis by expert astrologers.",
    price: "₹999",
    popular: true,
  },

  {
    icon: "📿",
    title: "Daily Rashifal & Horoscope",
    description:
      "Receive accurate daily horoscope guidance, planetary updates, shubh muhurat, and practical remedies for everyday life decisions.",
    price: "₹499",
    popular: false,
  },

  {
    icon: "💑",
    title: "Kundli Matching",
    description:
      "Check marriage compatibility, guna milan, relationship harmony, and long-term compatibility through traditional Vedic matchmaking.",
    price: "₹1499",
    popular: false,
  },

  {
    icon: "🔮",
    title: "Tarot & Numerology Guidance",
    description:
      "Find clarity in love, career, business, and personal life through tarot card reading and numerology consultation sessions.",
    price: "₹699",
    popular: false,
  },
];

  return (
    <div className="min-h-screen bg-transparent text-soft-white flex flex-col">
  <main className="grow max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center">
    <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
      <span className="text-gold uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
        Astrology Services
      </span>

      <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-violet-glow via-mystic-pink to-gold bg-clip-text text-transparent leading-tight">
        Trusted Guidance For Every Phase Of Life
      </h1>

      <p className="text-light-gray text-lg md:text-xl leading-relaxed">
        Consult experienced astrologers for kundli reading, marriage matching,
        career guidance, numerology, tarot, vastu, and personalised astrology
        solutions.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {services.map((svc, i) => (
        <div
          key={i}
          className={`bg-dark-surface border rounded-3xl p-8 hover:border-violet-glow transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
            svc.popular
              ? "border-violet-glow/80 ring-2 ring-violet-glow/20"
              : "border-muted-gray/30"
          }`}
        >
          {svc.popular && (
            <div className="absolute top-4 right-4 bg-linear-to-r from-violet-glow to-mystic-pink text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full text-white">
              Most Booked
            </div>
          )}

          <div className="space-y-4">
            <span className="text-4xl block">{svc.icon}</span>

            <h3 className="text-2xl font-bold text-soft-white group-hover:text-violet-glow transition-colors duration-300">
              {svc.title}
            </h3>

            <p className="text-light-gray leading-relaxed text-sm">
              {svc.description}
            </p>
          </div>

          <div className="mt-8 flex justify-between items-center pt-6 border-t border-muted-gray/20">
            <div>
              <span className="text-xs text-light-gray block">
                Consultation Fee
              </span>

              <span className="text-2xl font-bold text-gold">
                {svc.price}
              </span>
            </div>

            <button
              className={`cursor-pointer px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                svc.popular
                  ? "bg-violet-glow text-white hover:bg-violet-glow/90 shadow-lg shadow-violet-glow/20"
                  : "border border-muted-gray hover:border-soft-white hover:bg-muted-gray/20"
              }`}
            >
              Book Consultation
            </button>
          </div>
        </div>
      ))}
    </div>
  </main>
</div>
  );
}
