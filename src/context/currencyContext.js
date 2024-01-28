import { createContext, useContext } from "react";

const currencyContext = createContext();
export const useCurrencyContext = () => useContext(currencyContext)

export { currencyContext };
