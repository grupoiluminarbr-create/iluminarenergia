import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I-Luminar Energia | Reduza sua conta com energia solar em São Luís",
  description:
    "Solicite uma simulação gratuita de energia solar com a I-Luminar Energia. Projetos para residências, comércios e empresas em São Luís e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
