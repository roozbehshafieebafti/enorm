import type { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "@/components/header";

import "../public/styles/global.scss";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Enorm Test",
  description: "This is a test application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
