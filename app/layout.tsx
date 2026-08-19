import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StayGrowth Consulting | Hospitality Revenue & OTA Consultancy",
  description: "Property setup, OTA management, revenue management and growth consulting for accommodation owners.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
