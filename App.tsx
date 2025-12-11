import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Globe, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Database, 
  Layout,
  Code2,
  Calendar,
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { CONTENT, SOCIALS, PROFILE_IMAGE } from './constants';
import { Language } from './types';

// --- Reusable UI Components ---

const Card: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-black/50 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
    {children}
  </span>
);

const SectionTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
    {children}
  </h2>
);

// --- PayPal Component ---
// Renders the exact HTML provided by the user
const PayPalButton = () => (
  <div dangerouslySetInnerHTML={{ __html: `
    <div>
      <style>.pp-K9KSZPATG3C9Q{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
      <form action="https://www.paypal.com/ncp/payment/K9KSZPATG3C9Q" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
        <input class="pp-K9KSZPATG3C9Q" type="submit" value="Comprar ahora" />
        <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
        <section style="font-size: 0.75rem;"> Con la tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
      </form>
    </div>
  `}} />
);

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    setMounted(true);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    const userLang = navigator.language.startsWith('es') ? 'es' : 'en';
    setLang(userLang);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  const t = CONTENT[lang];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      
      {/* Sticky Navigation / Controls */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tighter">
            VJJF<span className="text-neutral-400">.dev</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium flex items-center gap-1.5"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 mx-1"></div>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start animate-fade-in-up">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-xl ring-2 ring-neutral-200 dark:ring-neutral-800">
              <img 
                src={PROFILE_IMAGE} 
                alt="Victor Jimenez" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-neutral-950 shadow-sm" title={t.hero.available}></div>
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2">
                Victor Juan Jimenez Flores
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                {t.hero.role}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center justify-center md:justify-start gap-1 mt-1">
                <MapPin size={14} /> {t.hero.location} • {t.hero.subrole}
              </p>
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 group relative"
                  title={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <SectionTitle>{t.stack.title}</SectionTitle>
              <p className="text-neutral-500 -mt-4">{t.stack.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:border-neutral-400 dark:hover:border-neutral-600">
              <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                <Terminal size={24} />
                <h3 className="font-semibold text-lg">{t.stack.backend}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Node.js', 'TypeScript', 'Flask', 'Express'].map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>

            <Card className="hover:border-neutral-400 dark:hover:border-neutral-600">
              <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-purple-400">
                <Cpu size={24} />
                <h3 className="font-semibold text-lg">{t.stack.ai}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['OpenAI', 'Gemini', 'LangChain', 'RAG', 'Dialogflow', 'Watson Assistant', 'Langgraph'].map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>

            <Card className="hover:border-neutral-400 dark:hover:border-neutral-600">
              <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                <Layout size={24} />
                <h3 className="font-semibold text-lg">{t.stack.frontend}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Vue.js 3', 'React', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript'].map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>

            <Card className="hover:border-neutral-400 dark:hover:border-neutral-600">
              <div className="flex items-center gap-3 mb-4 text-orange-600 dark:text-orange-400">
                <Database size={24} />
                <h3 className="font-semibold text-lg">{t.stack.db}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Git', 'Docker'].map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ABOUT & RESEARCH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <SectionTitle>{t.about.title}</SectionTitle>
              <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>{t.about.text}</p>
              </div>
            </section>

            <section>
              <SectionTitle>{t.research.title}</SectionTitle>
              <Card className="bg-white dark:bg-neutral-900 border-l-4 border-l-yellow-500 dark:border-l-yellow-600">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white flex items-center gap-2">
                    <Code2 size={20} className="text-yellow-600" />
                    {t.research.role}
                  </h3>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{t.research.group}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.research.area}</p>
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                    {t.research.ids}
                  </div>
                </div>
              </Card>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <SectionTitle>{t.education.title}</SectionTitle>
              <div className="space-y-6 relative border-l border-neutral-200 dark:border-neutral-800 ml-3 pl-6">
                {t.education.items.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 ring-4 ring-white dark:ring-neutral-950"></div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white leading-tight mb-1">{item.degree}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{item.institution}</p>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">{item.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* MENTORING SECTION */}
        <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-900/50 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800">
          <SectionTitle>{t.mentoring.title}</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                {t.mentoring.description}
              </p>
              <div className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 font-semibold rounded-lg">
                {t.mentoring.price}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                {t.mentoring.help_text}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 space-y-6">
              
              {/* Step 1: Payment */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                  <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xs">1</div>
                  {t.mentoring.step1_title}
                </div>
                <div className="pl-8">
                  <PayPalButton />
                </div>
              </div>

              <div className="w-full h-px bg-neutral-100 dark:bg-neutral-800"></div>

              {/* Step 2: Scheduling */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                  <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xs">2</div>
                  {t.mentoring.step2_title}
                </div>
                <div className="pl-8">
                  <a 
                    href="https://calendly.com/viktorjjf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
                  >
                    <Calendar size={18} />
                    {t.mentoring.step2_button}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-8 md:p-12 text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight">{t.contact.title}</h2>
              <p className="text-neutral-300 dark:text-neutral-600 text-lg leading-relaxed">
                {t.contact.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`mailto:${t.contact.email_label}`} 
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail size={18} />
                  {t.contact.cta}
                </a>
                <a 
                  href="https://www.linkedin.com/in/victorjuanjimenez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-700 dark:border-neutral-300 text-neutral-300 dark:text-neutral-600 px-6 py-3 rounded-full font-medium hover:bg-white/10 dark:hover:bg-black/5 transition-colors"
                >
                  <ArrowUpRight size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hidden md:block opacity-10 dark:opacity-5">
              <Mail size={150} />
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} Victor Juan Jimenez Flores.
          </p>
          <div className="flex gap-6">
             {SOCIALS.slice(0,3).map(s => (
               <a key={s.name} href={s.url} target="_blank" rel="noopener" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                 {s.name}
               </a>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
}