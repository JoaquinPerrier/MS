import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full font-body-md text-on-surface bg-surface overflow-x-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-margin-mobile lg:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-tertiary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse"
            style={{ animationDuration: "12s" }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path
                  className="text-on-surface"
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container/50 backdrop-blur-md border border-white/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Ingeniería Digital de Precisión
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter max-w-4xl leading-tight">
              Arquitectura <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x">
                Visual y Lógica.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Potenciamos la presencia digital de tu empresa con sitios modernos y soluciones a
              medida que optimizan tus procesos y simplifican tu día a día. Construimos el futuro de
              tu marca con rigor técnico y diseño excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-all duration-300 shadow-[0_0_20px_rgba(207,188,255,0.3)] hover:shadow-[0_0_30px_rgba(207,188,255,0.5)] group"
                href="/contacto"
              >
                Iniciar Proyecto
                <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-on-surface rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-all duration-300 border border-white/10"
                href="/servicios"
              >
                Explorar Servicios
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:flex justify-end relative perspective-1000">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container border border-white/5 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="Visualización abstracta de arquitectura digital"
                src={images.hero}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile lg:px-margin-desktop bg-surface relative z-10" id="servicios">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
                Competencias Core
              </h2>
              <h3 className="font-headline-xl text-headline-xl text-on-surface">
                Soluciones Integrales para la Era Digital
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md text-right hidden md:block">
              Fusionamos ingeniería robusta con diseño estratégico para crear ecosistemas digitales
              que escalan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="group relative p-8 md:p-12 bg-surface-container rounded-3xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high border border-white/5 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-primary mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon name="terminal" className="text-[32px]" />
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Desarrollo de Software
                </h4>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Arquitecturas modernas, escalables y seguras. Desde aplicaciones web complejas
                  hasta sistemas internos que automatizan tus operaciones empresariales.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Aplicaciones Web & Móviles", "Integración de APIs", "Arquitectura Cloud"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-label-caps text-on-surface"
                      >
                        <Icon name="check_circle" className="text-primary text-[16px]" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-48 object-cover rounded-xl border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity mix-blend-luminosity"
                    alt="Visualización abstracta de código y arquitectura de software"
                    src={images.software}
                  />
                </div>
              </div>
            </div>
            <div className="group relative p-8 md:p-12 bg-surface-container rounded-3xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high border border-white/5 hover:border-tertiary/30 mt-0 md:mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-tertiary/10 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-tertiary mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon name="design_services" className="text-[32px]" />
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Branding & Diseño
                </h4>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Identidad visual con impacto. Diseñamos interfaces intuitivas (UI/UX) y narrativas
                  de marca que conectan emocionalmente y convierten usuarios en clientes.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Diseño UI/UX Avanzado", "Identidad Corporativa", "Sistemas de Diseño"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-label-caps text-on-surface"
                      >
                        <Icon name="check_circle" className="text-tertiary text-[16px]" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-48 object-cover rounded-xl border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity mix-blend-luminosity"
                    alt="Mockup de branding de alto impacto"
                    src={images.branding}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4">
                Metodología
              </h2>
              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-6">
                Proceso de Ingeniería Iterativa
              </h3>
              <p className="font-body-md text-on-surface-variant mb-10 max-w-lg">
                No creemos en el azar. Nuestro enfoque está basado en datos, sprints estructurados y
                colaboración continua. Desde la concepción hasta el despliegue, cada paso es
                calculable y transparente.
              </p>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-white/10">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-highest border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(207,188,255,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <h4 className="font-headline-md text-[20px] text-on-surface mb-2">
                    1. Discovery & Estrategia
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Análisis profundo de requerimientos, auditoría técnica y definición de KPIs
                    clave para el éxito del proyecto.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container border border-white/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                  <h4 className="font-headline-md text-[20px] text-on-surface mb-2">
                    2. Diseño & Prototipado
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Creación de wireframes de alta fidelidad, flujos de usuario y sistemas de
                    diseño escalables.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container border border-white/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                  <h4 className="font-headline-md text-[20px] text-on-surface mb-2">
                    3. Desarrollo Ágil
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Sprints quincenales, integración continua (CI/CD) y revisiones de código
                    exhaustivas.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl bg-surface-container-high border border-white/5 overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent opacity-50 z-0" />
              <div className="relative w-full max-w-sm aspect-square z-10">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-white/5"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    className="text-primary transition-all duration-1000 ease-out"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="45"
                    stroke="currentColor"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    strokeWidth="4"
                  />
                  <circle
                    className="text-white/5"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    className="text-tertiary transition-all duration-1000 ease-out delay-100"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="35"
                    stroke="currentColor"
                    strokeDasharray="220"
                    strokeDashoffset="110"
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display-lg text-4xl text-on-surface">75%</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest mt-2">
                    VELOCIDAD DE
                    <br />
                    DESPLIEGUE
                  </span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 left-8 bg-surface/80 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-caps text-xs text-on-surface">Sprint Actual</span>
                  <span className="font-label-caps text-xs text-primary">En Progreso</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[65%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-margin-mobile lg:px-margin-desktop bg-surface relative" id="contacto">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-container-high border border-white/5 mb-8 text-primary shadow-[0_0_30px_rgba(207,188,255,0.1)]">
            <Icon name="rocket_launch" className="text-[32px]" />
          </div>
          <h2 className="font-display-lg text-headline-xl md:text-display-lg text-on-surface mb-6 tracking-tight">
            ¿Listo para transformar <br /> tu infraestructura?
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Cuéntanos sobre tu visión. Nuestro equipo de ingenieros y diseñadores está listo para
            analizar tu caso y proponer la arquitectura óptima para tus objetivos.
          </p>
          <ContactForm variant="home" />
        </div>
      </section>
    </div>
  );
}
