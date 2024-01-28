import { IconButton, Input, InputAdornment } from "@mui/material";
import { Save } from "@mui/icons-material";

const TableInputEdit = ({ editedValue, setEditMode, setEditedValue }) => {
    const handleSaveClick = () => {
        // Aquí deberías manejar la lógica para guardar el valor editado
        console.log("Valor editado:", editedValue);
        setEditMode(false);
    };
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
};

export default TableInputEdit;
