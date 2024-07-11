import "./globals.css";
import inter from "./Componentes/fonts/font";

export const metadata = {
  title: "Book Horse Riding Holiday",
  description: "Generated by create next app",
  icons: {
    icon: "LogoForWeb.png",
    shortcut: "LogoForWeb.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scrollbar">{children}</body>
    </html>
  );
}
