import "./globals.css";
import { Inter } from "next/font/google";
import SharedLayout from "@/components/shared/SharedLayout";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Milestone Finance Management | Inspiring Financial Success, One Investment at a Time",
  description:
    "Milestone Financial Management offers expert guidance and diverse investment options in stocks, crypto, real estate, land, and agriculture. Our platform provides the tools and insights you need to make informed decisions and achieve your financial milestones.😀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SharedLayout>{children}</SharedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
