import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakhar Shukla | Full Stack & AI Engineer",
  description: "Portfolio of Prakhar Shukla, Full Stack Developer and AI Engineer building intelligent scalable software.",
  keywords: ["Prakhar Shukla", "Full Stack Developer", "AI Engineer", "Software Engineer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Prakhar Shukla" }],
  creator: "Prakhar Shukla",
  openGraph: {
    title: "Prakhar Shukla | Full Stack & AI Engineer",
    description: "Portfolio of Prakhar Shukla, Full Stack Developer and AI Engineer building intelligent scalable software.",
    url: "https://prakharshukla.com",
    siteName: "Prakhar Shukla Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Shukla | Full Stack & AI Engineer",
    description: "Portfolio of Prakhar Shukla, Full Stack Developer and AI Engineer building intelligent scalable software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
