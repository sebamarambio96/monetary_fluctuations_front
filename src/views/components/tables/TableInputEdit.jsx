import { IconButton, Input, InputAdornment } from "@mui/material";
import { Save } from "@mui/icons-material";
import { useCurrencyContext } from "../../../context/currencyContext";
import { useSnackbar } from "notistack";

const TableInputEdit = ({ id, editedValue, setEditMode, setEditedValue }) => {
    const { setDataCurrency } = useCurrencyContext();
    const { enqueueSnackbar } = useSnackbar();

    function handleSaveClick(id, newValue) {
        setDataCurrency((prevData) =>
            prevData.map((record) => (record.id === id ? { ...record, value_clp: newValue } : record))
        );
        setEditMode(false);
        // Alert
        enqueueSnackbar("El registro se ha editado correctamente.", {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    }
    return (
        <Input
            value={editedValue || ""}
            onChange={(e) => setEditedValue(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={() => handleSaveClick(id, editedValue)} color="primary">
                        <Save />
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default TableInputEdit;
