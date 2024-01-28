import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TableInputEdit from "./TableInputEdit";
import TableActions from "./TableActions";

const TableCurrency = ({ tableData = [] }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedValue, setEditedValue] = useState("");
    const [editedId, setEditedId] = useState("");

    const handleEditClick = (id, originalValue) => {
        // Activate edit mode on the specified ID.
        setEditedValue(originalValue);
        setEditedId(id);
        setEditMode(true);
    };

    const columns = useMemo(
        () => [
            { field: "date", headerName: "Fecha", width: 130, valueGetter: (params) => params.row.date || "Sin fecha" },
            {
                field: "value",
                headerName: "Valores (CLP)",
                width: 130,
                valueGetter: (params) => params.row.value || "0",
                renderCell: (params) => {
                    // Check if we are in edit mode to render the Input
                    if (editMode && params.id == editedId) {
                        return (
                            <TableInputEdit
                                id={params.id}
                                editedValue={editedValue}
                                setEditMode={setEditMode}
                                setEditedValue={setEditedValue}
                            ></TableInputEdit>
                        );
                    } else {
                        // If we are not in edit mode, render the value of the cell
                        return params.value;
                    }
                },
            },
            {
                field: "actions",
                headerName: "Acciones",
                sortable: false,
                filterable: false,
                width: 130,
                renderCell: (params) => (
                    <TableActions
                        params={params}
                        handleEditClick={handleEditClick}
                        editMode={editMode}
                        setEditMode={setEditMode}
                    ></TableActions>
                ),
            },
        ],
        [editMode, editedValue]
    );

    return (
        <Box
            sx={{
                height: 470,
                width: "100%",
            }}
        >
            <DataGrid
                autoPageSize
                columns={columns}
                rows={tableData}
                getRowId={(row) => row.id}
                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                })}
                localeText={{
                    noRowsLabel: "No hay filas para mostrar",
                }}
            />
        </Box>
    );
};

export default TableCurrency;
