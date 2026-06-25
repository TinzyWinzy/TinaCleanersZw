import { Sparkles, Phone } from "lucide-react";

export default function NavHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
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

          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a
              href="https://maps.google.com/?q=Second+Street+and+Livingstone+Ave+Harare+Zimbabwe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-800 transition-colors"
            >
              Second St & Livingstone Ave, Harare
            </a>
          </div>

          <a
            href="tel:+263777998810"
            className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>077 799 8810</span>
          </a>
        </div>
      </div>
    </header>
  );
}
