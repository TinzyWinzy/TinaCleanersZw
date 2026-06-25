import { useState, useCallback } from "react";
import { Calculator, Minus, Plus, Send, MapPin, Briefcase } from "lucide-react";

const services = [
  { name: "Deep Cleaning", base: 30 },
  { name: "Office Cleaning", base: 45 },
  { name: "Sofa/Upholstery Care", base: 20 },
  { name: "Post-Construction", base: 60 },
  { name: "Corporate Contract", base: 50 },
  { name: "House Cleaning", base: 25 },
  { name: "Once-Off Blitz", base: 35 },
  { name: "Maid Placements", base: 40 },
];

const locations = [
  { name: "Harare", travel: 0 },
  { name: "Chitungwiza", travel: 10 },
  { name: "Ruwa", travel: 10 },
  { name: "Norton", travel: 15 },
  { name: "Glendale", travel: 20 },
  { name: "Chegutu", travel: 25 },
  { name: "Kadoma", travel: 30 },
];

export default function Estimator() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const service = services[serviceIndex];
  const location = locations[locationIndex];
  const safeScale = Math.max(1, scale);

  const estimatedLow = service.base * safeScale + location.travel;
  const estimatedHigh = estimatedLow + 10;

  const handleWhatsApp = useCallback(() => {
    const message = `Hello Tina Cleaners, I would like to book a ${service.name} in ${location.name} for ${safeScale} rooms. My estimated quote is $${estimatedLow} - $${estimatedHigh} USD`;
    const url = `https://wa.me/263777998810?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, [service, location, safeScale, estimatedLow, estimatedHigh]);

  return (
    <section id="estimator" className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-mint-50 text-emerald-800 mb-4 mx-auto">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Price Estimator
            </h2>
            <p className="mt-2 text-slate-600">
              Select your service, location, and scale for an instant quote.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Briefcase className="w-4 h-4 text-emerald-800" />
                  Service Type
                </label>
                <select
                  value={serviceIndex}
                  onChange={(e) => setServiceIndex(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-slate-800 bg-white focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 outline-none text-sm"
                >
                  {services.map((s, i) => (
                    <option key={s.name} value={i}>
                      {s.name} (${s.base})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-800" />
                  Location
                </label>
                <select
                  value={locationIndex}
                  onChange={(e) => setLocationIndex(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-slate-800 bg-white focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 outline-none text-sm"
                >
                  {locations.map((l, i) => (
                    <option key={l.name} value={i}>
                      {l.name}
                      {l.travel > 0 ? ` (+$${l.travel} travel)` : " (No travel fee)"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                Rooms / Zones Scale
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setScale((s) => Math.max(1, s - 1))}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 text-slate-700 transition-colors"
                  aria-label="Decrease scale"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-bold text-emerald-800 w-12 text-center tabular-nums">
                  {safeScale}
                </span>
                <button
                  onClick={() => setScale((s) => Math.min(50, s + 1))}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 text-slate-700 transition-colors"
                  aria-label="Increase scale"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-mint-50 rounded-xl p-5 sm:p-6 text-center border border-emerald-100">
              <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">
                Estimated Price Range
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-800 mt-1 tabular-nums">
                ${estimatedLow} &ndash; ${estimatedHigh} USD
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Based on {safeScale} {safeScale === 1 ? "room" : "rooms"} in {location.name}
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Lock In Quote via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
