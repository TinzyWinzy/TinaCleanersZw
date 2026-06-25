import { ClipboardCheck, Search, Wrench, FileSignature } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    label: "Multi-Point Cleaning",
    description:
      "Our team arrives on schedule and executes a thorough multi-point cleaning protocol.",
  },
  {
    icon: Search,
    label: "Room-by-Room Joint Review",
    description:
      "We walk through every room together and inspect every surface.",
  },
  {
    icon: Wrench,
    label: "Instant Missed-Spot Fix",
    description:
      "Any area that doesn't meet our standard is corrected on the spot immediately.",
  },
  {
    icon: FileSignature,
    label: "Sign-off & Final Payment",
    description:
      "You approve the work in full before releasing payment — no surprises.",
  },
];

export default function Walkthrough() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-800 to-sky-800 py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold text-sky-300 bg-white/10 px-3 py-1 rounded-full mb-4 border border-white/10">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            The 100% Satisfaction Walkthrough
          </h2>
          <p className="mt-3 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto">
            Our signature inspection protocol ensures you never pay for
            incomplete work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full hover:bg-white/15 transition-all duration-300">
                  <div className="relative inline-flex mb-4 mx-auto">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white group-hover:bg-white/30 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-emerald-900 text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-tight">
                    {step.label}
                  </h3>
                  <p className="text-sky-100 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-sky-400/40" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
