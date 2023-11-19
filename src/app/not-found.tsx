import Link from "next/link";
import { Typography } from "@mui/material";

/**
 * Handles any 404 errors.
 *
 * @returns {React.ReactNode} An error page.
 */
export default function Error(): React.ReactNode {
    return (
        <>
            <Typography gutterBottom variant="h2">Error 404 - Page not found</Typography>
            <Typography variant="subtitle1">
                These aren't the droids you're looking for. Click <Link href="/">here</Link> to go to the homepage.
            </Typography>
        </>
    );
}
