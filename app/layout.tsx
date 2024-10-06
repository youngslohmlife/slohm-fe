import type { Metadata } from "next";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "SLOHM",
  description: "SLOHM",
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
