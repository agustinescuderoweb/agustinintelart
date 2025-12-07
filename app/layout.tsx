import "./globals.css";
import type { ReactNode } from "react";


export const metadata = {
  title: "Agustin Intel Art",
  description: "Landing de servicios IA",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
