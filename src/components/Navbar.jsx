import { useState } from "react";
import { site, whatsappLink } from "../data/site";
import { BoltIcon, MenuIcon, CloseIcon, WhatsAppIcon } from "./icons";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-night-900/95 backdrop-blur text-white shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-amber-500 text-night-900">
            <BoltIcon className="w-5 h-5" />
          </span>
          {site.brand}
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amber-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-night-900 font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-night-900">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium hover:text-amber-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-night-900 font-semibold px-4 py-2.5 rounded-lg"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
