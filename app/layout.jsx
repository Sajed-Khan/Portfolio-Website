import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetBrainsMono' });

export const metadata = {
  title: "Sajed Khan | Full Stack Developer",
  description: "Portfolio website showcasing my work as a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairEffect/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
