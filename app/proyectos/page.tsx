import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de estudio de software, plataformas y branding construidos con precisión.",
};

const projects = [
  {
    title: "Nexus Commerce",
    category: "Software Factory",
    year: "2025",
    description:
      "Plataforma de e-commerce B2B con catálogo dinámico, integraciones ERP y checkout de alto rendimiento.",
    tags: ["Next.js", "Node.js", "AWS"],
    image: images.softwareFactory,
    accent: "primary",
  },
  {
    title: "Aureum Identity",
    category: "Branding",
    year: "2025",
    description:
      "Sistema de identidad y UI kit para una marca de lujo, con motion guidelines y sitio editorial.",
    tags: ["Figma", "Motion", "Web"],
    image: images.brandingPillar,
    accent: "tertiary",
  },
  {
    title: "Pulse Ops",
    category: "Producto interno",
    year: "2024",
    description:
      "Dashboard operativo en tiempo real para orquestar sprints, métricas de calidad y despliegues.",
    tags: ["React", "Python", "Cloud"],
    image: images.methodology,
    accent: "secondary",
  },
  {
    title: "Atlas Finance",
    category: "Fintech",
    year: "2024",
    description:
      "Arquitectura visual y lógica para un core de pagos: paneles, APIs y experiencia mobile-first.",
    tags: ["React Native", "APIs", "UX"],
    image: images.hero,
    accent: "primary",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-24 pb-20 relative z-10">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
          Portafolio
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-4 mb-6 max-w-4xl">
          Proyectos con
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            precisión aplicada.
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Una selección de trabajos donde ingeniería, diseño y estrategia se encuentran para
          construir productos que escalan.
        </p>
      </section>

      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative bg-surface-container rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 ${
                index % 2 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <div className="h-72 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="font-label-caps text-label-caps text-on-surface bg-surface/70 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="font-headline-xl text-headline-xl-mobile text-on-surface mb-3">
                  {project.title}
                </h2>
                <p className="font-body-md text-on-surface-variant mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[11px] tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all"
          >
            Conversemos tu proyecto
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
