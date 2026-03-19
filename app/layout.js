import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Silver Crown High School | Warangal",
  description: "Building Bright Futures Through Quality Education at Silver Crown High School, Warangal, Telangana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased text-gray-900 bg-white overflow-x-hidden`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
