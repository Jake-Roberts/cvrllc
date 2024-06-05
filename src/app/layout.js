import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cedar Valley Roofing LLC</title>
        <meta name="description" content="Southern Utah's highest quality roofing company. Our all-star team delivers superior quality and craftsmanship. Trust us for your roofing needs, large or small!" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
