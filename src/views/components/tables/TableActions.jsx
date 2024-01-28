import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useCurrencyContext } from "../../../context/currencyContext";

const TableActions = ({ params, handleEditClick, editMode, setEditMode }) => {
    const { dataCurrency, setDataCurrency } = useCurrencyContext();

    function deleteData(id) {
        // Set editMode to false to prevent visual bugs when deleting while in edit mode
        setEditMode(false);
        // Filter objects whose ID does not match the provided ID
        const updatedDataCurrency = dataCurrency.filter((record) => record.id !== id);
        // Update the state with the new array without the deleted object
        setDataCurrency(updatedDataCurrency);
    }

    return (
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
            <IconButton aria-label="Eliminar" color="error" onClick={() => deleteData(params.id)}>
                <Delete />
            </IconButton>
        </>
    );
};

export default TableActions;
