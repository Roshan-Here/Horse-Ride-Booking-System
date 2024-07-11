import "./globals.css";
import inter from './Componentes/fonts/font';


export const metadata = {
  title: "",
  description: "Generated by create next app",
  icons: {
    icon: 'Logo.png',
    shortcut: 'Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='no-scrollbar'>{children}</body>
    </html>
  );
}
