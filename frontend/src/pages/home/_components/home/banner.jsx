import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "@/components/atoms/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Banner = () => {
  // Option `duration: 20` controls the speed of the slide transition animation (snappy and smooth)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Track which slide images have been triggered to load
  const [loadedSlides, setLoadedSlides] = useState([0]);

  // Time in milliseconds each slide stays visible (6 seconds)
  const AUTOPLAY_DELAY = 6000;

  const slides = [
    {
      type: "image",
      src: "/images/banner1.png",
      tag: "COSMIC READINGS",
      title: "Discover Your Celestial Destiny",
      description:
        "Unlock the mysteries of your life path, relationships, and future. Get custom birth chart insights and speak with expert astrologers.",
      btnText: "Chat Now",
    },
    {
      type: "image",
      src: "/images/banner2.png",
      tag: "DAILY HOROSCOPES",
      title: "Your Daily Cosmic Alignment",
      description:
        "Navigate your daily challenges and choices with personalized guidance aligned precisely to your astrological sign.",
      btnText: "Chat Now",
    },
    {
      type: "image",
      src: "/images/banner3.jpg",
      tag: "LIVE CONSULTATION",
      title: "Talk With Expert Astrologers",
      description:
        "Receive instant guidance and clear your doubts on career, health, relationships, and finance via live 1-on-1 private sessions.",
      btnText: "Chat Now",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // Effect for slide selection and autoplay
  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("reInit", onInit);

    let autoplayTimer = null;

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        emblaApi.scrollNext();
      }, AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    // Start autoplay immediately on mount
    startAutoplay();

    // Reset the autoplay timer whenever the slide changes (via dots/arrows/drag)
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      startAutoplay(); // Restart the timer
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", stopAutoplay); // Pause autoplay when dragging starts

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onInit]);

  // Effect for progressive image preloading (loads adjacent slides dynamically)
  useEffect(() => {
    if (!emblaApi) return;

    const preloadAdjacent = () => {
      const current = emblaApi.selectedScrollSnap();
      const next = (current + 1) % slides.length;
      const prev = (current - 1 + slides.length) % slides.length;

      setLoadedSlides((prevLoaded) => {
        if (
          prevLoaded.includes(current) &&
          prevLoaded.includes(next) &&
          prevLoaded.includes(prev)
        ) {
          return prevLoaded;
        }
        const updated = new Set([...prevLoaded, current, next, prev]);
        return Array.from(updated);
      });
    };

    // Delay preloading of adjacent slides by 1.5 seconds to let initial page styles/scripts load first
    const delayTimer = setTimeout(() => {
      preloadAdjacent();
    }, 1500);

    emblaApi.on("select", preloadAdjacent);

    return () => {
      clearTimeout(delayTimer);
      emblaApi.off("select", preloadAdjacent);
    };
  }, [emblaApi, slides.length]);

  return (
    <div className="relative group w-full max-w-7xl mx-auto px-4 md:px-6 my-8">
      {/* Carousel Viewport */}
      <div
        className="overflow-hidden rounded-3xl shadow-[0_0_50px_-12px_rgba(109,40,217,0.3)] border border-white/10"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 relative h-[380px] md:h-[480px] lg:h-[520px] overflow-hidden select-none bg-space-dark"
            >
              {slide.type === "image" && (
                <>
                  {/* Glowing themed placeholder visible while image is downloading */}
                  <div className="absolute inset-0 bg-linear-to-br from-space-dark via-deep-night to-dark-surface animate-pulse" />

                  {/* Dynamic preloaded image with fade-in effect on complete load */}
                  {loadedSlides.includes(idx) && (
                    <img
                      src={slide.src}
                      alt={slide.title}
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchPriority={idx === 0 ? "high" : "low"}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000 opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                        e.currentTarget.classList.add("opacity-100");
                      }}
                    />
                  )}

                  {/* Premium dark gradient overlay for optimal text contrast */}
                  <div className="absolute inset-0 bg-linear-to-r from-space-dark/95 via-space-dark/75 to-transparent md:from-space-dark/90 md:via-space-dark/50 md:to-transparent z-5" />
                  <div className="absolute inset-0 bg-linear-to-t from-space-dark/65 via-transparent to-transparent z-5" />
                </>
              )}

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20 z-10 text-left max-w-2xl">
                <span className="font-semibold text-xs md:text-sm text-gold tracking-[0.25em] uppercase mb-4 animate-pulse">
                  ✦ {slide.tag} ✦
                </span>
                <h1 className="font-Cinzel text-3xl md:text-5xl lg:text-5xl font-bold text-soft-white mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-light-gray mb-8 leading-relaxed font-light max-w-lg">
                  {slide.description}
                </p>
                <div className="flex">
                  <Button
                    title={
                      <span className="flex items-center gap-2">
                        <ChatBubbleLeftRightIcon className="size-5" />
                        {slide.btnText}
                      </span>
                    }
                    onClick={() => console.log("Chat Now clicked")}
                    className="px-6 py-3 font-semibold text-sm tracking-wider uppercase bg-linear-to-r from-primary to-violet-glow text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] border-none hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all duration-300 transform active:scale-95"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-10 top-1/2 -translate-y-1/2 cursor-pointer z-20 items-center justify-center size-12 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-soft-white hover:bg-white/15 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer z-20 items-center justify-center size-12 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-soft-white hover:bg-white/15 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="size-6" />
      </button>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full h-1.5 ${
              selectedIndex === index
                ? "w-8 bg-linear-to-r from-gold to-yellow-400"
                : "w-2 bg-white/20 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
