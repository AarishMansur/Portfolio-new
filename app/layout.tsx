import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";
import Script from "next/script";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Aarish Mansur - Frontend Developer",
  description: "Hey this is my Portfolio where you can find my projects, blogs, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <SharedLayout>
          {children}
        </SharedLayout>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
