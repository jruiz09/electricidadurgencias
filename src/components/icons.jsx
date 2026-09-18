// Íconos SVG livianos e inline. Evitamos sumar una librería de íconos completa
// para mantener el bundle chico; solo se incluye el trazo que se usa.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const BoltIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.353.615 4.646 1.784 6.665L2.667 29.333l6.83-1.756a13.27 13.27 0 0 0 6.503 1.756h.001c7.362 0 13.333-5.971 13.333-13.334 0-3.562-1.388-6.911-3.906-9.428a13.24 13.24 0 0 0-9.427-3.904Zm0 24.4h-.001a11.08 11.08 0 0 1-5.646-1.546l-.405-.24-4.053 1.043 1.082-3.951-.264-.406a11.06 11.06 0 0 1-1.7-5.897c0-6.122 4.982-11.1 11.105-11.1a11.04 11.04 0 0 1 7.852 3.253 11.04 11.04 0 0 1 3.25 7.855c-.003 6.122-4.985 11-11.22 11Zm6.088-8.31c-.334-.167-1.976-.975-2.282-1.086-.306-.111-.529-.167-.751.167-.223.334-.863 1.086-1.058 1.31-.195.223-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.657-.993-.886-1.663-1.98-1.858-2.314-.195-.334-.021-.514.146-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.083-.167-.751-1.81-1.029-2.478-.271-.65-.546-.562-.751-.573l-.64-.011c-.223 0-.585.083-.891.418-.306.334-1.169 1.142-1.169 2.786s1.197 3.232 1.363 3.455c.167.223 2.355 3.595 5.706 5.041.797.344 1.42.55 1.905.704.8.254 1.529.218 2.105.132.642-.096 1.976-.808 2.254-1.588.278-.78.278-1.449.195-1.588-.083-.14-.306-.223-.64-.39Z" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
  </svg>
);

export const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ZapOutlineIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const ToolIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" />
  </svg>
);

export const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z" />
  </svg>
);
