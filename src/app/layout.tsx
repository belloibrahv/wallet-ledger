import { Inter } from "next/font/google";
import { ClientProvider } from "../components/ClientProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wallet Ledger Dashboard",
  description: "Modern financial dashboard for wallet transaction management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
