import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio | Abdullah Qureshi",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white overflow-x-hidden absolute top-0 z-[-2] h-screen w-screen bg-[#a3a8b9] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] `}
      >
        {children}
      </body>
    </html>
  );
}
