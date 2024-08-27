import { Box, Divider, Stack, Typography } from "@mui/material";
import type { ReactElement, ReactNode } from "react";
import Link from "next/link";

/**
 * Contains a set of grades for the CV page.
 * @param props - The component properties.
 * @param props.attainmentYear - The year the grades were attained.
 * @param props.children - The children to render.
 * @param props.educationLevel - The level of education, i.e. GCSEs, A Levels or further.
 * @param props.institutionLink - The link to the institution.
 * @param props.institutionName - The name of the institution, i.e. TBSHS or UoE.
 * @param props.maxGrade - The maximum grade.
 * @param props.minGrade - The minimum grade.
 * @returns The Grades element.
 */
export function Grades({ attainmentYear, children, educationLevel, institutionLink, institutionName, maxGrade, minGrade }: {
    attainmentYear: number;
    children: ReactNode;
    educationLevel: ReactNode;
    institutionLink: string;
    institutionName: string;
    maxGrade: ReactNode;
    minGrade: ReactNode;
}): ReactElement {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Stack direction="row" alignItems="center">
                <Typography variant="h4" flex={1}>{educationLevel}</Typography>
                <Typography variant="h6">({maxGrade} – {minGrade})</Typography>
            </Stack>
            <Divider />
            {children}
            <Divider />
            <Typography variant="caption">
                Attained at <Link href={institutionLink}>{institutionName}</Link> in {attainmentYear}.
            </Typography>
        </Box>
    );
}