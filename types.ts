export type Language = 'es' | 'en';

export interface Content {
  nav: {
    about: string;
    stack: string;
    education: string;
    contact: string;
    research: string;
    mentoring: string;
  };
  hero: {
    role: string;
    subrole: string;
    description: string;
    available: string;
    location: string;
  };
  about: {
    title: string;
    text: string;
  };
  stack: {
    title: string;
    subtitle: string;
    backend: string;
    frontend: string;
    ai: string;
    db: string;
  };
  education: {
    title: string;
    items: {
      degree: string;
      institution: string;
      year?: string;
    }[];
  };
  research: {
    title: string;
    role: string;
    group: string;
    area: string;
    ids: string;
  };
  mentoring: {
    title: string;
    description: string;
    price: string;
    step1_title: string;
    step2_title: string;
    step2_button: string;
    help_text: string;
  };
  contact: {
    title: string;
    text: string;
    cta: string;
    email_label: string;
  };
}