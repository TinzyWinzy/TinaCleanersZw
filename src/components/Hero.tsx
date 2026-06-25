import { CheckCircle, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-mint-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 sm:mb-8">
            <CheckCircle className="w-4 h-4" />
            Verified Zimbabwe Pvt Ltd
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            The Premier Professional Cleaning Specialists in{" "}
            <span className="text-emerald-800">Zimbabwe</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            6+ Years of expert janitorial and domestic care across Harare,
            Chitungwiza, Ruwa, Norton, Glendale, Chegutu, and Kadoma.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              100% Satisfaction Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              5.0 Rated via Google Reviews
            </span>
          </div>

          <div className="mt-8 sm:mt-10">
            <button
              onClick={scrollToEstimator}
              className="group relative inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-emerald-800/30 transition-all duration-300 animate-pulse hover:animate-none"
            >
              Calculate Your Instant Quote
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
    </section>
  );
}
