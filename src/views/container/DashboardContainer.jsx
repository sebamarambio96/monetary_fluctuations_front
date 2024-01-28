import React from "react";
import { Container, Grid, Input, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { filterDataByDate, getCurrentDate, getDefaultStartDate } from "../../utils/date";
import { dataChartFiller } from "../../utils/chart";
import TableCurrency from "../components/tables/TableCurrency";
import LineChart from "../components/charts/LineChart";
import { useCurrencyContext } from "../../context/currencyContext";
import { dataTableFiller } from "../../utils/table";

const DashboardContainer = () => {
    const { dataCurrency } = useCurrencyContext();
    const [rows, setRows] = useState();
    const [dataChartFiltered, setDataChartFiltered] = useState();
    const [initialDate, setInitialDate] = useState(getDefaultStartDate());
    const [endDate, setEndDate] = useState(getCurrentDate());

    useEffect(() => {
        // If it hasn't been set, it doesn't run to avoid errors the first time.
        if (dataCurrency) {
            const filteredData = filterDataByDate(dataCurrency, initialDate, endDate);
            // New Chart Data
            const newChartData = dataChartFiller(filteredData);
            // New Table Data (rows)
            const newTableData = dataTableFiller(filteredData);
            setRows(newTableData);
            setDataChartFiltered(newChartData);
        }
        // Later, when the context has defined the variable, it is executed again to render.
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
        <Container maxWidth="false" style={{ marginTop: "2rem" }}>
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
                    <TableCurrency tableData={rows}></TableCurrency>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <LineChart chartData={dataChartFiltered} style={{ marginBottom: "1rem" }}></LineChart>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardContainer;
