import React, {useState} from 'react';
import useStyles from "./styles";
import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";


const CharactersFilter = () => {
    const classes = useStyles();

    const initialState = {nickname: '', vocation: 'warrior', minLevel: 1, maxLevel: 999};

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    return (
        <Paper elevation={5}>
            <Grid container className={classes.mainGrid}>
                <Typography gutterBottom variant="h4">Filtering options</Typography>
                <FormControl onSubmit={handleSubmit}>
                    <Divider textAlign="left">Nickname</Divider>
                    <Grid item className={classes.nicknameTextField}>
                        <TextField fullWidth placeholdername="nickname" variant="outlined" label="Nickname" handleChange={handleChange}/>
                    </Grid>
                    <Divider textAlign="left">Vocation</Divider>
                    <RadioGroup className={classes.radioGroup} aria-label="Vocation" name="vocation" value={formData.vocation} onChange={handleChange}>
                        <Grid container>
                            <Grid item xs={6} sm={12} md={6}>
                                <FormControlLabel value="warrior" control={<Radio />} label="Warrior"/>
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                                <FormControlLabel value="mage" control={<Radio />} label="Mage" />
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                                <FormControlLabel value="berserker" control={<Radio />} label="Berserker" />
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                                <FormControlLabel value="all" control={<Radio />} label="All" />
                            </Grid>
                        </Grid>
                    </RadioGroup>
                    <Divider textAlign="left">Level range</Divider>
                    <Grid container className={classes.levelRangeGrid}>
                        <Grid item xs={5}>
                            <TextField name="minLevel" variant="outlined" label="1" handleChange={handleChange}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align="center">to</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField name="maxLevel" variant="outlined" label="999" handleChange={handleChange}/>
                        </Grid>
                    </Grid>
                    <Button type="submit" className={classes.filterButton} variant="contained" color="primary">Filter</Button>
                    <Button type="reset" variant="contained" color="primary">Reset</Button>
                </FormControl>
            </Grid>
        </Paper>
    );
};

export default CharactersFilter;
