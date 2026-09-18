import { site } from "../data/site";
import { BoltIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 text-center">
      <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
        <span className="grid place-items-center w-8 h-8 rounded-lg bg-amber-500 text-night-900">
          <BoltIcon className="w-4 h-4" />
        </span>
        {site.brand}
      </div>

      <p className="text-sm text-slate-400 mb-1">{site.tagline}</p>
      <p className="text-sm text-slate-400 mb-4">
        Electricidad 24hs en Buenos Aires – {site.zona}
      </p>

      <p className="text-xs text-slate-500">
        © {site.year} {site.brand} – Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
