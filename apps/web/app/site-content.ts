export const disclosure =
  "Este sitio es independiente de Starlink. Algunos enlaces son enlaces de referencia. Si realizas una compra elegible mediante uno de ellos, puedo recibir una recompensa de Starlink.";

export const pages = {
  "/internet-rural": {
    title: "Internet rural",
    kicker: "Guia base",
    description:
      "Una guía inicial para comparar opciones cuando el Internet fijo no llega, la señal celular falla o necesitas conectar una propiedad rural.",
    sections: [
      "Revisa primero qué problema necesitas resolver: trabajo, cámaras, escuela, negocio, llamadas o entretenimiento.",
      "Compara alternativas disponibles en tu zona: fibra o cobre si existen, Internet celular, enlaces locales, radioenlaces y satélite.",
      "No tomes una decisión solo por velocidad anunciada. Importan la estabilidad, el costo total, la instalación, el consumo eléctrico y el soporte.",
    ],
  },
  "/starlink-mexico": {
    title: "Starlink México",
    kicker: "Información independiente",
    description:
      "Punto de partida para entender cuándo Starlink puede ser una opción y qué datos debes confirmar en fuentes oficiales antes de comprar.",
    sections: [
      "Starlink puede ser relevante para propiedades donde no hay buenas opciones terrestres, pero la disponibilidad y los planes pueden variar.",
      "Antes de decidir, confirma cobertura, precio vigente, hardware, mensualidad, términos y requisitos directamente en Starlink.",
      "También considera instalación, vista despejada al cielo, energía eléctrica estable, Wi-Fi dentro de la propiedad y soporte posterior.",
    ],
  },
  "/starlink-es-para-mi": {
    title: "¿Starlink es para mí?",
    kicker: "Evaluacion simple",
    description:
      "Una primera versión editorial para ayudarte a ordenar la decisión. La herramienta interactiva vendrá después como una fase separada.",
    sections: [
      "Buena opción para investigar: no tienes Internet confiable, dependes de la conexión y puedes instalar con cielo despejado.",
      "Posible opción: tienes algo de Internet, pero falla para videollamadas, trabajo, cámaras o negocio. Revisa costos y alternativas.",
      "Probablemente no es la primera opción: ya tienes fibra o cable estable, tu presupuesto es muy sensible o no puedes instalar correctamente.",
    ],
  },
  "/faq": {
    title: "Preguntas frecuentes",
    kicker: "Dudas comunes",
    description:
      "Respuestas iniciales sin promesas de precio, velocidad, cobertura ni disponibilidad.",
    sections: [
      "¿Cuánto cuesta? Debes revisar el precio vigente en Starlink porque puede cambiar por plan, ubicación y fecha.",
      "¿Funciona cuando llueve? El clima puede afectar cualquier sistema inalámbrico o satelital; revisa información oficial y experiencias actuales.",
      "¿Lo puedo instalar yo? Depende de tu propiedad, el montaje, la vista al cielo, seguridad eléctrica y cobertura Wi-Fi necesaria.",
    ],
  },
  "/sobre-nosotros": {
    title: "Sobre nosotros",
    kicker: "Independiente y util",
    description:
      "Internet Rural México existe para ayudar a personas y negocios rurales a entender sus opciones antes de gastar.",
    sections: [
      "El enfoque inicial es Tiquicheo, Michoacán y después otras zonas rurales donde haya demanda real.",
      "La prioridad es explicar costos, límites, alternativas y pasos de decisión con lenguaje claro.",
      "Starlink es una posible opción y una fuente inicial de monetización por referidos elegibles, pero este sitio no es oficial.",
    ],
  },
  "/divulgacion": {
    title: "Divulgación",
    kicker: "Relacion de referidos",
    description:
      "Transparencia sobre la independencia del sitio y los enlaces de referencia.",
    sections: [
      disclosure,
      "La existencia de una recompensa no cambia la obligación de explicar alternativas, límites y casos donde Starlink podría no convenir.",
      "Las decisiones de compra deben basarse en información vigente, necesidades reales y confirmación directa con el proveedor.",
    ],
  },
  "/privacidad": {
    title: "Privacidad",
    kicker: "Version inicial",
    description:
      "Politica base para el MVP. Se actualizara si agregamos formularios, analitica avanzada o almacenamiento de datos.",
    sections: [
      "En esta etapa el sitio no requiere cuentas de usuario ni base de datos propia para operar.",
      "Si nos contactas, usaremos la información que compartas solo para responder tu mensaje.",
      "Cuando se agreguen mediciones o herramientas, esta página deberá explicar qué datos se recopilan y con qué propósito.",
    ],
  },
  "/contacto": {
    title: "Contacto",
    kicker: "Conversaciones reales",
    description:
      "Estamos validando necesidades rurales reales antes de construir funciones avanzadas.",
    sections: [
      "Puedes preparar un mensaje con tu municipio, tipo de propiedad, uso principal y problema actual de conexión.",
      "No compartas contraseñas, datos bancarios, documentos oficiales ni información sensible.",
      "Más adelante agregaremos un canal de contacto definitivo cuando el MVP público esté listo.",
    ],
  },
} as const;

export type PagePath = keyof typeof pages;
