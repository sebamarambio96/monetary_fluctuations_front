import { Box, Button, Container, Grid, Input, Typography, useTheme } from "@mui/material";
import TableCurrency from "./views/components/TableCurrency";
import { useEffect, useState } from "react";
import LineChart from "./views/components/charts/Line";
import { getCurrencyValues } from "./services/ApiService";
import NavBar from "./views/layouts/NavBar";
import { filterDataByDate, getCurrentDate, getDefaultStartDate } from "./utils/date";
import { datachartFiller } from "./utils/chart";

export default function App() {
    const [dataChart, setDataChart] = useState();
    const [dataChartFiltered, setDataChartFiltered] = useState();
    const [initialDate, setInitialDate] = useState(getDefaultStartDate());
    const [endDate, setEndDate] = useState(getCurrentDate());

    useEffect(() => {
        getCurrencyValues("dolar").then((resp) => {
            if (resp.error) {
                console.log(json.error);
            } else {
                // Set all data
                setDataChart(resp.data);
                // Set filtered data from 30 days ago for render
                const filteredData = filterDataByDate(resp.data, initialDate, endDate);
                setDataChartFiltered(datachartFiller(filteredData));
                /* setLoading(false); */
            }
        });
    }, []);

    useEffect(() => {
        if (dataChart) {
            const filteredData = filterDataByDate(dataChart, initialDate, endDate);
            const newData = datachartFiller(filteredData);
            setDataChartFiltered({});
            setDataChartFiltered(newData);
        }
    }, [initialDate, endDate]);

    // date handlers

    const handleInitialDateChange = (event) => {
        setInitialDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const theme = useTheme();
    return (
        <Container maxWidth="false">
            <NavBar></NavBar>
            <Input
                size="lg"
                style={{ marginBottom: "1rem" }}
                type="date"
                label="Fecha Inicial"
                value={initialDate}
                onChange={handleInitialDateChange}
                slotProps={{
                    input: {
                        min: "2023-01-01",
                        max: getCurrentDate(),
                    },
                }}
            />
            <Input
                size="large"
                style={{ marginBottom: "1rem", marginLeft: "2rem" }}
                type="date"
                label="Fecha Final"
                value={endDate}
                onChange={handleEndDateChange}
                inputProps={{
                    /* Dynamic prevention of the date being less than the start date. */
                    min: initialDate,
                    max: getCurrentDate(),
                }}
            />
            <Grid container spacing={theme.spacing(4)}>
                <Grid item xs={12} lg={4}>
                    <TableCurrency></TableCurrency>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <LineChart chartData={dataChartFiltered} style={{ marginBottom: "1rem" }}></LineChart>
                </Grid>
            </Grid>
        </Container>
    );
}
