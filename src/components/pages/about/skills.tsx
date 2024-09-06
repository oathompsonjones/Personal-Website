import type { CV } from "app/(pages)/cv/route";
import type { ReactNode } from "react";
import { Typography } from "@mui/material";
import cv from "assets/cv.json";
import { jsonToJSDoc } from "app/(pages)/cv";

const data = cv as CV;

/**
 * Contains the skills segment for my CV page.
 * @returns The Skills element.
 */
export function Skills(): ReactNode {
    // Contains the data for the skills section of my CV.
    const skills = data.Skills.map(jsonToJSDoc);

    return (
        <>
            <Typography variant="h3">Skills</Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
                {skills.map((skill, i) => (
                    <span key={i}>
                        {i > 0 && <Typography component="span" sx={{ color: "gray", m: "0 0.5%" }}>•</Typography>}
                        {skill}
                    </span>
                ))}
            </Typography>
        </>
    );
}
