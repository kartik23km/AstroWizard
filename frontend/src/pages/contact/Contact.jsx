import Header from "@/pages/home/_components/header/header";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cosmic message sent! The alignment is favorable.");
  };

  return (
    <div className="min-h-screen bg-transparent text-soft-white flex flex-col">
      <main className="grow max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center w-full">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
            Let's get connected
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-violet-glow via-mystic-pink to-gold bg-clip-text text-transparent leading-tight">
            Reach out to us
          </h1>
          <p className="text-light-gray text-lg md:text-xl leading-relaxed">
            Have questions about your birth chart, zodiac guidance, spiritual
            journey, or upcoming cosmic energies? Reach out to us and let the
            universe guide your path.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto w-full">
          {/* Info Card */}
          <div className="lg:col-span-2 space-y-8 bg-dark-surface border border-muted-gray/30 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-44 h-44 bg-mystic-pink/5 rounded-full blur-3xl"></div>

            <div>
              <h3 className="text-xl font-bold text-soft-white mb-2">
                Locations
              </h3>
              <p className="text-sm text-light-gray leading-relaxed">
                AstroWizard Headquarters
                <br />
                Orion's Belt, Sector 4<br />
                Milky Way Galaxy
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-soft-white mb-2">Email</h3>
              <p className="text-sm text-light-gray">
                oracle@astrowizard.com
                <br />
                support@astrowizard.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-soft-white mb-2">
                Contact Number
              </h3>
              <p className="text-sm text-light-gray">
                1234
                <br />
                1234
              </p>
            </div>

            <div className="pt-4 border-t border-muted-gray/20">
              <span className="text-xs text-gold uppercase tracking-wider block mb-2 font-semibold">
                Active Hours
              </span>
              <p className="text-sm text-light-gray">
                Always open to the celestial sphere. Support monitored during
                solar transit (9:00 AM – 5:00 PM EST).
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-dark-surface/40 border border-muted-gray/20 rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-xs uppercase tracking-wider text-light-gray mb-2 font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Orion Star"
                  className="w-full bg-space-dark border border-muted-gray/40 rounded-xl px-4 py-3 text-soft-white placeholder-muted-gray focus:outline-none focus:border-violet-glow focus:ring-2 focus:ring-violet-glow/20 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  className="block text-xs uppercase tracking-wider text-light-gray mb-2 font-semibold"
                  htmlFor="email"
                >
                  Stellar Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. orion@constellation.com"
                  className="w-full bg-space-dark border border-muted-gray/40 rounded-xl px-4 py-3 text-soft-white placeholder-muted-gray focus:outline-none focus:border-violet-glow focus:ring-2 focus:ring-violet-glow/20 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs uppercase tracking-wider text-light-gray mb-2 font-semibold"
                htmlFor="subject"
              >
                Cosmic Intent
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="e.g. Natal Reading Inquiry"
                className="w-full bg-space-dark border border-muted-gray/40 rounded-xl px-4 py-3 text-soft-white placeholder-muted-gray focus:outline-none focus:border-violet-glow focus:ring-2 focus:ring-violet-glow/20 transition-all duration-300"
              />
            </div>

            <div>
              <label
                className="block text-xs uppercase tracking-wider text-light-gray mb-2 font-semibold"
                htmlFor="message"
              >
                Your Message to the Stars
              </label>
              <textarea
                id="message"
                required
                rows="4"
                placeholder="State your query, question, or energetic intent..."
                className="w-full bg-space-dark border border-muted-gray/40 rounded-xl px-4 py-3 text-soft-white placeholder-muted-gray focus:outline-none focus:border-violet-glow focus:ring-2 focus:ring-violet-glow/20 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-linear-to-r from-violet-glow via-mystic-pink to-gold text-white font-bold py-4 px-6 rounded-xl hover:opacity-95 shadow-lg shadow-violet-glow/20 transition-all duration-300"
            >
              Send Cosmic Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
