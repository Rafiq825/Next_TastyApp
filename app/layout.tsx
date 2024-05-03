import NavBar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecipeProvider from "@/context/recipe-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasty App",
  description: "This is recipe tasty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecipeProvider>
          <>
            <NavBar />
            {children}
          </>
        </RecipeProvider>
      </body>
    </html>
  );
}
