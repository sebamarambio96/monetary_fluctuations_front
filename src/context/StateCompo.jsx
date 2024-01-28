import React, { useEffect, useState } from "react";
import { currencyContext } from "./currencyContext";
import { getCurrencyValues } from "../services/ApiService";

const StateCompo = ({ children }) => {
    const [dataCurrency, setDataCurrency] = useState();

    // Set initial data from Api
    useEffect(() => {
        getCurrencyValues("dolar")
            .then((resp) => {
                if (resp.error) {
                    console.log(json.error);
                } else {
                    // Set all data
                    console.log(resp.data);
                    setDataCurrency(resp.data);
                }
            })
            .catch((error) => {});
    }, []);

    return <currencyContext.Provider value={{ dataCurrency, setDataCurrency }}>{children}</currencyContext.Provider>;
};

export default StateCompo;
