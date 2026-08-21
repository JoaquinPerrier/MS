import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de servicio",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-margin-mobile lg:px-margin-desktop py-24">
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">Términos de servicio</h1>
      <div className="space-y-4 font-body-md text-on-surface-variant">
        <p>
          El contenido de este sitio es informativo. Los proyectos, plazos y alcance se definen en
          un acuerdo específico con cada cliente de {site.name}.
        </p>
        <p>
          El envío del formulario no implica la contratación de un servicio, sino el inicio de una
          conversación comercial.
        </p>
      </div>
    </section>
  );
}
