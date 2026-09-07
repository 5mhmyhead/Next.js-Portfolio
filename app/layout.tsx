import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Dwyane Sido Portfolio",
  description: "Next.js Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <a>
            <span className="logo-sans">Portfolio of</span>
            <span className="logo-serif">Dwyane Sido</span>
          </a>
          <nav>
            <a className="active">HOME</a>
            <a>ABOUT</a>
            <a>WORKS</a>
            <a>CONTACT</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
