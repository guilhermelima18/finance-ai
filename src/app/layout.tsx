import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Finance AI",
  description: "Full Stack Week",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
