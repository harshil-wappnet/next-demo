import type { Metadata } from "next";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import "./globals.css";
import '../app/styles.css';
import { breakpoints, colors } from "./theme";
import Header from "@/components/Header";

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
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppShell header={{ height: 60 }} padding="md">
            <AppShellHeader>
              <Header /> {/* Client component for color theme switching */}
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
