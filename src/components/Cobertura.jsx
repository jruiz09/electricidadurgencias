import { site } from "../data/site";
import { MapPinIcon } from "./icons";

const zonas = ["CABA", "GBA Norte", "GBA Sur", "GBA Oeste"];

const Cobertura = () => {
  return (
    <section id="cobertura" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-grid place-items-center w-14 h-14 rounded-full bg-amber-500/10 text-amber-600 mb-6">
          <MapPinIcon className="w-7 h-7" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-night-900 mb-6">
          Zona de cobertura
        </h2>

        <p className="text-lg mb-4 text-gray-600">
          Brindamos <strong>servicios de electricidad 24hs</strong> en toda la
          Ciudad de Buenos Aires y el Gran Buenos Aires, con atención inmediata
          para urgencias, reparaciones y mantenimiento.
        </p>

        <p className="text-md mb-8 text-gray-500">
          Atendemos hogares, comercios y consorcios con electricistas matriculados,
          equipados para resolver cortes de luz, fallas eléctricas y todo tipo de
          trabajos de electricidad.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {zonas.map((z) => (
            <span
              key={z}
              className="bg-white border border-amber-500/30 text-night-900 font-semibold text-sm px-4 py-2 rounded-full shadow-sm"
            >
              {z}
            </span>
          ))}
        </div>

        <p className="sr-only">{site.zona}</p>
      </div>
    </section>
  );
};

export default Cobertura;
