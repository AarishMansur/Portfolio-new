import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";


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
      </body>
    </html>
  );
}
