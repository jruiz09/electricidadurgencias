import { ShieldIcon, ClockIcon, CheckCircleIcon } from "./icons";

const items = [
  {
    icon: ShieldIcon,
    title: "Electricistas matriculados",
    desc: "Profesionales matriculados con experiencia en instalaciones seguras y normalizadas.",
  },
  {
    icon: ClockIcon,
    title: "Atención inmediata 24 horas",
    desc: "Respondemos urgencias eléctricas los 365 días del año en CABA y Gran Buenos Aires.",
  },
  {
    icon: CheckCircleIcon,
    title: "Trabajo seguro y garantizado",
    desc: "Cumplimos las normas de seguridad eléctrica vigentes, con garantía escrita en cada trabajo.",
  },
];

const PorQueElegirnos = () => {
  return (
    <section id="por-que-elegirnos" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-night-900 mb-4">
          ¿Por qué elegirnos?
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg mb-12 text-gray-600">
          Somos una empresa especializada en <strong>servicios de electricidad 24hs</strong>,
          brindando soluciones rápidas y seguras para hogares, comercios y
          consorcios en Buenos Aires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-night-900 text-white rounded-xl border-t-4 border-amber-500"
            >
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-amber-500 text-night-900 mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueElegirnos;
