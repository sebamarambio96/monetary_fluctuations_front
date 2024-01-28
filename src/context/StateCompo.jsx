import React, { useEffect, useState } from "react";
import { currencyContext } from "./currencyContext";
import { getCurrencyValues } from "../services/ApiService";
import { useSnackbar } from "notistack";
import { validationErrorProcessor } from "../utils/alert";

const StateCompo = ({ children }) => {
    const [dataCurrency, setDataCurrency] = useState();
    const { enqueueSnackbar } = useSnackbar();

    // Set initial data from Api
    useEffect(() => {
        getCurrencyValues("dolar")
            .then((resp) => {
                if (resp.error) {
                    // These errors are for validations.
                    validationErrorProcessor(resp.error, enqueueSnackbar);
                } else {
                    // Set all data
                    setDataCurrency(resp.data);
                }
            })
            .catch((error) => {
                enqueueSnackbar("No hemos podido conectar con el servidor, inténtelo más tarde.", {
                    variant: "error",
                    persist: true,
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center",
                    },
                });
            });
    }, []);

    return <currencyContext.Provider value={{ dataCurrency, setDataCurrency }}>{children}</currencyContext.Provider>;
};

export default StateCompo;
