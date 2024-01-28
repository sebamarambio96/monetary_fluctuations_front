import StateCompo from "./context/StateCompo";
import AppBarDashboard from "./views/layouts/AppBar/AppBarDashboard";
import DashboardContainer from "./views/container/DashboardContainer";
import AppFooter from "./views/layouts/AppFooter/AppFooter";

export default function App() {
    return (
        <StateCompo>
            <AppBarDashboard></AppBarDashboard>
            <DashboardContainer></DashboardContainer>
            <AppFooter></AppFooter>
        </StateCompo>
    );
}
