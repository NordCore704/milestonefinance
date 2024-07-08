import "./globals.css";
import { Inter } from "next/font/google";
import SharedLayout from "@/components/shared/SharedLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Milestone Finance Management | Inspiring Financial Success, One Investment at a Time",
  description:
    "NFTInfo | NFT Information is a platform for search on NFTs from the blockspan API, get real time data on the go!😀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
