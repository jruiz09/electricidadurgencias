import { site, whatsappLink } from "../data/site";
import { WhatsAppIcon, PhoneIcon } from "./icons";

// Barra fija inferior solo en mobile: mejora la conversión en el dispositivo
// donde más se buscan urgencias ("electricista urgente cerca").
const StickyCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 bg-night-900 border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.25)]">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-white font-semibold border-r border-white/10"
      >
        <PhoneIcon className="w-4 h-4" />
        Llamar
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-amber-500 text-night-900 font-semibold"
      >
        <WhatsAppIcon className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyCallBar;
