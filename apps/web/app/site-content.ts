export const disclosure =
  "Este sitio es independiente de Starlink. Algunos enlaces son enlaces de referencia. Si realizas una compra elegible mediante uno de ellos, puedo recibir una recompensa de Starlink.";

export const siteUrl = "https://internetrural.mx";

export const lastVerified = "15 de septiembre de 2026";

export type SourceLink = {
  label: string;
  href: string;
};

type ContentSection = {
  heading: string;
  body: string;
};

type MvpPage = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  description: string;
  sections: ContentSection[];
  checklist?: string[];
  sources?: SourceLink[];
};

export type PagePath =
  | "/internet-rural"
  | "/starlink-mexico"
  | "/starlink-es-para-mi"
  | "/faq"
  | "/sobre-nosotros"
  | "/divulgacion"
  | "/privacidad"
  | "/contacto";

export const pages: Record<PagePath, MvpPage> = {
  "/internet-rural": {
    title: "Internet rural",
    metaTitle: "Internet rural para ranchos, fincas y casas de campo",
    metaDescription:
      "Guía independiente para comparar Internet fijo, celular, radioenlaces y satélite en zonas rurales de México.",
    kicker: "Guía base",
    description:
      "Compara opciones cuando el Internet fijo no llega, la señal celular falla o necesitas conectar una propiedad rural.",
    sections: [
      {
        heading: "Empieza por el uso real",
        body: "No es lo mismo querer WhatsApp y YouTube que depender de videollamadas, cámaras de seguridad, pagos de negocio o trabajo remoto. El uso define cuánto importa la estabilidad.",
      },
      {
        heading: "Compara lo disponible en tu zona",
        body: "Revisa fibra o cobre si existen, Internet celular, radioenlaces locales y satélite. En muchos ranchos la mejor opción no es la más anunciada, sino la que realmente llega y se mantiene estable.",
      },
      {
        heading: "Calcula el costo completo",
        body: "Incluye equipo, mensualidad, instalación, soportes, cableado, energía eléctrica, router adicional si la propiedad es grande y cualquier costo de cancelación o cambio.",
      },
    ],
    checklist: [
      "Municipio, comunidad y tipo de propiedad.",
      "Uso principal: trabajo, escuela, cámaras, negocio o entretenimiento.",
      "Qué opciones ya probaste y por qué fallaron.",
      "Presupuesto mensual y costo inicial que sí puedes asumir.",
    ],
  },
  "/starlink-mexico": {
    title: "Starlink México",
    metaTitle: "Starlink México para zonas rurales: qué revisar antes de comprar",
    metaDescription:
      "Información independiente sobre Starlink en México, disponibilidad, instalación, obstrucciones, planes y puntos que debes confirmar en fuentes oficiales.",
    kicker: "Información independiente",
    description:
      "Punto de partida para entender cuándo Starlink puede ser una opción y qué debes confirmar en fuentes oficiales antes de comprar.",
    sections: [
      {
        heading: "Cuándo vale la pena investigarlo",
        body: "Starlink suele entrar en la conversación cuando no hay una conexión terrestre confiable, cuando la señal celular no alcanza o cuando la propiedad necesita Internet para trabajo, negocio o seguridad.",
      },
      {
        heading: "Qué no debes asumir",
        body: "No asumas precio, cobertura, velocidad, plan disponible ni recompensa de referido sin revisar la página oficial. Starlink indica que las velocidades máximas no están garantizadas y pueden bajar en congestión.",
      },
      {
        heading: "Instalación y vista al cielo",
        body: "Starlink requiere una vista despejada del cielo. La app oficial permite revisar obstrucciones como árboles, postes o techos antes de elegir el punto de instalación.",
      },
      {
        heading: "Energía y Wi-Fi dentro de la propiedad",
        body: "Además del kit, revisa energía estable, ubicación del router, paredes gruesas, distancia a cuartos o cámaras y si necesitarás cableado o equipo de red adicional.",
      },
    ],
    checklist: [
      "Consulta disponibilidad con la dirección exacta o zona aproximada.",
      "Revisa plan, equipo, mensualidad y términos vigentes.",
      "Escanea obstrucciones desde el punto donde instalarías el equipo.",
      "Confirma si el enlace de referido aplica a tu compra y país.",
    ],
    sources: [
      {
        label: "Starlink México: planes de servicio",
        href: "https://www.starlink.com/mx/service-plans",
      },
      {
        label: "Starlink: comprobar obstrucciones",
        href: "https://www.starlink.com/support/article/bcbf0078-be81-d345-4bce-ebbcfa196f56",
      },
      {
        label: "Starlink: programa de referidos",
        href: "https://www.starlink.com/support/article/eee7e99e-a736-f16e-9506-c446dd70fb16",
      },
    ],
  },
  "/starlink-es-para-mi": {
    title: "¿Starlink es para mí?",
    metaTitle: "¿Starlink es para mí? Evaluación inicial para zonas rurales",
    metaDescription:
      "Evalúa si Starlink puede ser una buena opción para tu rancho, finca, casa rural o negocio antes de gastar.",
    kicker: "Evaluación simple",
    description:
      "Una primera versión editorial para ayudarte a ordenar la decisión. La herramienta interactiva vendrá después como una fase separada.",
    sections: [
      {
        heading: "Buena opción para investigar",
        body: "No tienes Internet confiable, dependes de la conexión para algo importante y puedes instalar el equipo con vista despejada al cielo.",
      },
      {
        heading: "Posible opción, pero compara",
        body: "Tienes algo de Internet, pero falla para videollamadas, trabajo, cámaras o negocio. Revisa si una mejora celular, radioenlace o fibra local resuelve el problema con menor costo.",
      },
      {
        heading: "Probablemente no es la primera opción",
        body: "Ya tienes fibra o cable estable, tu presupuesto es muy sensible, no puedes instalar con seguridad o tu propiedad tiene demasiadas obstrucciones.",
      },
      {
        heading: "La decisión correcta puede ser esperar",
        body: "Si el gasto inicial te presiona o la necesidad no es urgente, conviene reunir datos, comparar alternativas y confirmar condiciones actuales antes de comprar.",
      },
    ],
    checklist: [
      "¿Tu conexión actual impide trabajar, estudiar, vender o vigilar la propiedad?",
      "¿Puedes colocar el equipo donde tenga cielo despejado?",
      "¿El costo total cabe en tu presupuesto sin comprometer gastos básicos?",
      "¿Revisaste al menos una alternativa local real?",
    ],
  },
  "/faq": {
    title: "Preguntas frecuentes",
    metaTitle: "Preguntas frecuentes sobre Internet rural y Starlink en México",
    metaDescription:
      "Respuestas claras sobre costo, lluvia, instalación, energía, cámaras, trabajo remoto y disponibilidad de Internet rural.",
    kicker: "Dudas comunes",
    description:
      "Respuestas iniciales sin promesas de precio, velocidad, cobertura ni disponibilidad.",
    sections: [
      {
        heading: "¿Cuánto cuesta Starlink en México?",
        body: "El precio puede cambiar por fecha, plan, ubicación, promociones y equipo. La forma responsable de responder es revisar los planes oficiales antes de decidir.",
      },
      {
        heading: "¿La lluvia afecta el servicio?",
        body: "Starlink describe sus equipos como resistentes a condiciones climáticas, pero cualquier conexión inalámbrica puede degradarse por clima extremo, obstrucciones, energía o congestión.",
      },
      {
        heading: "¿Sirve para cámaras de seguridad?",
        body: "Puede ser una opción si la conexión es estable, hay buena energía y el Wi-Fi llega a donde están las cámaras. También importa el consumo de datos, la ubicación del router y si necesitas acceso remoto.",
      },
      {
        heading: "¿Lo puedo instalar yo?",
        body: "Starlink lo presenta como autoinstalable, pero cada propiedad es distinta. Techos, postes, cableado, rayos, altura y seguridad personal pueden requerir ayuda profesional.",
      },
      {
        heading: "¿Necesita mucha luz?",
        body: "El consumo depende del kit, uso, temperatura y ubicación. Starlink publica rangos de potencia por tipo de equipo, así que conviene revisarlos si usas paneles solares, baterías o generador.",
      },
    ],
    sources: [
      {
        label: "Starlink: consumo de energía por kit",
        href: "https://www.starlink.com/support/article/18836c7e-2d97-6153-fe67-c18427bd0558",
      },
      {
        label: "Starlink México: planes de servicio",
        href: "https://www.starlink.com/mx/service-plans",
      },
      {
        label: "Starlink: obstrucciones",
        href: "https://www.starlink.com/support/article/bcbf0078-be81-d345-4bce-ebbcfa196f56",
      },
    ],
  },
  "/sobre-nosotros": {
    title: "Sobre nosotros",
    metaTitle: "Sobre Internet Rural México",
    metaDescription:
      "Conoce el propósito independiente de Internet Rural México: ayudar a zonas rurales a comparar conectividad antes de gastar.",
    kicker: "Independiente y útil",
    description:
      "Internet Rural México existe para ayudar a personas y negocios rurales a entender sus opciones antes de gastar.",
    sections: [
      {
        heading: "Enfoque inicial",
        body: "Empezamos con Tiquicheo, Michoacán y problemas comunes de ranchos, fincas, casas de campo y negocios rurales. La expansión vendrá cuando haya demanda real.",
      },
      {
        heading: "Cómo escribimos",
        body: "Explicamos costos, límites, instalación, alternativas y pasos de decisión con lenguaje claro. Evitamos promesas de velocidad, cobertura o resultados.",
      },
      {
        heading: "Cómo se monetiza",
        body: "La monetización inicial puede venir de referidos elegibles de Starlink. Eso exige transparencia: el sitio es independiente y debe seguir siendo útil aunque otra opción convenga más.",
      },
    ],
  },
  "/divulgacion": {
    title: "Divulgación",
    metaTitle: "Divulgación de enlaces de referencia",
    metaDescription:
      "Divulgación de independencia, relación de referidos y límites de Internet Rural México.",
    kicker: "Relación de referidos",
    description:
      "Transparencia sobre la independencia del sitio y los enlaces de referencia.",
    sections: [
      {
        heading: "Independencia",
        body: disclosure,
      },
      {
        heading: "Criterio editorial",
        body: "La existencia de una recompensa no cambia la obligación de explicar alternativas, límites y casos donde Starlink podría no convenir.",
      },
      {
        heading: "Responsabilidad del comprador",
        body: "Las decisiones de compra deben basarse en información vigente, necesidades reales y confirmación directa con el proveedor.",
      },
      {
        heading: "Referidos",
        body: "Starlink puede modificar, suspender o limitar su programa de referidos. También establece restricciones sobre elegibilidad, país, plan, disponibilidad y conducta fraudulenta.",
      },
    ],
    sources: [
      {
        label: "Starlink: programa de referidos",
        href: "https://www.starlink.com/support/article/eee7e99e-a736-f16e-9506-c446dd70fb16",
      },
    ],
  },
  "/privacidad": {
    title: "Privacidad",
    metaTitle: "Política de privacidad",
    metaDescription:
      "Política de privacidad inicial de Internet Rural México para el MVP.",
    kicker: "Versión inicial",
    description:
      "Política base para el MVP. Se actualizará si agregamos formularios, analítica avanzada o almacenamiento de datos.",
    sections: [
      {
        heading: "Datos mínimos",
        body: "En esta etapa el sitio no requiere cuentas de usuario ni base de datos propia para operar.",
      },
      {
        heading: "Contacto",
        body: "Si nos contactas, usaremos la información que compartas solo para responder tu mensaje.",
      },
      {
        heading: "Cambios futuros",
        body: "Cuando se agreguen mediciones, formularios o herramientas, esta página deberá explicar qué datos se recopilan, con qué propósito y cómo se protegen.",
      },
      {
        heading: "Datos sensibles",
        body: "No compartas contraseñas, datos bancarios, documentos oficiales, tarjetas, códigos de recuperación ni información que no sea necesaria para explicar tu problema de conectividad.",
      },
    ],
  },
  "/contacto": {
    title: "Contacto",
    metaTitle: "Contacto para Internet rural en México",
    metaDescription:
      "Comparte tu caso de conectividad rural para ayudar a validar necesidades reales del MVP.",
    kicker: "Conversaciones reales",
    description:
      "Estamos validando necesidades rurales reales antes de construir funciones avanzadas.",
    sections: [
      {
        heading: "Qué incluir",
        body: "Prepara tu municipio, comunidad aproximada, tipo de propiedad, uso principal y problema actual de conexión.",
      },
      {
        heading: "Qué no enviar",
        body: "No compartas contraseñas, datos bancarios, documentos oficiales, pagos, códigos de recuperación ni información sensible.",
      },
      {
        heading: "Canal definitivo",
        body: "Más adelante agregaremos un formulario o correo público cuando el MVP esté listo para recibir conversaciones de manera ordenada.",
      },
    ],
  },
};
