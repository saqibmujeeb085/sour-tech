import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const SFPRO = localFont({
  src: [
    {
      path: '../assets/Fonts/SFPRODISPLAYREGULAR.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/Fonts/SFPRODISPLAYMEDIUM.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/Fonts/SFPRODISPLAYBOLD.woff',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-sfpro'
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${SFPRO.variable} ${poppins.variable}`}>
        <Header />
        <main className="min-h-[78vh] bg-background">
          <div className="max-w-[1400px] self-center mx-auto">
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
