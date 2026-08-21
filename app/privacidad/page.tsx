import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-margin-mobile lg:px-margin-desktop py-24">
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">Política de privacidad</h1>
      <div className="space-y-4 font-body-md text-on-surface-variant">
        <p>
          En {site.name} tratamos los datos del formulario de contacto únicamente para responder tu
          consulta. No los vendemos ni los compartimos con terceros ajenos al envío del mensaje.
        </p>
        <p>
          Conservamos nombre, correo, asunto y mensaje el tiempo necesario para gestionar la
          conversación. Podés solicitar la eliminación escribiendo a {site.email}.
        </p>
      </div>
    </section>
  );
}
