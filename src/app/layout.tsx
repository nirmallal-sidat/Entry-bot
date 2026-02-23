import type { Metadata } from "next";
import { Nunito, Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";





const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Entrybot - Modern Accounting Platform",
  description: "Automated bookkeeping tasks and daily insights that amplify your financial clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nunito.variable} ${roboto.variable}  antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
