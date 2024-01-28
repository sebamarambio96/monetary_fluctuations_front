import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { getCurrencyValues } from "../../services/ApiService";

function createData(id, name, calories) {
    return { id, name, calories };
}

function editData(id) {
    console.log(id);
    return { id };
}

function deleteData(id) {
    console.log(id);
    return { id };
}

const rows = [
    createData(1, "Frozen yoghurt", 1),
    createData(2, "Ice cream sandwich", 2),
    createData(3, "Eclair", 3),
    createData(4, "Cupcake", 4),
    createData(5, "Gingerbread", 5),
];

export default function BasicTable() {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell align="center">Valores (CLP)</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="Editar" color="warning" onClick={() => editData(row.id)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="Eliminar" color="error" onClick={() => deleteData(row.id)}>
                                    <DeleteForeverOutlinedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
