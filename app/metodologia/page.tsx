import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Proceso iterativo que fusiona pensamiento estratégico, ingeniería de precisión y estética de vanguardia.",
};

const steps = [
  {
    number: "01",
    icon: "radar",
    accent: "primary",
    title: "Descubrimiento y estrategia",
    description:
      "Iniciamos con una inmersión profunda en el núcleo de tu negocio. Auditamos sistemas existentes, analizamos la competencia y definimos indicadores claros. El resultado es un mapa de ruta estratégico que alinea la visión técnica con los objetivos comerciales a largo plazo.",
  },
  {
    number: "02",
    icon: "architecture",
    accent: "tertiary",
    title: "Diseño y prototipado",
    description:
      "Traducimos la estrategia en experiencias visuales y funcionales de alto impacto. Creamos sistemas de diseño escalables y prototipos interactivos de alta fidelidad, permitiendo pruebas de usuario tempranas y validación antes de escribir una sola línea de código.",
  },
  {
    number: "03",
    icon: "terminal",
    accent: "primary-container",
    title: "Desarrollo Ágil",
    description:
      "Ejecutamos en ciclos de dos semanas. Nuestro equipo de ingenieros aplica metodologías ágiles estrictas, integración y entrega continuas, y revisiones de código exhaustivas para asegurar un software robusto, seguro y de alto rendimiento.",
  },
  {
    number: "04",
    icon: "rocket_launch",
    accent: "secondary",
    title: "Lanzamiento y soporte",
    description:
      "Despliegue orquestado con cero tiempo de inactividad. Posterior al lanzamiento, proporcionamos monitoreo continuo 24/7, optimización de rendimiento y soporte proactivo para asegurar que el sistema escale junto con el crecimiento de tu empresa.",
  },
] as const;

const accentClasses = {
  primary: {
    bar: "via-primary/20",
    number: "group-hover/card:text-primary",
    icon: "group-hover/card:bg-primary group-hover/card:text-on-primary",
    title: "group-hover/card:text-primary",
  },
  tertiary: {
    bar: "via-tertiary/20",
    number: "group-hover/card:text-tertiary",
    icon: "group-hover/card:bg-tertiary group-hover/card:text-on-tertiary",
    title: "group-hover/card:text-tertiary",
  },
  "primary-container": {
    bar: "via-primary-container/20",
    number: "group-hover/card:text-primary-container",
    icon: "group-hover/card:bg-primary-container group-hover/card:text-on-primary-container",
    title: "group-hover/card:text-primary-container",
  },
  secondary: {
    bar: "via-secondary/20",
    number: "group-hover/card:text-secondary",
    icon: "group-hover/card:bg-secondary group-hover/card:text-on-secondary",
    title: "group-hover/card:text-secondary",
  },
} as const;

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[100px] mix-blend-screen transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-18 pb-2 md:pt-24 md:pb-32 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
          <h1 className="w-full max-w-full font-display-lg text-[42px] leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-on-surface to-on-surface-variant md:text-display-lg md:leading-tight md:tracking-tighter">
            Nuestra
            <br />
            Metodología
          </h1>
          <p className="font-body-lg text-[17px] leading-relaxed text-on-surface-variant max-w-2xl md:text-body-lg">
            En Jampe, no solo construimos software; diseñamos ecosistemas digitales resilientes.
            Nuestro proceso iterativo fusiona pensamiento estratégico, ingeniería de precisión y
            estética de vanguardia para transformar visiones complejas en realidades tangibles y
            escalables.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-12 md:py-32 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
            {steps.map((step) => {
              const accent = accentClasses[step.accent];
              return (
                <div
                  key={step.number}
                  className="relative bg-surface-container rounded-2xl p-6 md:p-8 hover:bg-surface-container-high transition-all duration-500 ease-out md:group-hover:opacity-50 hover:!opacity-100 cursor-pointer overflow-hidden group/card"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${accent.bar} to-transparent transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000`}
                  />
                  <div className="flex flex-col h-full gap-6 md:gap-12">
                    <div className="flex justify-between items-start">
                      <span
                        className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl text-surface-variant ${accent.number} transition-colors duration-300`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center ${accent.icon} transition-colors duration-300`}
                      >
                        <Icon name={step.icon} className="text-[24px]" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3
                        className={`font-headline-md text-headline-md text-on-surface ${accent.title} transition-colors duration-300`}
                      >
                        {step.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed md:line-clamp-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-12 md:py-32 relative z-10 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1 space-y-6 md:space-y-8 w-full">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
              Precisión en cada
              <br />
              fase del ciclo
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Nuestro panel de progreso en tiempo real permite a los clientes visualizar el
              estado de cada iteración, métricas de calidad de código y cobertura de pruebas. La
              transparencia radical es el núcleo de nuestro modelo operativo.
            </p>
            <div className="flex flex-col gap-6 pt-4">
              <div className="bg-surface-container-low p-4 md:p-6 rounded-xl flex items-center gap-4 md:gap-6 group hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <Icon name="check_circle" className="text-[28px]" />
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface text-[18px]">
                    Cobertura de Pruebas
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[14px]">
                    Pruebas unitarias y de extremo a extremo
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 md:p-6 rounded-xl flex items-center gap-4 md:gap-6 group hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
                  <Icon name="hub" className="text-[28px]" />
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface text-[18px]">
                    Disponibilidad garantizada
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-[14px]">
                    Arquitectura en la nube resiliente
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-surface-container-high shadow-xl relative group">
              <div
                className="bg-cover bg-center w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url("${images.methodology}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-surface/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-2xl border border-white/5 transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                    <Icon name="integration_instructions" className="text-[22px]" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-caps text-label-caps text-primary block mb-2">
                      ITERACIÓN ACTUAL
                    </span>
                    <span className="font-headline-md text-[16px] leading-snug md:text-headline-md text-on-surface">
                      Fase 3: Integración de API
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
