import type { Metadata } from "next";
// HERE WILL THE FONT ROBOTO AND BOKOR
// where roboto is variable font and bokor is static font
import "@/style/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "The Daily News",
  description: "Stay Enhanced with the Latest Stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
