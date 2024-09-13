import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Oliver Jones | Project Euler" };

/**
 * Sets the title of the page.
 * @param props - The component properties.
 * @param props.children - The children of the page.
 * @returns The children of the page.
 */
export default function Layout({ children }: { children: ReactNode; }): ReactNode {
    return (
        <div>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css?family=Fira Code&display=optional"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
                rel="stylesheet"
            />
            {children}
        </div>
    );
}