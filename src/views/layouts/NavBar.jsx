import { Box, Typography } from "@mui/material";

export default function NavBar() {
    return (
        <>
            <Box>
                <Typography variant="h3" component="h1" sx={{ width: "100%", mb: 5 }}>
                    Fluctuación de Divisas
                </Typography>
            </Box>
        </>
    );
}
