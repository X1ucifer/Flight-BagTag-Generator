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
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      
        // width:"20%",
    },
  

    
}));

export default function Form2() {

    const classes = useStyles();

    const [select, setSelect] = useState("6E");
    const [pnr, setPnr] = useState("QDRC9N");
    const [email, setEmail] = useState("madhuchiny@gmail.com");

    
      const router = useRouter();

    console.table({select, email, pnr})

    function createItem() {
        localStorage.setItem("Email",  email);
        localStorage.setItem("PNR",  pnr);
        localStorage.setItem("Select",  select);

        router.push("/madhu/bagtag")
      }

 
    return (
        <div className={classes.root} style={{marginTop:"10%"}}>
            <Container fixed>
                <Grid container spacing={3}>

                    <Grid item xs={5}>
                        <TextField onChange={(e) => setPnr(e.target.value)}
							defaultValue={pnr} style={{ width: '100%' }} id="standard-basic" label="PNR/Booking Reference" />

                    </Grid>
                    <Grid item xs={2} >
                        <div style={{ marginTop: '9%' }}>


                            <NativeSelect
                                value={select}
                                name="age"
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'age' }}
                                onChange={(e) => setSelect(e.target.value)}
                            >
                                <option value="6E">6E</option>
                                <option value="TK">TK</option>
                                {/* <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option> */}
                            </NativeSelect>
                        </div>
                    </Grid>
                    <Grid item xs={5}>

                        <TextField onChange={(e) => setEmail(e.target.value)}
							defaultValue={email} type="text" style={{ width: '100%' }} id="standard-basic" label="Email/Last Name" />

                    </Grid>

                </Grid>
                <Button size='large' onClick={createItem} style={{ marginTop: '25px', float:"right" }} variant="contained" color="primary">
                    Create Bag Tag
                </Button>
            </Container>
        </div>
    );
}