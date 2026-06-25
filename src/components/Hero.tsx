import { CheckCircle, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-emerald-800 to-sky-800">
      <div className="absolute inset-0">
        <img
          src="/clean_chairs.jpg"
          alt="Clean chairs"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 via-emerald-800/70 to-sky-800/60" />
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-400/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 sm:mb-8 border border-white/10">
            <CheckCircle className="w-4 h-4 text-sky-300" />
            Verified Zimbabwe Pvt Ltd
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            The Premier Professional Cleaning Specialists in{" "}
            <span className="text-sky-300">Zimbabwe</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            6+ Years of expert janitorial and domestic care across Harare,
            Chitungwiza, Ruwa, Norton, Glendale, Chegutu, and Kadoma.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-sky-300" />
              100% Satisfaction Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              5.0 Rated via Google Reviews
            </span>
          </div>

          <div className="mt-8 sm:mt-10">
            <button
              onClick={scrollToEstimator}
              className="group relative inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-emerald-800 font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-sky-900/30 transition-all duration-300 animate-float"
            >
              Calculate Your Instant Quote
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
