import React from "react";
import Button from "@/components/atoms/button";
import { ChatBubbleLeftRightIcon, StarIcon } from "@heroicons/react/24/outline";

const astrologersData = [
  {
    id: 1,
    name: "Acharya Shastri",
    specialties: ["Vedic Astrology", "Kundli", "Career"],
    experience: "15+ Yrs",
    rating: "4.9",
    consultations: "18,400+",
    price: "$1.50/min",
    isOnline: true,
    avatarGradient: "from-amber-400 via-orange-500 to-red-600",
  },
  {
    id: 2,
    name: "Tarot Reader Priya",
    specialties: ["Tarot Cards", "Love & Relationships"],
    experience: "8+ Yrs",
    rating: "4.8",
    consultations: "9,600+",
    price: "$1.20/min",
    isOnline: true,
    avatarGradient: "from-purple-500 via-indigo-500 to-pink-500",
  },
  {
    id: 3,
    name: "Numerologist Vikram",
    specialties: ["Numerology", "Vastu", "Finance"],
    experience: "12+ Yrs",
    rating: "4.9",
    consultations: "12,100+",
    price: "$1.40/min",
    isOnline: false,
    avatarGradient: "from-teal-400 via-emerald-500 to-blue-600",
  },
  {
    id: 4,
    name: "Astro Elena",
    specialties: ["Western Astrology", "Spiritual Healing"],
    experience: "10+ Yrs",
    rating: "4.7",
    consultations: "8,500+",
    price: "$1.30/min",
    isOnline: true,
    avatarGradient: "from-pink-400 via-rose-500 to-purple-600",
  },
];

const OurAstrologers = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 my-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="font-semibold text-xs md:text-sm text-gold tracking-[0.25em] uppercase mb-3 block">
          ✦ Expert Guides ✦
        </span>
        <h2 className="font-Cinzel text-3xl md:text-4xl lg:text-4xl font-bold text-soft-white mb-4">
          Meet Our Cosmic Guides
        </h2>
        <p className="text-light-gray/80 text-sm md:text-base max-w-xl mx-auto font-light">
          Consult with our certified, top-rated astrologers to align your path
          and unlock clarity.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {astrologersData.map((astrologer) => (
          <div
            key={astrologer.id}
            className="group relative rounded-3xl bg-dark-surface/40 backdrop-blur-md border border-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(109,40,217,0.2)] hover:border-violet-glow/30"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-transparent to-violet-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Avatar & Online Badge */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div
                className={`w-full h-full rounded-full bg-linear-to-tr ${astrologer.avatarGradient} flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center overflow-hidden">
                  {/* Decorative Initials */}
                  <span className="text-xl font-Cinzel font-bold text-soft-white group-hover:text-gold transition-colors duration-300">
                    {astrologer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              {/* Online Status Dot */}
              <span
                className={`absolute bottom-1 right-1 size-4 rounded-full border-2 border-dark-surface ${
                  astrologer.isOnline
                    ? "bg-emerald-500 animate-pulse"
                    : "bg-slate-500"
                }`}
                title={astrologer.isOnline ? "Online" : "Offline"}
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="font-Cinzel text-lg font-bold text-soft-white group-hover:text-gold transition-colors duration-300 mb-1">
                {astrologer.name}
              </h3>
              <p className="text-xs text-light-gray/60 mb-3 font-medium">
                {astrologer.experience} Experience
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4 min-h-[48px]">
                {astrologer.specialties.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-light-gray"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4 mb-5 text-left text-xs">
                <div>
                  <div className="flex items-center text-gold font-semibold gap-0.5">
                    <StarIcon className="size-3.5 fill-gold stroke-gold" />
                    <span>{astrologer.rating}</span>
                  </div>
                  <p className="text-[10px] text-light-gray/40">Rating</p>
                </div>
                <div className="text-right">
                  <span className="text-soft-white font-medium">
                    {astrologer.consultations}
                  </span>
                  <p className="text-[10px] text-light-gray/40">Consults</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full">
                <Button
                  title={
                    <span className="flex items-center justify-center gap-1.5 w-full">
                      <ChatBubbleLeftRightIcon className="size-4" />
                      Chat Now ({astrologer.price})
                    </span>
                  }
                  onClick={() =>
                    console.log(`Starting chat with ${astrologer.name}`)
                  }
                  className="w-full text-xs font-semibold py-2.5 uppercase tracking-wider bg-linear-to-r from-primary to-violet-glow text-white border-none rounded-xl shadow-md group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 active:scale-95"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAstrologers;
