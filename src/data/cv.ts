export const profile = {
  name: "Jack Joshua Sivipaucar Quilluya",
  title: "Programador Web | WordPress | JavaScript | PHP | MySQL | Odoo | FrontEnd | IA",
  tagline: "Desarrollador Web FrontEnd con nociones de BackEnd",
  location: "Lima, Perú",
  phone: "934099199",
  email: "jack.sivipaucar17@gmail.com",
  linkedin: "https://www.linkedin.com/in/jack-joshua-sivipaucar-quilluya-294495229",
  github: "https://github.com/JackJoshua10",
  cvUrl: "/CV-Jack-Sivipaucar.pdf",
  summary: [
    "Desarrollador Web Frontend con nociones de BackEnd.",
    "Capacidades técnicas en JavaScript, React, Tailwind, PHP, MySQL, API RESTful, WordPress.",
    "Integraciones con ERP Odoo.",
    "Mejora de productividad con IA Claude (para reducir la deuda técnica).",
    "Experiencia en documentación técnica, diagramación de procesos y trabajo en metodologías ágiles (Scrum).",
    "Gestión de versiones con Git/GitHub.",
    "Actualmente a cargo de la página web de SONIEM (Sociedad Nacional de Intérpretes y Ejecutantes de la Música).",
    "Conocimientos académicos de BackEnd (Java).",
  ],
};

export const skills = {
  Lenguajes: ["JavaScript", "HTML5", "CSS3", "PHP", "SQL", "Java (básico)"],
  "Frameworks / Librerías": ["React", "Tailwind CSS", "Bootstrap"],
  "Backend & APIs": ["APIs RESTful", "MySQL", "Odoo (ERP)"],
  Herramientas: ["Git", "GitHub", "VS Code", "IA Claude", "Rank Math SEO"],
  Metodologías: ["Scrum", "MVC"],
};

export const experience = [
  {
    period: "01/2026 – Actual",
    role: "Programador Web | WordPress | JavaScript | PHP | MySQL | Odoo | FrontEnd | IA",
    company: "Vape Station",
    bullets: [
      "Desarrollo y mantenimiento de soluciones utilizando JavaScript, PHP, CSS, MySQL y XML.",
      "Gestión y optimización del sitio web en WordPress (apoyado en IA Claude).",
      "Implementación de estrategias de SEO para mejorar la visibilidad del sitio (Rank Math SEO).",
      "Colaboración con equipos de Marketing B2B/B2C para asegurar la integración de sistemas y soluciones.",
      "Gestión de carga de productos y promociones en la web y en ecommerce de stakeholders.",
      "Modificación de características de productos en la web y en el CRM (Odoo).",
      "Identificación y corrección de errores, y optimización del rendimiento del software.",
    ],
  },
  {
    period: "04/2025 – 12/2025",
    role: "Desarrollador Programador FrontEnd con nociones BackEnd",
    company: "Mi Plataforma de Desarrollos (Proyectos Personales)",
    bullets: [
      "Portafolio Personal: https://portafolio-zeta-nine-85.vercel.app",
      "LinkTree Personal: https://jackjoshua10.github.io/LinktreeJackJoshua",
      "Logro principal: crear mi marca personal a partir de mis desarrollos, hasta volver a tener oportunidades con clientes, avanzando en técnica y visión de negocio.",
    ],
  },
  {
    period: "09/2024 – 03/2025",
    role: "Desarrollador Programador Frontend",
    company: "Fundación Calma",
    bullets: [
      "Desarrollo y mantenimiento de interfaces web y móviles usando HTML, CSS y JavaScript.",
      "Integración de APIs RESTful para funcionalidades clave de la plataforma de apoyo y voluntariado.",
      "Logro principal: mejora del 20% en la tasa de finalización al implementar interfaces más ágiles e intuitivas.",
    ],
  },
  {
    period: "04/2024 – 05/2024",
    role: "Desarrollador Web",
    company: "SONIEM (Sociedad Nacional de Intérpretes y Ejecutantes de la Música)",
    bullets: [
      "Desarrollo de landing page con HTML, CSS y JavaScript para el I Congreso de la Industria Musical en el Perú.",
      "Implementación de diseño responsivo para dispositivos móviles y de escritorio.",
      "Soporte continuo y migración de base de datos.",
      "Logro principal: landing page que facilitó la inscripción de más de 500 participantes.",
    ],
  },
  {
    period: "10/2023 – 12/2023",
    role: "Desarrollador FrontEnd",
    company: "Proyecto Académico UTP",
    bullets: [
      "Desarrollo de sistema académico de notas con HTML, CSS, JavaScript, PHP y MySQL, aplicando MVC.",
      "Trabajo en equipo bajo metodología Scrum y control de versiones con Git/GitHub.",
      "Logro principal: sistema funcional para la gestión estructurada de calificaciones.",
    ],
  },
];

