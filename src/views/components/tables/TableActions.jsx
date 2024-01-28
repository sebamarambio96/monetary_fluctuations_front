import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
/* import { useValue } from "../../../context/ContextProvider"; */


const TableActions = ({ params }) => {
    function deleteRoom(){}


    function editData(id) {
        console.log(id);
        return { id };
    }
    
    function deleteData(id) {
        console.log(id);
        return { id };
    }
    return (
        <Box>
            <Tooltip title="Editar">
                <IconButton onClick={() => {editData(params.row.id)}}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar">
                <IconButton onClick={() => deleteData(params.row.id)}>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default TableActions;
