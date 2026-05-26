import React, { useState, useEffect } from "react";
import { StarIcon, PhoneIcon } from "@heroicons/react/24/outline";
import astrologers from "../../../../data/astrologers";
import { useNavigate } from "react-router-dom";

const avatarGradients = [
  "from-amber-400 via-orange-500 to-red-600",
  "from-purple-500 via-indigo-500 to-pink-500",
  "from-teal-400 via-emerald-500 to-blue-600",
  "from-pink-400 via-rose-500 to-purple-600",
  "from-sky-400 via-cyan-500 to-indigo-600",
];

const OurAstrologers = () => {
  const navigate = useNavigate();
  const [astrologersData, setAstrologerData] = useState([]);
  useEffect(() => {
    setAstrologerData(astrologers?.slice(0, 4));
  }, []);

  const getInitials = (name) =>
    name
      .split(" ")
      .filter((w) => w.length > 0)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
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
        {astrologersData.map((astrologer, idx) => (
          <div
            key={astrologer.id}
            onClick={() => navigate(`/astrologer-profile/${astrologer.id}`)}
            className="group relative cursor-pointer rounded-2xl bg-dark-surface/40 backdrop-blur-md border border-white/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(109,40,217,0.2)] hover:border-violet-glow/25"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent to-violet-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Avatar */}
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div
                className={`w-full h-full rounded-full bg-linear-to-tr ${avatarGradients[idx % avatarGradients.length]} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
                  <span className="text-sm font-Cinzel font-bold text-soft-white group-hover:text-gold transition-colors duration-300">
                    {getInitials(astrologer.name)}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="relative text-center">
              <h3 className="font-Cinzel text-base font-bold text-soft-white group-hover:text-gold transition-colors duration-300 mb-0.5 truncate">
                {astrologer.name}
              </h3>
              <p className="text-[11px] text-light-gray/50 mb-3 truncate">
                {astrologer.designation}
              </p>

              {/* Experience & Rating row */}
              <div className="flex items-center justify-between text-xs border-t border-white/5 pt-3 mb-3">
                <span className="text-light-gray/60">
                  {astrologer.experience}
                </span>
                <div className="flex items-center gap-1 text-gold font-medium">
                  <StarIcon className="size-3.5 fill-gold stroke-gold" />
                  <span>{astrologer.reviews.overallRating}</span>
                  <span className="text-light-gray/30 font-normal">
                    ({astrologer.reviews.totalReviews})
                  </span>
                </div>
              </div>

              {/* Call rate */}
              <div className="flex items-center justify-center gap-1.5 text-xs">
                <PhoneIcon className="size-3.5 text-violet-glow/70" />
                <span className="text-soft-white font-semibold">
                  ₹{astrologer.callRate}/min
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAstrologers;
