import { Metadata } from "@/node_modules/next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profile App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
