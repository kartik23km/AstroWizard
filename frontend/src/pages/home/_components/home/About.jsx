import React from "react";
import {
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: <UsersIcon className="size-5 text-gold" />,
    value: "10M+",
    label: "Happy Users",
  },
  {
    icon: <SparklesIcon className="size-5 text-violet-glow" />,
    value: "500+",
    label: "Expert Astrologers",
  },
  {
    icon: <GlobeAltIcon className="size-5 text-gold" />,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: <ShieldCheckIcon className="size-5 text-violet-glow" />,
    value: "100%",
    label: "Private & Secure",
  },
];

const About = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 my-16">
      <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-dark-surface/30 backdrop-blur-md">
        {/* Subtle ambient glow behind the card */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-glow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center px-8 py-12 md:px-14 md:py-16">
            <span className="font-semibold text-xs md:text-sm text-gold tracking-[0.25em] uppercase mb-4 block">
              ✦ Who We Are ✦
            </span>
            <h2 className="font-Cinzel text-3xl md:text-4xl font-bold text-soft-white mb-5 leading-tight">
              AstroWizard &mdash;{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-glow to-gold">
                Ancient Wisdom,
              </span>{" "}
              Modern Clarity
            </h2>
            <p className="text-light-gray/80 text-sm md:text-base leading-relaxed mb-5 font-light">
              Founded with a passion for Vedic traditions and cosmic sciences,{" "}
              <strong className="text-soft-white font-medium">
                AstroWizard
              </strong>{" "}
              connects seekers with India&apos;s most trusted astrologers — all
              under one constellation.
            </p>
            <p className="text-light-gray/60 text-sm leading-relaxed font-light">
              Whether you&apos;re navigating career choices, relationships, or
              simply seeking your life&apos;s purpose, our certified experts
              deliver guidance grounded in centuries of astrological study.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-glow hover:text-gold transition-colors duration-300 group"
              >
                Learn more about us
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-white/5" />

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5 lg:rounded-r-3xl overflow-hidden">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center gap-3 bg-dark-surface/50 hover:bg-violet-glow/5 transition-colors duration-300 p-8 text-center"
              >
                <div className="size-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-violet-glow/30 group-hover:bg-violet-glow/10 transition-all duration-300">
                  {stat.icon}
                </div>
                <span className="font-Cinzel text-2xl md:text-3xl font-bold text-soft-white group-hover:text-gold transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-light-gray/50 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
