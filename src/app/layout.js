import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata = {
  title: 'Cedar Valley Roofing LLC',
  description: `Southern Utah's highest quality roofing company. Our all-star team delivers superior quality and craftsmanship. Trust us for your roofing needs, large or small!
`,
  viewport: {
    width: 'device-width',
    initial: 'scale=1.0'
  },
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
