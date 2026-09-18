import { site, whatsappLink } from "../data/site";
import { WhatsAppIcon, PhoneIcon, ClockIcon, MapPinIcon } from "./icons";

const Contacto = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 bg-night-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          ¿Tenés una urgencia eléctrica?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Escribinos por WhatsApp o llamanos directamente. Respondemos las 24 horas, todos los días del año.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors"
          >
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-amber-500 text-night-900">
              <WhatsAppIcon className="w-5 h-5" />
            </span>
            <span className="font-semibold">WhatsApp</span>
            <span className="text-sm text-slate-300">Respuesta inmediata, las 24hs</span>
          </a>

          <a
            href={site.phoneHref}
            className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors"
          >
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-amber-500 text-night-900">
              <PhoneIcon className="w-5 h-5" />
            </span>
            <span className="font-semibold">{site.phoneDisplay}</span>
            <span className="text-sm text-slate-300">Llamada directa</span>
          </a>

          <div className="flex flex-col items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-amber-500 text-night-900">
              <ClockIcon className="w-5 h-5" />
            </span>
            <span className="font-semibold">Atención 24hs</span>
            <span className="text-sm text-slate-300">Todos los días del año</span>
          </div>
        </div>

        <p className="inline-flex items-center gap-2 text-sm text-slate-400">
          <MapPinIcon className="w-4 h-4 text-amber-400" />
          {site.zona}
        </p>
      </div>
    </section>
  );
};

export default Contacto;
