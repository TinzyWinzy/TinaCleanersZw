import { Sparkles, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Estimator", href: "#estimator" },
  { label: "Reviews", href: "#testimonials" },
];

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-800" />
            <div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-emerald-800 tracking-tight leading-none">
                Tina Cleaners
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-tight mt-0.5">
                Pvt Ltd
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://maps.google.com/?q=Second+Street+and+Livingstone+Ave+Harare+Zimbabwe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-800 transition-colors"
            >
              Location
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+263777998810"
              className="hidden sm:flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>077 799 8810</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-slate-600 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-slate-600 hover:text-emerald-800 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://maps.google.com/?q=Second+Street+and+Livingstone+Ave+Harare+Zimbabwe"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-emerald-800 py-2"
          >
            Location
          </a>
          <a
            href="tel:+263777998810"
            className="flex items-center gap-2 bg-emerald-800 text-white font-semibold px-4 py-2.5 rounded-lg text-sm w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            077 799 8810
          </a>
        </div>
      )}
    </header>
  );
}
