import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ved Asole",
  description: "Ved Asole - Software Engineer",
  authors: { name: "Ved Asole" },
  keywords: ["Ved Asole", "Software Engineer", "Ved Asole Portfolio"],
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
