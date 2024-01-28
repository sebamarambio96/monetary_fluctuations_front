import { formatDate } from "./date";

function dataTableFiller(apiData) {
    const rows = [];
    apiData.forEach((record) => {
        rows.push(createRow(record.id, formatDate(record.date), record.value_clp));
    });
    return rows;
}

function createRow(id, date, value) {
    return { id, date, value };
}

export { createRow, dataTableFiller };
