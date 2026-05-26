import Header from "@/pages/home/_components/header/header";

export default function Services() {
  const services = [
    {
      icon: "✨",
      title: "Natal Chart Analysis",
      description:
        "A comprehensive map of the sky at the exact moment of your birth. Discover your strengths, challenges, and life's primary purpose.",
      price: "$89",
      popular: true,
    },
    {
      icon: "🌓",
      title: "Transit & Progressions",
      description:
        "Understand the current planetary energies affecting your life. Perfect for planning major life transitions and career moves.",
      price: "$59",
      popular: false,
    },
    {
      icon: "💞",
      title: "Synastry (Compatibility)",
      description:
        "Compare two birth charts to understand the cosmic chemistry, communication styles, and karmic bonds between you and a partner.",
      price: "$119",
      popular: false,
    },
    {
      icon: "🔮",
      title: "Tarot & Oracle Guidance",
      description:
        "Find clarity on immediate questions using a blend of traditional Rider-Waite symbolism and intuitive cosmic channeling.",
      price: "$45",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-soft-white flex flex-col">
      <main className="grow max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
            Celestial Offerings
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-violet-glow via-mystic-pink to-gold bg-clip-text text-transparent leading-tight">
            Consult the Stars
          </h1>
          <p className="text-light-gray text-lg md:text-xl leading-relaxed">
            Choose from our specialized cosmic readings designed to bring
            clarity, validation, and astronomical insight into your daily life.
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
                  Most Popular
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
                    Energy Exchange
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
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
