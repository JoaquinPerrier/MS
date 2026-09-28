"use client";

import { Icon } from "@/components/Icon";
import { useLegalModal } from "@/components/LegalModal";
import { images, site } from "@/lib/site";

export function Footer() {
  const { openLegal } = useLegalModal();
  return (
    <footer className="bg-surface-container py-6 md:py-10 mt-4 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col gap-8 mb-8 md:flex-row md:items-start md:justify-around md:gap-12 md:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-unit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={site.name}
                className="h-6 w-auto opacity-70 grayscale"
                src={images.logo}
              />
              <span className="font-headline-md text-headline-md text-on-surface-variant">
                {site.name}
              </span>
            </div>
            <p className="text-on-surface-variant font-body-md max-w-xs">{site.tagline}</p>
          </div>
          <div className="space-y-6 md:text-right">
            <h4 className="font-label-caps text-label-caps text-primary">Nuestras redes sociales</h4>
            <div className="flex gap-4 md:justify-end">
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="share" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href={`mailto:${site.email}`}
                aria-label="Correo"
              >
                <Icon name="alternate_email" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="hub" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-[12px] font-label-caps">
          <span>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</span>
          <div className="flex gap-8">
            <button
              type="button"
              onClick={() => openLegal("privacy")}
              className="hover:text-on-surface transition-colors"
            >
              Política de privacidad
            </button>
            <button
              type="button"
              onClick={() => openLegal("terms")}
              className="hover:text-on-surface transition-colors"
            >
              Términos de servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
