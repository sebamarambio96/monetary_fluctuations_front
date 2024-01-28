import { Typography, AppBar, Toolbar, Icon } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function AppBarDashboard() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Icon>
                        <AttachMoneyIcon color="action"></AttachMoneyIcon>
                    </Icon>
                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                        CurrenFlux
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
