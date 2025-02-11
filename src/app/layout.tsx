import type { Metadata } from "next";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellAside,
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import "./globals.css";
import "../app/styles.css";
import { breakpoints, colors } from "./theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

// Create Mantine theme
const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    breakpoints,
    colors,
  })
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            padding="md"
            styles={{
              main: { flexGrow: 1, display: "flex", flexDirection: "row" },
            }}
          >
            <AppShellHeader>
              <Header /> {/* Client component for color theme switching */}
            </AppShellHeader>

            {/* Main content with aside (advertisement) */}
            <div style={{ display: "flex", flexGrow: 1, maxHeight: "calc(100vh - 120px)", overflowY: "auto" }} >
              <AppShellMain style={{ flex: 1 }}>{children}</AppShellMain>
              <AppShellAside width={{ base: 250, md: 300 }} p="md">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">Advertisement</h3>
                  <p>Place your ads here</p>
                </div>
              </AppShellAside>
            </div>

            <AppShellFooter style={{ zIndex: "999" }}>
              <Footer />
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html >
  );
}
