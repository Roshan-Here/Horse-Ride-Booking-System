// app/layout.jsx
import "./globals.css";
import { Providers } from "./redux/Provider";

export const metadata = {
  title: "Book Horse Riding Holiday",
  description: "A simple web app to Book horse rides",
  icons: {
    icon: "/LogoForWeb.png", // Ensure the path is correct
    shortcut: "/LogoForWeb.png", // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </head>
      <body className="no-scrollbar">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
