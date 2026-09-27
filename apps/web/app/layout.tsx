import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://internetrural.mx"),
  applicationName: "Internet Rural México",
  title: {
    default: "Internet Rural México",
    template: "%s | Internet Rural México",
  },
  description:
    "Información independiente para entender opciones de Internet en ranchos, fincas, casas y negocios rurales en México.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Internet Rural México",
    description:
      "Internet para donde las opciones tradicionales no llegan.",
    url: "https://internetrural.mx",
    siteName: "Internet Rural México",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Rural México",
    description:
      "Internet para donde las opciones tradicionales no llegan.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#24523A",
};

const navigation = [
  { href: "/internet-rural", label: "Internet rural" },
  { href: "/starlink-mexico", label: "Starlink México" },
  { href: "/starlink-es-para-mi", label: "Evaluar" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="site-shell">
          <header className="site-header">
            <Link className="brand-mark" href="/" aria-label="Internet Rural México">
              <span className="brand-icon" aria-hidden="true" />
              <span>Internet Rural México</span>
            </Link>
            <nav className="site-nav" aria-label="Navegación principal">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <p>
              Este sitio es independiente de Starlink. Algunos enlaces son enlaces
              de referencia. Si realizas una compra elegible mediante uno de ellos,
              puedo recibir una recompensa de Starlink.
            </p>
            <div>
              <Link href="/divulgacion">Divulgación</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/sobre-nosotros">Sobre nosotros</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
