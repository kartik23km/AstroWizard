import { useParams } from "react-router-dom";
import {
  StarIcon,
  PhoneIcon,
  AcademicCapIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import Header from "../home/_components/header/header";
import astrologers from "../../data/astrologers";
import { getAstrologerById } from "@/utils/getAstrologerById";
import Button from "@/components/atoms/button";

const avatarGradients = [
  "from-amber-400 via-orange-500 to-red-600",
  "from-purple-500 via-indigo-500 to-pink-500",
  "from-teal-400 via-emerald-500 to-blue-600",
  "from-pink-400 via-rose-500 to-purple-600",
  "from-sky-400 via-cyan-500 to-indigo-600",
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const AstrologerProfile = () => {
  const { id } = useParams();

  const astrologer = getAstrologerById(id);

  if (!astrologer) {
    return (
      <div className="min-h-screen bg-space-dark text-soft-white flex items-center justify-center">
        Astrologer not found
      </div>
    );
  }

  const gradient =
    avatarGradients[
      astrologers.findIndex((a) => a.id === id) % avatarGradients.length
    ];

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
        {/* Top Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-surface/40 backdrop-blur-xl p-6 md:p-8">
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-violet-glow/10 via-transparent to-gold/5 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="lg:w-[320px] flex flex-col items-center text-center">
              {/* Avatar */}
              <div
                className={`w-32 h-32 rounded-full bg-linear-to-br ${gradient} p-[2px] shadow-[0_0_40px_rgba(109,40,217,0.35)]`}
              >
                <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
                  <span className="font-Cinzel text-4xl text-soft-white font-bold">
                    {getInitials(astrologer.name)}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h1 className="mt-5 font-Cinzel text-2xl md:text-3xl font-bold text-soft-white">
                {astrologer.name}
              </h1>

              <p className="text-gold text-sm mt-1">{astrologer.designation}</p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2 bg-space-dark/60 border border-white/5 rounded-full px-4 py-2">
                <StarIcon className="size-4 fill-gold stroke-gold text-gold" />

                <span className="text-soft-white font-medium">
                  {astrologer.reviews.overallRating}
                </span>

                <span className="text-light-gray/50 text-sm">
                  ({astrologer.reviews.totalReviews} Reviews)
                </span>
              </div>

              {/* Call Rate */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <PhoneIcon className="size-4 text-violet-glow" />

                <span className="text-soft-white font-semibold">
                  ₹{astrologer.callRate}/min
                </span>
              </div>

              {/* CTA */}
              <Button
                title={
                  <span className="flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="size-5" />
                    Chat Now
                  </span>
                }
                onClick={() => console.log("Chat Now clicked")}
                className="mt-6 px-6 py-3 font-semibold text-sm tracking-wider uppercase bg-linear-to-r from-primary to-violet-glow text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] border-none hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all duration-300 active:scale-95"
              />
            </div>

            {/* Right */}
            <div className="flex-1">
              {/* About */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <SparklesIcon className="size-5 text-gold" />
                  <h2 className="font-Cinzel text-xl text-soft-white">
                    About My Services
                  </h2>
                </div>

                <p className="text-light-gray/75 leading-7 text-sm md:text-base">
                  {astrologer.aboutMyServices}
                </p>
              </div>

              {/* Specialization */}
              <div className="mb-8">
                <h2 className="font-Cinzel text-xl text-soft-white mb-4">
                  Specialization
                </h2>

                <div className="flex flex-wrap gap-3">
                  {astrologer.specialization.split(",").map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-space-dark border border-white/5 text-sm text-light-gray/80"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualification */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AcademicCapIcon className="size-5 text-gold" />

                  <h2 className="font-Cinzel text-xl text-soft-white">
                    Experience & Qualification
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/5 bg-space-dark/60 p-5">
                  <p className="text-light-gray/75 leading-7 text-sm md:text-base">
                    {astrologer.experienceQualification}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet-glow/10 border border-violet-glow/20 px-4 py-2">
                    <span className="text-violet-glow font-semibold text-sm">
                      {astrologer.experience} Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AstrologerProfile;
