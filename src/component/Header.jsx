import { useState } from "react";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#3a1c71] text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 font-bold">
          <button
            className="md:hidden text-xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <p>IndigoLearn</p>
        </div>

        <nav className="hidden md:flex gap-10 text-xs font-bold">
          {navLinks.map((link) => (
            <a key={link} href="#!">{link.toUpperCase()}</a>
          ))}
        </nav>

        <button className="bg-white text-black text-xs rounded px-3 py-1">
          Log In/Sign Up
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-3 text-sm">
          {navLinks.map((link) => (
            <a key={link} href="#!">{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
}