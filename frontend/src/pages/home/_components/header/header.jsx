import { useState } from "react";
import Button from "@/components/atoms/button";
import {
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Astrologers", path: "/astrologers" },
  { name: "Contact", path: "/contact", hidden: true },
  { name: "Login", path: "/login" },
];

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-5 lg:px-10 py-4 lg:py-5">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
        >
          <h3 className="font-Cinzel text-xl lg:text-2xl font-bold text-soft-white mb-0.5 leading-tight">
            Astro
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-glow to-gold">
              Wizard
            </span>
          </h3>
          <p className="text-[10px] text-light-gray/40 uppercase tracking-widest hidden sm:block">
            Ancient Wisdom · Modern Clarity
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-Cinzel text-sm cursor-pointer relative pb-1 transition-colors duration-300 hover:text-yellow-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:transition-transform after:duration-300 after:bg-cosmic-blue ` +
                    (isActive
                      ? "text-yellow-400 after:scale-x-100"
                      : "text-soft-white after:scale-x-0 hover:after:scale-x-100")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            title={
              <span className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="size-5" />
                Chat Now
              </span>
            }
            onClick={() => console.log("Chat Now clicked")}
            className="px-6 py-3 font-semibold text-sm tracking-wider uppercase bg-linear-to-r from-primary to-violet-glow text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] border-none hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all duration-300 active:scale-95"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden cursor-pointer flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/10 text-soft-white hover:bg-white/10 transition-all duration-200 active:scale-95"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <XMarkIcon className="size-5" />
          ) : (
            <Bars3Icon className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-dark-surface/80 backdrop-blur-md border border-white/8 px-6 py-5 flex flex-col gap-1">
          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${item.hidden ? "hidden" : "block"}`}
              >
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-Cinzel block w-full py-3 px-2 text-sm border-b border-white/5 last:border-0 transition-colors duration-200 ` +
                    (isActive
                      ? "text-yellow-400"
                      : "text-light-gray hover:text-gold")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <Button
            title={
              <span className="flex items-center justify-center gap-2 w-full">
                <ChatBubbleLeftRightIcon className="size-5" />
                Chat Now
              </span>
            }
            onClick={() => {
              console.log("Chat Now clicked");
              closeMenu();
            }}
            className="w-full py-3 font-semibold text-sm tracking-wider uppercase bg-linear-to-r from-primary to-violet-glow text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] border-none active:scale-95 transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
