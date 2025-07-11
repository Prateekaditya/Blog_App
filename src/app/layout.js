import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nitoq",
  description: "This is a blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
        <div className="flex flex-col justify-between max-w-[1366px] min-h-[100vh] p-0 pl-[60px] pr-[60px] m-0 ml-auto mr-auto ">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
