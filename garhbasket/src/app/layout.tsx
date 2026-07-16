import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/provider";
import StoreProvider from "@/redux/StoreProvider";
import InitUser from "@/initUser";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Garh Basket | 10 minute delivery",
  description: "Get your groceries delivered in 10 minutes or less with Garh Basket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="w-full min-h-[100vh] bg-linear-to-b from-green-50 to-white">
        <Provider>

          <StoreProvider>
            <InitUser/>
            {children}

          </StoreProvider>
          
          </Provider>
        
        </body>
    </html>
  );
}
