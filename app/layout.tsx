import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalProvider } from "@/components/LegalModal";
import { images, site } from "@/lib/site";
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

const description =
  "Potenciamos la presencia digital de tu empresa con sitios modernos y soluciones a medida que optimizan tus procesos.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} — Ingeniería Digital de Precisión`,
    template: `%s | ${site.name}`,
  },
  description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    url: "./",
    images: [
      {
        url: images.hero,
        alt: "Visualización abstracta de arquitectura digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md selection:bg-primary selection:text-on-primary">
        <LegalProvider>
          <Header />
          <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden">
            <main className="pt-20 flex-1">{children}</main>
            <Footer />
          </div>
        </LegalProvider>
      </body>
    </html>
  );
}
