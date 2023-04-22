import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/themeContext";

// https://realfavicongenerator.net (remove the mask icon and msapplication stuff)
export const metadata: Metadata = {
    description: "Portfolio site for Oliver Jones (oathompsonjones).",
    icons: {
        apple: "icons/apple-touch-icon.png",
        icon: ["icons/favicon-32x32.png", "icons/favicon-16x16.png"],
        shortcut: "icons/favicon.ico"
    },
    themeColor: "#1c7eea",
    title: "Oliver Jones",
    viewport: {
        initialScale: 1,
        width: "device-width"
    }
};

/**
 * A wrapper to build every page including 404.
 *
 * @returns {JSX.Element} A page wrapper.
 */
export default function Layout({ children }: { children: React.ReactNode; }): JSX.Element {
    return (
        <html lang="en">
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}