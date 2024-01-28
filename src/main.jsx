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
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#b53f68",
        },
        secondary: {
            main: "#7e4383",
        },
        warning: {
            main: "#d07f08",
        },
        error: {
            main: "#d83a2f",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={2} autoHideDuration={3000}>
                <CssBaseline />
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </BrowserRouter>
);
