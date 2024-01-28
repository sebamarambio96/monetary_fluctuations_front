import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Global Styles
import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#b53f68",
        },
        secondary: {
            main: "#7e4383",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </>
);
