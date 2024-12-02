import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures better font loading performance
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Ensures better font loading performance
});

export const metadata: Metadata = {
  title: "Sakina's Portfolio",
  description: "Showcasing projects, skills, and achievements.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
  openGraph: {
    title: "Sakina's Portfolio",
    description: "Showcasing projects, skills, and achievements.",
    url: "https://your-portfolio-url.com",
    siteName: "Sakina's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <noscript>
          <style>
            {`body { font-family: sans-serif; }`}
          </style>
          <p>
            This site requires JavaScript to function properly. Please enable
            JavaScript or switch to a browser that supports it.
          </p>
        </noscript>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
