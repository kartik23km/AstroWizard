import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
  Services: [
    { label: "Vedic Astrology", href: "#" },
    { label: "Tarot Reading", href: "#" },
    { label: "Numerology", href: "#" },
    { label: "Vastu Shastra", href: "#" },
    { label: "Kundli Matching", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Astrologers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 border-t border-white/5">
      {/* Top glow streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-violet-glow/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <h3 className="font-Cinzel text-2xl font-bold text-soft-white mb-1">
                Astro
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-glow to-gold">
                  Wizard
                </span>
              </h3>
              <p className="text-xs text-light-gray/40 uppercase tracking-widest">
                Ancient Wisdom · Modern Clarity
              </p>
            </div>
            <p className="text-sm text-light-gray/60 leading-relaxed font-light max-w-sm">
              India&apos;s most trusted astrology platform. Connecting millions
              of seekers with certified cosmic guides since 2020.
            </p>

            {/* Contact Info */}
            {/* change the visibility if required */}
            <ul className="flex-col gap-3 mt-1 hidden">
              <li className="flex items-center gap-3 text-xs text-light-gray/50 hover:text-gold transition-colors duration-200 group">
                <EnvelopeIcon className="size-4 text-violet-glow/60 shrink-0" />
                <span>support@astrowizard.com</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-light-gray/50 hover:text-gold transition-colors duration-200 group">
                <PhoneIcon className="size-4 text-violet-glow/60 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-light-gray/50">
                <MapPinIcon className="size-4 text-violet-glow/60 shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="size-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-light-gray/50 hover:text-gold hover:bg-violet-glow/10 hover:border-violet-glow/30 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-Cinzel text-sm font-semibold text-soft-white uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-light-gray/50 hover:text-gold transition-colors duration-200 relative group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300 rounded-full inline-block" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-light-gray/30">
          <p>
            &copy; {new Date().getFullYear()} AstroWizard. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with
            <span className="text-mystic-pink animate-pulse">♥</span>
            for cosmic seekers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
