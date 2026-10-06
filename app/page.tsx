import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full font-body-md text-on-surface bg-surface overflow-x-hidden">
      <section className="relative flex items-center justify-center pt-4 pb-2 md:min-h-[90vh] md:pt-32 md:pb-24 px-margin-mobile lg:px-margin-desktop overflow-hidden">
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
          <div className="lg:col-span-8 flex flex-col items-start space-y-4 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container/50 backdrop-blur-md border border-white/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Ingeniería de Desarrollo
              </span>
            </div>
            <h1 className="w-full max-w-full font-display-lg text-[42px] leading-[1.05] tracking-tight text-on-surface md:max-w-4xl md:text-display-lg md:leading-tight md:tracking-tighter">
              Diseño,
              <br className="md:hidden" />
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x">
                Código y <br className="md:hidden" />Estrategia.
              </span>
            </h1>
            <p className="font-body-lg text-[17px] leading-relaxed text-on-surface-variant max-w-2xl md:text-body-lg">
              Potenciamos la presencia digital de tu empresa con sitios modernos y soluciones a
              medida que optimizan tus procesos y simplifican tu día a día. Construimos el futuro de
              tu marca con rigor técnico y diseño excepcional.
            </p>
            <div className="flex w-full flex-row-reverse gap-2 sm:w-auto sm:flex-row sm:gap-4 sm:pt-4">
              <Link
                className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-3 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-all duration-300 shadow-[0_0_20px_rgba(207,188,255,0.3)] hover:shadow-[0_0_30px_rgba(207,188,255,0.5)] group sm:flex-none sm:gap-2 sm:px-8 sm:py-4"
                href="/contacto"
              >
                Iniciar Proyecto
                <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                className="inline-flex flex-1 items-center justify-center gap-2 px-3 py-3 bg-transparent text-on-surface rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-all duration-300 border border-white/10 sm:flex-none sm:px-8 sm:py-4"
                href="/servicios"
              >
                Explorar Servicios
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-end relative perspective-1000">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container border border-white/5 transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out shadow-2xl">
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

      <section className="py-10 md:py-16 px-margin-mobile lg:px-margin-desktop bg-surface relative z-10" id="servicios">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
                Competencias clave
              </h2>
              <h3 className="max-w-full font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
                Soluciones Integrales para la Era Digital
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md text-right hidden md:block">
              Fusionamos ingeniería robusta con diseño estratégico para crear ecosistemas digitales
              que escalan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:items-stretch">
            <div className="group relative h-full flex flex-col p-8 md:p-12 bg-surface-container rounded-3xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high border border-white/5 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10 flex flex-1 flex-col min-h-0">
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
                  {["Aplicaciones web y móviles", "Integración de APIs", "Arquitectura en la nube"].map(
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
            <div className="group relative h-full flex flex-col p-8 md:p-12 bg-surface-container rounded-3xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high border border-white/5 hover:border-tertiary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-tertiary/10 transition-colors" />
              <div className="relative z-10 flex flex-1 flex-col min-h-0">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-tertiary mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon name="design_services" className="text-[32px]" />
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Marca y diseño
                </h4>
                <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                  Identidad visual con impacto. Diseñamos interfaces intuitivas y narrativas
                  de marca que conectan emocionalmente y convierten usuarios en clientes.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Diseño de interfaces avanzado", "Identidad corporativa", "Sistemas de diseño"].map(
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
                    alt="Vista previa de identidad de marca de alto impacto"
                    src={images.branding}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-margin-mobile lg:px-margin-desktop bg-surface relative" id="contacto">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-container-high border border-white/5 mb-8 text-primary shadow-[0_0_30px_rgba(207,188,255,0.1)]">
            <Icon name="rocket_launch" className="text-[32px]" />
          </div>
          <h2 className="max-w-full font-display-lg text-headline-xl-mobile md:text-display-lg text-on-surface mb-6 tracking-tight">
            ¿Listo para transformar <br className="hidden md:block" /> tu infraestructura?
          </h2>
          <ContactForm variant="home" />
        </div>
      </section>
    </div>
  );
}
