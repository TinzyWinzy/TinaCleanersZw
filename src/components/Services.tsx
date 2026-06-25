import {
  Sparkles,
  Building2,
  Sofa,
  HardHat,
  Briefcase,
  Home,
  Clock,
  ArrowLeftRight,
  Layers,
  Shirt,
  Trees,
  Users,
} from "lucide-react";

const servicesList = [
  { name: "Deep Cleaning", icon: Sparkles, description: "Thorough top-to-bottom residential and commercial deep cleaning." },
  { name: "Office Cleaning", icon: Building2, description: "Professional janitorial services for offices and workspaces." },
  { name: "Sofa/Upholstery Care", icon: Sofa, description: "Specialized fabric and leather upholstery cleaning." },
  { name: "Post-Construction", icon: HardHat, description: "Heavy-duty cleanup after renovations and construction." },
  { name: "Corporate Contract", icon: Briefcase, description: "Ongoing corporate cleaning agreements and facility management." },
  { name: "House Cleaning", icon: Home, description: "Regular domestic cleaning tailored to your schedule." },
  { name: "Once-Off", icon: Clock, description: "Single-visit intensive cleaning for any space." },
  { name: "Move-In/Move-Out", icon: ArrowLeftRight, description: "End-of-lease and move-in readiness cleaning." },
  { name: "Carpet & Mattress", icon: Layers, description: "Deep steam cleaning for carpets and mattresses." },
  { name: "Laundry Services", icon: Shirt, description: "Wash, dry, fold, and iron for households and businesses." },
  { name: "Yard Maintenance", icon: Trees, description: "Lawn mowing, hedge trimming, and outdoor upkeep." },
  { name: "Maid Placements", icon: Users, description: "vetted and trained domestic staff for long-term placement." },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions across Zimbabwe — residential,
            commercial, and industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-200 group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-mint-50 text-emerald-800 mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
