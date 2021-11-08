import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Container, FormControl, FormControlLabel, Grow, Paper, Radio, RadioGroup, Typography,
} from '@mui/material';
import useStyles from './styles.js';
import Input from '../../Auth/Input.js';
import { createCharacter } from '../../../actions/characters.js';

const CharacterCreation = ({ userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = { nickname: '', vocation: 'warrior', userId };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCharacter(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grow in>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={5}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Input name="nickname" label="Nickname" handleChange={handleChange} autoFocus />
            <Typography className={classes.typo}>Choose Your vocation</Typography>
            <FormControl className={classes.formControl} component="fieldset">
              <RadioGroup className={classes.radioGroup} aria-label="Vocation" name="vocation" value={formData.vocation} onChange={handleChange}>
                <FormControlLabel value="warrior" control={<Radio />} label="Warrior" />
                <FormControlLabel value="mage" control={<Radio />} label="Mage" />
                <FormControlLabel value="berserker" control={<Radio />} label="Berserker" />
              </RadioGroup>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">Create</Button>
          </form>
        </Paper>
      </Container>
    </Grow>
  );
};

export default CharacterCreation;
