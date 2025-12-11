import { Content, Language } from './types';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook, 
  FileText,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/ViktorJJF",
    icon: Github,
    label: "@ViktorJJF"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/victorjuanjimenez",
    icon: Linkedin,
    label: "Victor Juan Jimenez"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/ViktorJimenezF",
    icon: Youtube,
    label: "Viktor Jimenez"
  },
  {
    name: "CTI Vitae",
    url: "http://directorio.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=8ae6dff7b37a88a7e9a3bb05f313?id_investigador=108504",
    icon: FileText,
    label: "CTI Vitae"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/viktorjjf/",
    icon: Instagram,
    label: "@viktorjjf"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/viktorjjf",
    icon: Facebook,
    label: "Viktor Jimenez"
  }
];

export const PROFILE_IMAGE = "/profile_me.jpg";

export const CONTENT: Record<Language, Content> = {
  es: {
    nav: {
      about: "Sobre mí",
      stack: "Tecnologías",
      education: "Formación",
      research: "Investigación",
      mentoring: "Asesoría",
      contact: "Contacto"
    },
    hero: {
      role: "Full Stack Developer & Cognitive Developer",
      subrole: "Ingeniero en Informática y Sistemas | Dr. en Administración",
      description: "Especialista en desarrollo web (MEVN Stack) y creación de agentes de IA. Transformo ideas complejas en software inteligente y escalable.",
      available: "Disponible para proyectos",
      location: "Perú"
    },
    about: {
      title: "Perfil Profesional",
      text: "Soy Ingeniero en Informática y Sistemas de la Universidad Nacional Jorge Basadre Grohmann. Cuento con sólida experiencia como Full Stack Developer, utilizando principalmente Python y Node.js. Mi enfoque actual se centra en tecnologías de Inteligencia Artificial, desarrollando chatbots, asistentes virtuales y arquitecturas RAG para startups. Poseo un MBA y un Doctorado en Administración, lo que me permite tener una visión estratégica de negocios aplicada al desarrollo de software."
    },
    stack: {
      title: "Stack Tecnológico",
      subtitle: "Herramientas y tecnologías que domino",
      backend: "Backend & Lenguajes",
      frontend: "Frontend & UI",
      ai: "Inteligencia Artificial",
      db: "Bases de Datos & DevOps"
    },
    education: {
      title: "Formación Académica",
      items: [
        {
          degree: "Doctor en Administración",
          institution: "Universidad César Vallejo",
          year: "2024"
        },
        {
          degree: "Master of Business Administration (MBA)",
          institution: "Neumann Business School",
          year: "2021"
        },
        {
          degree: "Ingeniero en Informática y Sistemas",
          institution: "Universidad Nacional Jorge Basadre Grohmann",
          year: "2018"
        }
      ]
    },
    research: {
      title: "Investigación & Ciencia",
      role: "Investigador RENACYT",
      group: "Grupo María Rostworowski III - Código P0108504",
      area: "Área de investigación: Inteligencia artificial y desarrollo de software inteligente.",
      ids: "Scopus Author ID: 57219005617 | ORCID: 0000-0002-1034-9447"
    },
    mentoring: {
      title: "Asesoría 1:1",
      description: "Sesión personalizada de 60 minutos sobre desarrollo web, inteligencia artificial, arquitectura de software o desarrollo de carrera profesional.",
      price: "Inversión: $33 USD",
      step1_title: "Paso 1: Pago Seguro",
      step2_title: "Paso 2: Agendar Sesión",
      step2_button: "Reservar horario en Calendly",
      help_text: "Si tienes algún problema con el pago o la reserva, escríbeme a vj.jimenez96@gmail.com y te ayudo."
    },
    contact: {
      title: "Vamos a trabajar juntos",
      text: "Actualmente estoy creando agentes de IA en WhatsApp e Instagram Messenger. ¿Tienes un proyecto en mente? Contáctame.",
      cta: "Enviar correo",
      email_label: "vj.jimenez96@gmail.com"
    }
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      education: "Education",
      research: "Research",
      mentoring: "Mentoring",
      contact: "Contact"
    },
    hero: {
      role: "Full Stack Developer & Cognitive Developer",
      subrole: "Computer Engineer | PhD in Administration",
      description: "Specialist in web development (MEVN Stack) and AI agent creation. I transform complex ideas into intelligent, scalable software.",
      available: "Available for projects",
      location: "Peru"
    },
    about: {
      title: "Professional Profile",
      text: "I am a Computer and Systems Engineer from the National University Jorge Basadre Grohmann. I have solid experience as a Full Stack Developer, primarily using Python and Node.js. My current focus is on Artificial Intelligence technologies, developing chatbots, virtual assistants, and RAG architectures for startups. I hold an MBA and a PhD in Administration, allowing me to apply a strategic business vision to software development."
    },
    stack: {
      title: "Tech Stack",
      subtitle: "Tools and technologies I command",
      backend: "Backend & Languages",
      frontend: "Frontend & UI",
      ai: "Artificial Intelligence",
      db: "Databases & DevOps"
    },
    education: {
      title: "Academic Background",
      items: [
        {
          degree: "PhD in Administration",
          institution: "César Vallejo University",
          year: "2024"
        },
        {
          degree: "Master of Business Administration (MBA)",
          institution: "Neumann Business School",
          year: "2021"
        },
        {
          degree: "Computer and Systems Engineer",
          institution: "National University Jorge Basadre Grohmann",
          year: "2018"
        }
      ]
    },
    research: {
      title: "Research & Science",
      role: "RENACYT Researcher",
      group: "María Rostworowski III Group - Code P0108504",
      area: "Research Area: Artificial Intelligence and Intelligent Software Development.",
      ids: "Scopus Author ID: 57219005617 | ORCID: 0000-0002-1034-9447"
    },
    mentoring: {
      title: "1:1 Mentoring",
      description: "Personalized 60-minute session on web development, artificial intelligence, software architecture, or professional career path.",
      price: "Price: $33 USD",
      step1_title: "Step 1: Secure Payment",
      step2_title: "Step 2: Schedule Session",
      step2_button: "Book time on Calendly",
      help_text: "If you have any issues with payment or booking, email me at vj.jimenez96@gmail.com and I will help you."
    },
    contact: {
      title: "Let's work together",
      text: "Currently building AI agents for WhatsApp and Instagram Messenger. Have a project in mind? Get in touch.",
      cta: "Send Email",
      email_label: "vj.jimenez96@gmail.com"
    }
  }
};