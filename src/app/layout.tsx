import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Satisfy",
  description: "Satisfy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
