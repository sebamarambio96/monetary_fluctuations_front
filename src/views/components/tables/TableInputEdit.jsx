import { IconButton, Input, InputAdornment } from "@mui/material";
import { Save } from "@mui/icons-material";
import { useCurrencyContext } from "../../../context/currencyContext";

const TableInputEdit = ({ id, editedValue, setEditMode, setEditedValue }) => {
    const { setDataCurrency } = useCurrencyContext();

    function handleSaveClick(id, newValue) {
        setDataCurrency((prevData) =>
            prevData.map((record) => (record.id === id ? { ...record, value_clp: newValue } : record))
        );
        setEditMode(false);
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
