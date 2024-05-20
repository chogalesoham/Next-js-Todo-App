import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./componects/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-JS Todo App",
  description: "Next-JS Todo App Created By Soham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
