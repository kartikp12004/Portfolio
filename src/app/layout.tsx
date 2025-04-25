import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kartik Pandey - Full Stack Developer",
  description:
    "Building scalable and performant web applications with modern technologies.",
  keywords: [
    "Kartik Pandey",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Kartik Pandey - Portfolio",
    description:
      "Building scalable and performant web applications with modern technologies.",
    url: "https://kartik-portfolio-wheat.vercel.app",
    siteName: "Kartik Pandey Portfolio",
    images: [
      {
        url: "/img/preview.png",
        width: 1200,
        height: 630,
        alt: "Kartik Pandey - Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Pandey - Portfolio",
    description:
      "Building scalable and performant web applications with modern technologies.",
    images: ["/img/preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
