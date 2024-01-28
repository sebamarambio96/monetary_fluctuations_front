import { useEffect, useMemo, useState } from "react";
import { Box, IconButton, Input, InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Save } from "@mui/icons-material";

const Rooms = ({ tableData = [] }) => {
    const [pageSize, setPageSize] = useState(5);
    const [editMode, setEditMode] = useState(false);
    const [editedValue, setEditedValue] = useState("");
    const [editedId, setEditedId] = useState("");

    const handleEditClick = (id, originalValue) => {
        setEditedValue(originalValue);
        setEditedId(id);
        setEditMode(true);
    };

    const handleSaveClick = () => {
        // Aquí deberías manejar la lógica para guardar el valor editado
        console.log("Valor editado:", editedValue);
        setEditMode(false);
    };

    const columns = useMemo(
        () => [
            { field: "date", headerName: "Fecha", width: 150 },
            {
                field: "value",
                headerName: "Valores (CLP)",
                width: 150,
                renderCell: (params) => {
                    // Verificar si estamos en modo de edición para renderizar el Input
                    if (editMode && params.id == editedId) {
                        return (
                            <Input
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleSaveClick} color="primary">
                                            <Save />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
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
                width: 200,
                renderCell: (params) => (
                    <>
                        {!editMode && (
                            <IconButton
                                aria-label="Editar"
                                color="primary"
                                onClick={() => handleEditClick(params.id, params.value)}
                            >
                                <Edit />
                            </IconButton>
                        )}
                        <IconButton
                            aria-label="Eliminar"
                            color="error"
                            onClick={() => console.log("Eliminar", params.id)}
                        >
                            <Delete />
                        </IconButton>
                    </>
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
