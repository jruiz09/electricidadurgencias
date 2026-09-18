import { site, whatsappLink } from "../data/site";
import { WhatsAppIcon, PhoneIcon, ClockIcon, ShieldIcon, CheckCircleIcon } from "./icons";

const badges = [
  { icon: ClockIcon, text: "Atención 24hs, los 365 días" },
  { icon: ShieldIcon, text: "Electricistas matriculados" },
  { icon: CheckCircleIcon, text: "Presupuesto sin cargo" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-night-900 text-white"
    >
      {/* Fondo decorativo: degradé + patrón tipo circuito, sin imágenes pesadas */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-900 via-night-800 to-night-900" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M10 10h40v30h30v-20h40M10 90h30v-30M100 60v50h-40v-20"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="10" r="2.5" fill="#fbbf24" />
            <circle cx="50" cy="40" r="2.5" fill="#fbbf24" />
            <circle cx="100" cy="60" r="2.5" fill="#fbbf24" />
            <circle cx="60" cy="90" r="2.5" fill="#fbbf24" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
        <span className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 border border-amber-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          Urgencias eléctricas · CABA y GBA
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-5 text-balance">
          Electricistas matriculados
          <span className="block text-amber-400">las 24 horas</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Cortes de luz, cortocircuitos, tableros eléctricos e instalaciones.
          Llegamos rápido y trabajamos con seguridad y garantía en cada servicio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-night-900 font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-amber-500/20 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar electricista ahora
          </a>

          <a
            href={site.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            Llamar ahora
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          {badges.map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2">
              <Icon className="w-4 h-4 text-amber-400" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
