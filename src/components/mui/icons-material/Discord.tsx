"use client";
import DiscordLogo from "@/images/discord.svg";
import SvgIcon from "@mui/material/SvgIcon";

export default function Discord(): JSX.Element {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <SvgIcon component={DiscordLogo} inheritViewBox />
    );
}
