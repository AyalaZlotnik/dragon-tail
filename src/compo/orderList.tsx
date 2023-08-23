
import * as React from "react";
//import { useGetPokemonByNameQuery } from "./services/pokemon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import data from "../mockData.json";//
import { useDispatch, useSelector } from "react-redux";
import { setListOrders } from "../redux-toolkit/orderSlice.ts";
import axios from 'axios'
import { RootState } from "../redux-toolkit/store";
import { DisplayOrder } from "./displatOrder.tsx";
export const OrderList = () => {
    const dispatch = useDispatch()
    const orderList = useSelector((state: RootState) => state.orders.list)
    const [currentOrder, setCurrentOrder] = React.useState('')

    React.useEffect(() => {
        axios.get('data.json').then((data) => {
            console.log(data);
            dispatch(setListOrders(data?.data?.orders))
        }).catch((data) => {
            console.log(data);
        })
        // dispatch(getListOrders())
    }, [])
    // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
    const createData = (id: string, name: number, description: number) => {
        return { id, name, description };
    };
    // const rows = [
    //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    //   createData("Eclair", 262, 16.0, 24, 6.0),
    //   createData("Cupcake", 305, 3.7, 67, 4.3),
    //   createData("Gingerbread", 356, 16.0, 49, 3.9),
    // ];
    const loadData = () => {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">DESCRIPTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {orderList?.map((row) => (
                            <TableRow
                                key={row.id}
                                onClick={() => { setCurrentOrder(row.id) }}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };
    return <>{loadData()}
        <DisplayOrder id={currentOrder} closeModal={setCurrentOrder} /></>;
};


