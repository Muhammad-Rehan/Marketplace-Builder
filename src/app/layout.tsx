
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoopsy",
  description: "Created by Muhammad Rehan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
       <link rel="stylesheet" href="/_next/static/css/eef5a398688b919a.css" data-precedence="next" />
       <link rel="stylesheet" href="/_next/static/css/390e27c7022f2116.css" data-precedence="next" />
       <link rel="preload" href="/_next/static/css/2a746b96d260b8b6.css" as="style" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <CartProvider>
          <Navbar />
                 <div>{children}</div>
                 <Footer /> 
        </CartProvider>
      </body>
    </html>
  );
}
