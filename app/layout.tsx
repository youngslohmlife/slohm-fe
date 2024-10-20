import type { Metadata } from "next";
import "@/app/globals.scss";
import Layout from "@/components/layout";
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
