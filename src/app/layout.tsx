import type { Metadata, Viewport } from "next";
import { Teko, Inter, Caveat } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ATTN! — Back to the Future | Your Business. Our Mission.",
  description:
    "We blend data, creativity and cutting-edge strategy to take your brand from where it is, to where it's going. Book your free strategy call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
