import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Iniciemos una conversación. Contanos sobre tu próximo proyecto.",
};

const partners = [
  { label: <>TECH<span className="text-primary">CORP</span></>, className: "font-bold tracking-tighter" },
  { label: <>Global<span className="font-light">Sys</span></>, className: "italic" },
  { label: "NEXUS", className: "uppercase tracking-widest" },
  { label: <>Data<span className="text-tertiary">Flow</span></>, className: "" },
  { label: "OMNI", className: "font-black" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full pt-18 pb-2 md:pt-24 md:pb-32 px-margin-mobile lg:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                <path
                  className="text-on-surface-variant"
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%" />
          </svg>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] transform translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6">
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase flex items-center gap-4 before:w-8 before:h-[1px] before:bg-primary">
                Hablemos
              </span>
              <h1 className="w-full max-w-full font-display-lg text-[42px] leading-[1.05] tracking-tight text-on-surface md:text-display-lg md:leading-tight md:tracking-tighter">
                Iniciemos una <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                  Conversación.
                </span>
              </h1>
              <p className="font-body-lg text-[17px] leading-[1.6] text-on-surface-variant max-w-md md:text-body-lg">
                Estamos listos para transformar tu visión en una realidad digital. Contáctanos para
                discutir tu próximo proyecto o para conocer más sobre nuestra metodología.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
                  <Icon name="location_on" className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Sede Madrid</h3>
                  <address className="not-italic font-body-md text-body-md text-on-surface-variant">
                    Paseo de la Castellana, 259
                    <br />
                    28046 Madrid, España
                  </address>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
                  <Icon name="mail" className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                    Contacto Directo
                  </h3>
                  <a
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">{site.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:-mt-12">
            <ContactForm variant="page" />
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-16 bg-surface-container-low overflow-hidden shadow-inner relative">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col md:flex-row items-center gap-8 justify-between">
          <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest shrink-0 whitespace-nowrap">
            Empresas que confían en nosotros
          </h4>
          <div className="flex-1 w-full overflow-hidden relative">
            <div className="flex space-x-16 items-center w-max animate-marquee opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${index}-${partner.className}`}
                  className={`font-headline-md text-headline-md text-on-surface ${partner.className}`}
                >
                  {partner.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
