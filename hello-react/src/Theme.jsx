import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";

import AppRouter from "./AppRouter";

const theme = createTheme({
    palette: {
        mode: "dark",
    }
});

export default function Theme() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    )
}