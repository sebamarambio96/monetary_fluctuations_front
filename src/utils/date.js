// Logic to obtain the date from 30 days ago (format YYYY-MM-DD)
const getDefaultStartDate = () => {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(currentDate);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const formattedStartDate = thirtyDaysAgo.toISOString().split("T")[0];
    return formattedStartDate;
};

// Logic to obtain the current date (format YYYY-MM-DD)
const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    return formattedCurrentDate;
};

const formatDate = ($originalDate) => {
    const date = new Date($originalDate);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
};

const filterDataByDate = (data, startDate = getDefaultStartDate(), endDate = getCurrentDate()) => {
    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);
    return data.filter((record) => {
        const recordDate = new Date(record.date);
        return recordDate >= formattedStartDate && recordDate <= formattedEndDate;
    });
};

export { formatDate, getCurrentDate, filterDataByDate, getDefaultStartDate };
