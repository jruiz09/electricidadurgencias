# Electricidad Urgencias

Landing page de servicios de electricidad 24hs en CABA y Gran Buenos Aires.
React + Vite + Tailwind CSS v4, sin imágenes pesadas (fondo decorativo hecho con
CSS/SVG) e íconos inline, pensada para cargar rápido en mobile.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build   # genera dist/
npm run preview # sirve el build para probarlo localmente
```

## Antes de publicar

- **`src/data/site.js`**: reemplazar `WHATSAPP_NUMBER`, `phoneDisplay` y
  `phoneHref` por los datos reales del electricista. Es el único lugar donde
  hay que tocar el número: todos los botones de WhatsApp/llamada lo importan
  de ahí.
- **`src/components/Testimonios.jsx`**: son testimonios de ejemplo, conviene
  reemplazarlos por reseñas reales de clientes.
- **`index.html`**: falta el snippet de Google tag (gtag.js) — se omitió a
  propósito para gestionarlo más adelante. También conviene ajustar
  `og:image`/`twitter:image` si se suma una imagen social.
- **`public/favicon.svg`**: ícono genérico (rayo). Reemplazar por el logo
  real de la empresa si lo tienen.
