import { whatsappLink } from "../data/site";
import { WhatsAppIcon } from "./icons";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="hidden md:grid fixed bottom-6 right-6 z-40 place-items-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 hover:scale-105 transition-all"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
