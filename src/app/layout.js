import "./globals.css";
import { Noto_Serif, Cabin } from "next/font/google";
import Header from "./layout/Header";

const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const cabin = Cabin({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata = {
  title: "My App",
  description: "Using multiple Google Fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} ${cabin.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
