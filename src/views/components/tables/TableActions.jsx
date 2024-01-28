import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useCurrencyContext } from "../../../context/currencyContext";
/* import { useValue } from "../../../context/ContextProvider"; */

const TableActions = ({ params, handleEditClick, editMode, setEditMode }) => {
    const { dataCurrency, setDataCurrency } = useCurrencyContext();

    function deleteData(id) {
        setEditMode(false);
        // Filtra los objetos cuyo ID no coincide con el ID proporcionado
        const updatedDataCurrency = dataCurrency.filter((record) => record.id !== id);
        console.log(updatedDataCurrency);
        // Actualiza el estado con el nuevo arreglo sin el objeto eliminado
        setDataCurrency(updatedDataCurrency);

        console.log(`Dato con ID ${id} eliminado.`);
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
