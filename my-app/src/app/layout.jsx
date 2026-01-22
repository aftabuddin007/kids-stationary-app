import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";


const poppins = Poppins({
  weight:["100","200","400","600"]
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js
export const metadata = {
  title: {
    default: "Kids Stationary | Best Kids Stationery & Toys Shop",
    template: "%s | Kids Stationary"
  },
  description: "Welcome to Kids Stationary! Discover our wide range of creative stationery, colorful toys, and fun learning tools designed specifically for children.",
  metadataBase: new URL('https://kids-stationary.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kids Stationary - Fun, Play, and Learn",
    description: "Your one-stop shop for premium kids' stationery and toys in Bangladesh.",
    url: "https://kids-stationary.vercel.app",
    siteName: "Kids Stationary",
    images: [
      {
        url: "https://i.ibb.co.com/8LZ77xpd/Screenshot-2026-01-22-153554.png", // Your Home Image
        width: 1200,
        height: 630,
        alt: "Kids Stationary Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://i.ibb.co.com/NdNQmSzp/Screenshot-2026-01-22-153601.png", // Your Logo
    apple: "https://i.ibb.co.com/NdNQmSzp/Screenshot-2026-01-22-153601.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Stationary | Kids Stationery & Toys",
    images: ["https://i.ibb.co.com/8LZ77xpd/Screenshot-2026-01-22-153554.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 md:11/12 mx-auto">
          <Navbar></Navbar>
        </header>

<main className="py-2 md:11/12 mx-auto min-h-[calc(100vh-302px)]">

        {children}
</main>

        <footer>

        <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
