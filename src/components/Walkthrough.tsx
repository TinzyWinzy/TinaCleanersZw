import { ClipboardCheck, Search, Wrench, FileSignature } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    label: "Arrival & Multi-Point Cleaning",
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
    label: "Instant Missed-Spot Rectification",
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
    <section className="bg-emerald-800 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            The 100% Satisfaction Walkthrough
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            Our signature inspection protocol ensures you never pay for
            incomplete work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-mint-50 text-emerald-800 mb-4 mx-auto">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-white text-sm font-bold mb-1">
                    Step {index + 1}
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-tight">
                    {step.label}
                  </h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-500/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
