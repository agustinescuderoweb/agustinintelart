import "./globals.css";

export const metadata = {
  title: "Agustin Intel Art",
  description: "Landing de servicios IA",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
