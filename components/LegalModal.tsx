"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

type LegalDoc = "privacy" | "terms";

const documents: Record<
  LegalDoc,
  { title: string; paragraphs: (name: string, email: string) => string[] }
> = {
  privacy: {
    title: "Política de privacidad",
    paragraphs: (name, email) => [
      `En ${name} tratamos los datos del formulario de contacto únicamente para responder tu consulta. No los vendemos ni los compartimos con terceros ajenos al envío del mensaje.`,
      `Conservamos nombre, correo, asunto y mensaje el tiempo necesario para gestionar la conversación. Podés solicitar la eliminación escribiendo a ${email}.`,
    ],
  },
  terms: {
    title: "Términos de servicio",
    paragraphs: (name) => [
      `El contenido de este sitio es informativo. Los proyectos, plazos y alcance se definen en un acuerdo específico con cada cliente de ${name}.`,
      "El envío del formulario no implica la contratación de un servicio, sino el inicio de una conversación comercial.",
    ],
  },
};

const LegalContext = createContext<{
  openLegal: (doc: LegalDoc) => void;
} | null>(null);

export function useLegalModal() {
  const context = useContext(LegalContext);
  if (!context) {
    throw new Error("useLegalModal must be used within LegalProvider");
  }
  return context;
}

export function LegalProvider({ children }: { children: ReactNode }) {
  const [doc, setDoc] = useState<LegalDoc | null>(null);
  const openLegal = useCallback((next: LegalDoc) => setDoc(next), []);
  const close = useCallback(() => setDoc(null), []);
  const value = useMemo(() => ({ openLegal }), [openLegal]);

  useEffect(() => {
    if (!doc) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [doc, close]);

  const content = doc ? documents[doc] : null;

  return (
    <LegalContext.Provider value={value}>
      {children}
      {content ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-margin-mobile"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute inset-0 bg-surface/80 backdrop-blur-md"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="relative z-10 w-full max-w-xl bg-surface-container border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
              aria-label="Cerrar"
            >
              <Icon name="close" className="text-[18px]" />
            </button>
            <h2
              id="legal-modal-title"
              className="font-headline-md text-headline-md text-on-surface pr-12 mb-6"
            >
              {content.title}
            </h2>
            <div className="space-y-4 font-body-md text-on-surface-variant">
              {content.paragraphs(site.name, site.email).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </LegalContext.Provider>
  );
}