export const education = {
  degree: "Ingeniería de Sistemas e Informática",
  school: "Universidad Tecnológica del Perú (UTP)",
  period: "2021 – 2026",
  extra: [
    { period: "06/2024 – 07/2024", title: "Desarrollo Web", school: "Udemy" },
    { period: "01/2024 – 05/2024", title: "Especialización en Desarrollo Backend", school: "IDAT" },
    { period: "05/2023 – 10/2023", title: "Especialista en Excel", school: "IDAT" },
  ],
};

export const projects = [
  {
    title: "Congreso de la Industria Musical del Perú (SONIEM)",
    description:
      "Landing page responsiva para el I Congreso de la Industria Musical en el Perú, con diseño optimizado para inscripciones.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://www.cimp.soniemperu.com",
    highlight: "+500 participantes inscritos",
  },
  {
    title: "Portafolio Personal",
    description: "Sitio de marca personal con proyectos, experiencia y contacto.",
    tags: ["React", "Vercel"],
    link: "https://portafolio-zeta-nine-85.vercel.app",
  },
  {
    title: "LinkTree Personal",
    description: "Página de enlaces con mis redes y proyectos principales.",
    tags: ["GitHub Pages"],
    link: "https://jackjoshua10.github.io/LinktreeJackJoshua",
  },
  {
    title: "Plataforma Fundación Calma",
    description:
      "Interfaces web y móviles para una plataforma de apoyo y voluntariado, con integración de APIs RESTful.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    highlight: "+20% tasa de finalización",
  },
  {
    title: "Sistema Académico de Notas (UTP)",
    description: "Sistema de gestión de calificaciones desarrollado en equipo aplicando el patrón MVC.",
    tags: ["PHP", "MySQL", "MVC", "Scrum"],
  },
];

const skillCount = Object.values(skills).reduce((total, items) => total + items.length, 0);

export const stats = [
  { value: "2+", label: "Años de experiencia" },
  { value: `${projects.length}`, label: "Proyectos entregados" },
  { value: `${skillCount}+`, label: "Tecnologías y herramientas" },
  { value: "5", label: "Empresas / proyectos con clientes" },
];

export const capabilities = [
  {
    title: "Frontend con React & Tailwind",
    description: "Interfaces ágiles e intuitivas con JavaScript, React y Tailwind CSS.",
    icon: "code",
  },
  {
    title: "Integraciones con Odoo (ERP)",
    description: "Conecto la web con el CRM/ERP para gestionar productos y procesos.",
    icon: "cube",
  },
  {
    title: "Productividad con IA (Claude)",
    description: "Uso IA en el flujo de desarrollo para reducir deuda técnica.",
    icon: "sparkles",
  },
  {
    title: "Ágil: Scrum, Git/GitHub",
    description: "Documentación técnica, diagramación de procesos y control de versiones.",
    icon: "cycle",
  },
];
