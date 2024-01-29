import { getCurrentDate } from "../utils/date";

// Function to handle errors
const handleErrors = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};

// Function to get currency values
const getCurrencyValues = async (currencyName, startDate = "2023-01-01", endDate = getCurrentDate()) => {
    try {
        const response = await fetch(
            `${
                import.meta.env.VITE_API_URL
            }/get-currency-values/${currencyName}/?start_date=${startDate}&end_date=${endDate}`
        );
        const json = await handleErrors(response);
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(`There was an issue fetching currency values`);
    }
};

//Extra functions

// Function to get active years
const getActiveYears = async () => {
    try {
        const response = await fetch(`${import.meta.env.API_URL}/interest-years`);
        const data = await handleErrors(response);
        return data;
    } catch (error) {
        console.error(`Error fetching active years:`, error.message);
        throw new Error(`There was an issue fetching active years`);
    }
};

// Function to get interest currency
const getActiveCurrency = async () => {
    try {
        const response = await fetch(`${import.meta.env.API_URL}/interest-currency`);
        const data = await handleErrors(response);
        return data;
    } catch (error) {
        console.error(`Error fetching interest currency years:`, error.message);
        throw new Error(`There was an issue fetching interest currency years`);
    }
};

// Function to get all interest data
const getAllInterestData = async () => {
    try {
        const response = await fetch(`${import.meta.env.API_URL}/all-interest-data`);
        const data = await handleErrors(response);
        return data;
    } catch (error) {
        console.error(`Error fetching all interest data:`, error.message);
        throw new Error(`There was an issue fetching all interest data`);
    }
};

export { getCurrencyValues, getActiveYears, getActiveCurrency, getAllInterestData, saveInterestData };
