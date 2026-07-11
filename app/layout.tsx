import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aarish Mansur - Fullstack Developer",
  description: "A full stack engineer with years of building projects and doing open source",


  openGraph: {
    title: "Aarish Mansur - Fullstack Developer",
    description: "A full stack engineer with years of building projects and doing open source",
    url: "https://www.aarishmansur.in/",
    siteName: "Aarish Mansur Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "character.png",
        width: 1200,
        height: 630,
        alt: "Aarish Mansur ",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Aarish Mansur - Fullstack Developer",
    description: "A full stack engineer with years of building projects and doing open source",
    images: ["character.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SharedLayout>
          {children}
        </SharedLayout>
      </body>
    </html>
  );
}
