import { Sparkles, Mail, Phone, MapPin, User, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-sky-400" />
              <span className="text-lg font-extrabold text-white">
                Tina Cleaners
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Zimbabwe&apos;s premier professional cleaning service —
              delivering hygiene, safety, and operational precision since 2020.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <User className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Tinashe Chomunorwa</span>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Second+Street+and+Livingstone+Ave+Harare+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span>
                    Second Street and Livingstone Ave, Harare, Zimbabwe
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tinashechomunorwa0@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">tinashechomunorwa0@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+263777998810"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>+263 77 799 8810</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {["Harare", "Chitungwiza", "Ruwa", "Norton", "Glendale", "Chegutu", "Kadoma"].map(
                (city) => (
                  <li key={city} className="text-slate-400">
                    {city}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Tech Stack
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Built with React + Vite + Vercel</span>
            </div>
            <p className="text-xs text-slate-500 mt-6">
              Tina Cleaners Pvt Ltd &copy; {new Date().getFullYear()}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
