import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Oliver Jones | About Me" };

/**
 * Sets the title of the page.
 * @param props - The component properties.
 * @param props.children - The children of the page.
 * @returns The children of the page.
 */
export default function Layout({ children }: { children: ReactNode; }): ReactNode {
    return children;
}
