import React from "react";
import { Container, Grid, Input, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getCurrencyValues } from "../../services/ApiService";
import NavBar from "../layouts/NavBar";
import { filterDataByDate, getCurrentDate, getDefaultStartDate } from "../../utils/date";
import { datachartFiller } from "../../utils/chart";
import TableCurrency from "../components/TableCurrency";
import LineChart from "../components/charts/LineChart";
import { useCurrencyContext } from "../../context/currencyContext";

const ChartDataContainer = () => {
    const { dataCurrency } = useCurrencyContext();
    const [dataChartFiltered, setDataChartFiltered] = useState();
    const [initialDate, setInitialDate] = useState(getDefaultStartDate());
    const [endDate, setEndDate] = useState(getCurrentDate());

    useEffect(() => {
        if (dataCurrency) {
            const filteredData = filterDataByDate(dataCurrency, initialDate, endDate);
            const newData = datachartFiller(filteredData);
            setDataChartFiltered({});
            setDataChartFiltered(newData);
        }
    }, [dataCurrency, initialDate, endDate]);

    // Date handlers

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
};

export default ChartDataContainer;
