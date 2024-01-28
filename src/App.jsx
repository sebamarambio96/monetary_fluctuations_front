import StateCompo from "./context/StateCompo";
import ChartDataContainer from "./views/container/ChartDataContainer";

export default function App() {
    return (
        <StateCompo>
            <ChartDataContainer></ChartDataContainer>
        </StateCompo>
    );
}
