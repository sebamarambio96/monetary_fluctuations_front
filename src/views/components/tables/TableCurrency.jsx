import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Save } from "@mui/icons-material";
import TableInputEdit from "./TableInputEdit";
import TableActions from "./TableActions";

const Rooms = ({ tableData = [] }) => {
    const [pageSize, setPageSize] = useState(5);
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
            { field: "date", headerName: "Fecha", width: 130 },
            {
                field: "value",
                headerName: "Valores (CLP)",
                width: 130,
                renderCell: (params) => {
                    // Verificar si estamos en modo de edición para renderizar el Input
                    if (editMode && params.id == editedId) {
                        return (
                            <TableInputEdit
                                editedValue={editedValue}
                                setEditMode={setEditMode}
                                setEditedValue={setEditedValue}
                            ></TableInputEdit>
                        );
                    } else {
                        // Si no estamos en modo de edición, renderizar el valor de la celda
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
                height: 450,
                width: "100%",
            }}
        >
            <DataGrid
                columns={columns}
                rows={tableData}
                getRowId={(row) => row.id}
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                })}
            />
        </Box>
    );
};

export default Rooms;
