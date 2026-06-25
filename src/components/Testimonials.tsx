import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Ruvimbo C.",
    text: "Tina Cleaners transformed my office space. I've never seen it so spotless. Their walkthrough inspection really gives you peace of mind — they fixed a few spots I hadn't even noticed. Absolutely professional from start to finish.",
  },
  {
    name: "Farai M.",
    text: "We hired them for post-construction cleaning after our home renovation. The team arrived on time, worked efficiently, and the results were impeccable. The room-by-room review sealed the deal for me. Highly recommended!",
  },
  {
    name: "Kudzai N.",
    text: "I've been using Tina Cleaners for my corporate office for over a year now. Consistent quality, reliable scheduling, and their staff are always courteous and professional. Best decision we made for our facility management.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from verified Google Business Profile customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">
                      {t.name}
                    </span>
                    <BadgeCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-xs text-slate-400">Verified Google Customer</span>
                </div>
              </div>
              <StarRating />
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
