import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import Header from "@/components/Header";
import SakuraBackground from "@/components/SakuraBackground";

export const metadata = { /* ... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font imports */}
      </head>
      <body>
        <ThemeProvider>
          <SakuraBackground />
          <Header />
          <main className="relative z-10 max-w-7xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
