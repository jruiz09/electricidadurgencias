import { ZapOutlineIcon, ToolIcon, ShieldIcon, ClockIcon, CheckCircleIcon, BoltIcon } from "./icons";

const servicios = [
  {
    titulo: "Urgencias eléctricas 24hs",
    desc: "Cortes de luz, cortocircuitos y olor a quemado. Atención inmediata, día y noche.",
    icon: ClockIcon,
  },
  {
    titulo: "Tableros eléctricos",
    desc: "Instalación, actualización y reparación de tableros seguros y normalizados.",
    icon: ToolIcon,
  },
  {
    titulo: "Cortocircuitos y cortes de luz",
    desc: "Diagnóstico y reparación rápida de fallas que cortan el suministro.",
    icon: BoltIcon,
  },
  {
    titulo: "Instalaciones eléctricas",
    desc: "Instalaciones completas para obras, reformas y ampliaciones.",
    icon: ZapOutlineIcon,
  },
  {
    titulo: "Llaves térmicas y disyuntores",
    desc: "Cambio y reparación de protecciones que saltan o dejaron de funcionar.",
    icon: ShieldIcon,
  },
  {
    titulo: "Iluminación y artefactos",
    desc: "Colocación de luminarias, spots LED y artefactos de iluminación.",
    icon: BoltIcon,
  },
  {
    titulo: "Detección de fallas",
    desc: "Búsqueda de fallas ocultas en paredes, techos y cableado.",
    icon: ToolIcon,
  },
  {
    titulo: "Certificados de instalación",
    desc: "Electricistas matriculados para certificaciones y habilitaciones.",
    icon: CheckCircleIcon,
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-night-900 mb-4">
          Servicios de electricidad 24hs
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg mb-12 text-gray-600">
          Ofrecemos <strong>servicios de electricidad 24hs</strong> para resolver
          urgencias, reparaciones e instalaciones en hogares, comercios y
          consorcios, con atención inmediata en CABA y Gran Buenos Aires.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-amber-500/10 text-amber-600 mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-night-900">{s.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
