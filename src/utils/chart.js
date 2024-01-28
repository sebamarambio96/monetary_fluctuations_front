import { formatDate } from "./date";

const initialChartConfig = {
    labels: [],
    datasets: [
        {
            label: "Fluctuación de Divisas",
            data: [],
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
        },
    ],
};

const dataChartFiller = (dataApi) => {
    // This object is repeated because exporting it may undergo changes and cause bugs.
    const newDataChart = {
        labels: [],
        datasets: [
            {
                label: "Fluctuación de Divisas",
                data: [],
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
            },
        ],
    };
    dataApi.forEach((record) => {
        newDataChart.labels.push(formatDate(record.date));
        newDataChart.datasets[0].data.push(record.value_clp);
    });

    return newDataChart;
};

export { initialChartConfig, dataChartFiller };
