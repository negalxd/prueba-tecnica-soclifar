import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "./providers/productProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Prueba Técnica",
  description: "Frontend Prueba Técnica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProductProvider>
          {children}
          <ToastContainer />
        </ProductProvider>
      </body>
    </html>
  );
}
