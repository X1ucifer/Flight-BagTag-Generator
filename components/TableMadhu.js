import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Tables() {
    const classes = useStyles();

    const [bag, setBag] = useState("1 Bag");
    const [bag1, setBag1] = useState("1 Bag");

    function createItem() {
        localStorage.setItem("Email", email);
        localStorage.setItem("PNR", pnr);
        localStorage.setItem("Select", select);
    }




    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Pax No.</StyledTableCell>
                            <StyledTableCell align="left">Passenger Name</StyledTableCell>
                            <StyledTableCell align="left">No.of Bags</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>



                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                1
                            </StyledTableCell>
                            <StyledTableCell align="left">Dilip Fernandez</StyledTableCell>
                            <StyledTableCell align="left">
                                <NativeSelect
                                    value={bag1}
                                    name="age"
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'age' }}
                                    onChange={(e) => setBag1(e.target.value)}
                                >
                                    <option value="1 Bag">1 Bag</option>
                                    <option value="2 Bag">2 Bag</option>
                                    {/* <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option> */}
                                </NativeSelect>
                            </StyledTableCell>

                        </StyledTableRow>



                    </TableBody>
                </Table>
            </TableContainer>

            <Link href="/madhu/tags">
                <Button size='large' style={{ marginTop: '25px', float: "right" }} variant="contained" color="primary">
                    Generate Bag Tag
                </Button>
            </Link>


            <h1 className=' font-bold text-xl mt-[100px]'>Chennai(T1) → Delhi(T2)</h1>
            <p className=' font-thin mb-[30px]'>4 July 2022,11:00 - 6E 6695
                - PNR - QDRC9N</p>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Pax No.</StyledTableCell>
                            <StyledTableCell align="left">Passenger Name</StyledTableCell>
                            <StyledTableCell align="left">No.of Bags</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>



                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                                1
                            </StyledTableCell>
                            <StyledTableCell align="left">Dilip Fernandez</StyledTableCell>
                            <StyledTableCell align="left">
                                <NativeSelect
                                    value={bag1}
                                    name="age"
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'age' }}
                                    onChange={(e) => setBag1(e.target.value)}
                                >
                                    <option value="1 Bag">1 Bag</option>
                                    <option value="2 Bag">2 Bag</option>
                                    {/* <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option> */}
                                </NativeSelect>
                            </StyledTableCell>

                        </StyledTableRow>



                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}