import "./main.css";
import { About, Contact, Error, Gallery, Home, Portfolio } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSVariableLoader, Footer, Header, PageContainer } from "./Components";
import { Component, ReactElement } from "react";
import { CssBaseline, ThemeProvider, createTheme, darken, lighten, responsiveFontSizes, useMediaQuery } from "@mui/material";

class App extends Component<{ preferredTheme: "dark" | "light"; }> {
    public constructor(public readonly props: { preferredTheme: "dark" | "light"; }) {
        super(props);
    }

    public render(): JSX.Element {
        document.title = "Oliver Jones";

        const getTheme = (): "dark" | "light" => {
            let storedTheme: string | null = localStorage.getItem("theme");
            if (storedTheme === null) {
                storedTheme = this.props.preferredTheme;
                localStorage.setItem("theme", storedTheme);
            }
            return storedTheme as "dark" | "light";
        };

        const toggleTheme = (): void => {
            localStorage.setItem("theme", getTheme() === "dark" ? "light" : "dark");
            this.forceUpdate();
        };

        const mode = getTheme();

        const cssVars = {
            backgroundColour: mode === "dark" ? "#121212" : "#ffffff",
            linkColour: "#1c7eea",
            mainColour: "#1c7eea"
        };

        const theme = responsiveFontSizes(createTheme({
            palette: {
                mode,
                primary: {
                    main: cssVars.mainColour
                }
            },
            typography: ["h1", "h2", "h3", "h4", "h5", "h6"]
                .map((tag) => ({ [tag]: { color: cssVars.mainColour } }))
                .reduce((a, b) => ({ ...a, ...b }))
        }));

        const footerHeight = "15vh";

        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme />
                    <CSSVariableLoader cssVars={cssVars} />
                    <Header toggleTheme={toggleTheme} theme={getTheme()} />
                    <Routes>
                        <Route path="/" element={<PageContainer footerHeight={footerHeight} />}>
                            <Route index element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                    </Routes>
                    <Footer
                        backgroundColour={mode === "dark" ? lighten(cssVars.backgroundColour, 0.1) : darken(cssVars.backgroundColour, 0.1)}
                        borderColour={cssVars.mainColour}
                        footerHeight={footerHeight}
                    />
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default function (): ReactElement<{ preferredTheme: "dark" | "light"; }> {
    const preferredTheme = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
    return <App preferredTheme={preferredTheme} />;
}