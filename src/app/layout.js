// components/ClientWrapper.js
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Utils/Header.js";
import Footer from "./Utils/Footer.js";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

const ClientWrapper = ({ children }) => {
  const currentRoute = usePathname();

  // Define the regex pattern for routes starting with /AdminDashboard/
  const adminDashboardRegex = /^\/AdminDashboard\//;

  // Check if the current route matches the AdminDashboard pattern
  const shouldRenderHeaderFooter = !adminDashboardRegex.test(currentRoute);

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldRenderHeaderFooter && <Header />}
        <ToastContainer />
        {children}
        {shouldRenderHeaderFooter && <Footer />}
      </body>
    </html>
  );
};

export default ClientWrapper;
