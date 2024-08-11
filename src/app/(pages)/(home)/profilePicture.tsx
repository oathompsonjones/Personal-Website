import { Avatar } from "@mui/material";
import type { ReactElement } from "react";
import { GRAVATAR_URL } from "utils";

/**
 * A div which will be used to either fade in or out.
 * @param children - The children.
 * @returns A div.
 */
export default function ProfilePicture({ positioner }: { readonly positioner?: boolean; }): ReactElement {
    return (
        <Avatar
            className={positioner ? "avatarPosition" : "avatar"}
            src={GRAVATAR_URL}
            sx={{
                boxShadow: positioner ? 0 : 20,
                display: {
                    md: "block",
                    xs: positioner ? "block" : "none"
                },
                filter: positioner ? { md: "opacity(0%)" } : undefined,
                height: "auto",
                position: positioner ? undefined : "fixed",
                transition: [
                    "left 0.5s linear",
                    "top 0.5s linear",
                    "width 0.5s linear",
                    "height 0.5s linear",
                    "filter 0.25s linear",
                ].join(", "),
                width: { md: "30%", sm: "50%", xs: "90%" },
            }}
        />
    );
}
