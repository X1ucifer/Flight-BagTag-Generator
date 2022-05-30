import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Tables from './Table';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        // width:"20%",
    },



}));

export default function Form2({ reference }) {

    const classes = useStyles();

    const [select, setSelect] = useState("6E");
    const [pnr, setPnr] = useState("");
    const [email, setEmail] = useState("");




    console.table({ select, email, pnr })

    function createItem() {
        localStorage.setItem("Email", email);
        localStorage.setItem("PNR", pnr);
        localStorage.setItem("Select", select);
    }


    return (
        <div className={classes.root} style={{ marginTop: "5%", }}>
            <Container fixed>

                <h1 className=' font-bold text-xl'>Delhi(T1) → Chennai(T2)</h1>
                <p className=' font-thin mb-[30px]'>12 June 2022,11:00 - 6E 5098
                    - PNR - QJRD8N</p>

                <Tables />

                <div className='mt-[25px] bg-sky-100 w-[340px] p-[1px] mb-[40px]' ref={reference}>

                    <h1 className='pl-[10px] mt-[10px] font-medium  text-lg'>
                        Total Check-in Baggage allowed: <b>15KG</b></h1>
                    <p className='pl-[10px] font-thin mb-[30px]'>Hand baggage: One hand bag up to 7kgs.</p>
                </div>

            </Container>
        </div>
    );
}