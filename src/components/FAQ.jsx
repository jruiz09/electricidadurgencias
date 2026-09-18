import { useState } from "react";
import { site } from "../data/site";

const preguntas = [
  {
    q: "¿Atienden urgencias eléctricas de noche o fines de semana?",
    a: "Sí, brindamos servicio de electricidad las 24 horas, los 365 días del año, incluyendo noches, fines de semana y feriados.",
  },
  {
    q: "¿Los electricistas están matriculados?",
    a: "Sí, todos nuestros electricistas están matriculados y cuentan con experiencia en instalaciones seguras y normalizadas.",
  },
  {
    q: "¿Qué zonas cubren?",
    a: `Cubrimos ${site.zona}.`,
  },
  {
    q: "¿Cuánto tardan en llegar ante una urgencia?",
    a: "El tiempo de respuesta depende de la zona y la disponibilidad, pero priorizamos siempre los cortes totales de luz y las situaciones de riesgo eléctrico.",
  },
  {
    q: "¿Entregan certificado del trabajo realizado?",
    a: "Sí, entregamos certificado y garantía escrita por cada trabajo realizado.",
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-night-900"
        aria-expanded={open}
      >
        {q}
        <span
          className={`shrink-0 text-amber-500 text-xl leading-none transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="preguntas-frecuentes" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-night-900 mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600">
          Resolvemos las dudas más comunes sobre nuestro servicio de electricidad urgente.
        </p>

        <div className="flex flex-col gap-3">
          {preguntas.map((p) => (
            <FAQItem key={p.q} q={p.q} a={p.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
