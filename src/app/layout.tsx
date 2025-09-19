import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Farmacias Regis - Tu salud es nuestra prioridad",
  description: "Más de 20 años brindando servicios farmacéuticos de calidad. Medicamentos, asesoría profesional, servicio a domicilio y atención 24/7. Encuentra tu farmacia Regis más cercana.",
  keywords: "farmacia, medicamentos, salud, bogotá, colombia, farmacéutico, asesoría, domicilio",
  authors: [{ name: "Farmacias Regis" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Farmacias Regis - Tu salud es nuestra prioridad",
    description: "Más de 20 años brindando servicios farmacéuticos de calidad con profesionales altamente capacitados",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
