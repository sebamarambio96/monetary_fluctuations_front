import { Line } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import { initialChartConfig } from "../../../utils/chart";

export default function LineChart({ chartData = initialChartConfig }) {
    const options = {
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxRotation: 90,
                    minRotation: 90,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <Paper style={{ padding: "20px" }}>
            <Typography variant="h6" color="secondary" gutterBottom>
                Fluctuación del dolar
            </Typography>
            <Line data={chartData} options={options} />
        </Paper>
    );
}
