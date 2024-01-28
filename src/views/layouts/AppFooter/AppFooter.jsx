import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

const AppFooter = () => {
    return (
        <Box sx={{ bgcolor: "#b53f68", color: "#cfc7bb", marginTop: "3rem", height: "100%" }}>
            <Container maxWidth="false" component="footer">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="body2">&copy; Sebastián Marambio 2023</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant="h5">Contacto:</Typography>
                        <ul>
                            <li>
                                <Link sx={{ color: "#FBFBFB" }} href="https://sebams-dev.netlify.app/" target="_blank">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    sx={{ color: "#FBFBFB" }}
                                    href="https://www.linkedin.com/in/sebamarambio/"
                                    target="_blank"
                                >
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    sx={{ color: "#FBFBFB" }}
                                    href="https://github.com/sebamarambio96/"
                                    target="_blank"
                                >
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant="h5">Repositorios:</Typography>
                        <ul>
                            <li>
                                <Link
                                    sx={{ color: "#FBFBFB" }}
                                    href="https://github.com/sebamarambio96/monetary_fluctuations_api.git"
                                    target="_blank"
                                >
                                    Back-end
                                </Link>
                            </li>
                            <li>
                                <Link
                                    sx={{ color: "#FBFBFB" }}
                                    href="https://github.com/sebamarambio96/monetary_fluctuations_front.git"
                                    target="_blank"
                                >
                                    Front-end
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppFooter;
