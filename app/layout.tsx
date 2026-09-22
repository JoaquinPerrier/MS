import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalProvider } from "@/components/LegalModal";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Ingeniería Digital de Precisión`,
    template: `%s | ${site.name}`,
  },
  description:
    "Potenciamos la presencia digital de tu empresa con sitios modernos y soluciones a medida que optimizan tus procesos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <LegalProvider>
          <Header />
          <main className="pt-20 min-h-screen flex-1">{children}</main>
          <Footer />
        </LegalProvider>
      </body>
    </html>
  );
}
