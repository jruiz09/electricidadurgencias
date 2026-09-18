import { StarIcon } from "./icons";

// Testimonios de ejemplo — reemplazar por reseñas reales de clientes antes de publicar.
const data = [
  {
    text: "Se cortó la luz de todo el departamento un domingo a la noche y vinieron en menos de una hora. Muy profesionales.",
    author: "Martín G. – CABA",
  },
  {
    text: "Cambiaron el tablero eléctrico completo de mi casa. Trabajo prolijo y con garantía por escrito.",
    author: "Carla S. – GBA Norte",
  },
  {
    text: "Los llamo siempre que tengo un problema eléctrico. Nunca fallan y atienden a cualquier hora.",
    author: "Diego R. – GBA Oeste",
  },
];

const Testimonios = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-night-900 mb-4">
          Opiniones de nuestros clientes
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg mb-12 text-gray-600">
          La satisfacción de nuestros clientes respalda la calidad de nuestros{" "}
          <strong>servicios de electricidad 24hs</strong> en Buenos Aires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="italic mb-4 text-gray-700">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-night-900 text-sm">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
