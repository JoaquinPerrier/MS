import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Software Factory y Branding & Publicidad. Dos pilares para empresas que exigen excelencia.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <section className="w-full relative px-margin-mobile lg:px-margin-desktop py-24 md:py-32 flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30 pointer-events-none">
          <div
            className="w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[100px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-4xl tracking-tighter">
          Donde la ingeniería se encuentra con el{" "}
          <span className="text-primary italic font-serif">diseño de élite</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Nuestros servicios están diseñados para empresas que exigen excelencia. Dividimos nuestro
          expertise en dos pilares fundamentales: la construcción robusta de software y la
          proyección magnética de marcas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contacto"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-tint hover:shadow-lg transition-all duration-300"
          >
            Inicia tu proyecto
          </Link>
          <Link
            href="/proyectos"
            className="bg-transparent border border-outline text-on-surface px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-all duration-300"
          >
            Ver casos de estudio
          </Link>
        </div>
      </section>

      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="group relative flex flex-col bg-surface-container rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="h-80 w-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${images.softwareFactory}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest text-xs opacity-70">
                  Pilar 01
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex-1 flex flex-col relative z-10 -mt-20">
              <div className="w-16 h-16 rounded-2xl bg-surface/80 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl">
                <Icon name="code" className="text-primary text-3xl" />
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
                Software Factory
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                Arquitectura de sistemas escalables y desarrollo de aplicaciones de alto
                rendimiento. Construimos el núcleo tecnológico que impulsa tu negocio hacia el
                futuro.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <Icon name="web" className="text-primary text-xl mt-1 opacity-80" />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Web Apps & Plataformas
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Soluciones web complejas, paneles de control y SaaS con arquitecturas modernas
                      (React, Vue, Node.js).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Icon
                    name="integration_instructions"
                    className="text-primary text-xl mt-1 opacity-80"
                  />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Sistemas Customizados
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Integraciones API, automatización de procesos empresariales y migración a
                      infraestructuras cloud.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="smartphone" className="text-primary text-xl mt-1 opacity-80" />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Aplicaciones Móviles
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Experiencias nativas e híbridas fluidas para iOS y Android que capturan la
                      atención del usuario.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {["React", "Node.js", "AWS", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[11px] tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-surface-container rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-2 lg:mt-16">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="h-80 w-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${images.brandingPillar}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest text-xs opacity-70">
                  Pilar 02
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex-1 flex flex-col relative z-10 -mt-20">
              <div className="w-16 h-16 rounded-2xl bg-surface/80 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl">
                <Icon name="brush" className="text-tertiary text-3xl" />
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
                Branding & Publicidad
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                Forjamos identidades visuales inolvidables y estrategias de comunicación que
                resuenan. Elevamos la percepción de tu marca en un mercado ruidoso.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <Icon name="fingerprint" className="text-tertiary text-xl mt-1 opacity-80" />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Diseño de Identidad
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Logotipos, sistemas de diseño, guías de estilo y dirección de arte que
                      comunican tu esencia.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="campaign" className="text-tertiary text-xl mt-1 opacity-80" />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Campañas Publicitarias
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Creatividad multicanal, performance marketing y activaciones digitales de alto
                      impacto visual.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="edit_document" className="text-tertiary text-xl mt-1 opacity-80" />
                  <div>
                    <h3 className="font-headline-md text-[20px] leading-tight text-on-surface mb-1">
                      Estrategia de Contenido
                    </h3>
                    <p className="font-body-md text-[14px] text-on-surface-variant">
                      Narrativas de marca, copywriting persuasivo y producción de medios (video,
                      fotografía, motion graphics).
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {["Figma", "Motion", "SEO", "Social"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[11px] tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-24 border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="w-full md:w-1/2 max-w-xl">
              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-6">
                El enfoque integral
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                No operamos en silos. Nuestros ingenieros entienden de estética, y nuestros
                diseñadores entienden de sistemas. Esta sinergia crea productos digitales superiores.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-primary font-label-caps text-label-caps hover:text-surface-tint transition-colors uppercase tracking-widest group"
                href="/metodologia"
              >
                Conoce nuestra metodología
                <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="grid grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col">
                  <span className="font-display-lg text-display-lg text-on-surface tracking-tighter">
                    98<span className="text-primary">%</span>
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-2">
                    Retención de clientes
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display-lg text-display-lg text-on-surface tracking-tighter">
                    50<span className="text-tertiary">+</span>
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-2">
                    Lanzamientos exitosos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
