import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container, Grid,
  Grow,
  Paper,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { increaseStat } from '../../../actions/characters.js';
import InfoRow from './InfoRow.js';
import useStyles from './styles.js';

const CharacterInfo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const userCharacter = useSelector((state) => state?.characters?.userCharacter);
  const rankingCharacter = useSelector((state) => state?.ranking?.rankingCharacter?.result);
  const [character, setCharacter] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  const checkCharacter = () => {
    // TODO when typing raw-url, make a nice CircularProgress and fetch data correctly
    if (id === userCharacter?._id || id === undefined) {
      setIsOwner(true);
      setCharacter(userCharacter);
    } else {
      setIsOwner(false);
      setCharacter(rankingCharacter);
    }
  };

  const handleButtonClick = (e) => {
    const { name, value } = e.target;
    dispatch(increaseStat(name, value, userCharacter._id));
  };

  useEffect(() => {
    checkCharacter();
    // TODO is this needed \/ ?
  }, [userCharacter, rankingCharacter, character]);

  return (
    <Grow in>
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper} elevation={5}>
          {
            !character
              ? <Typography variant="h3">No character found!</Typography>
              : (
                <Grid container>
                  <Grid item xs={12}><Typography variant="h3">{character?.nickname}</Typography></Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4">
                      Level
                      {' '}
                      {character?.level}
                      {' '}
                      {character?.vocation}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container className={classes.statisticsContainer}>
                      <Grid item xs={12}><Typography variant="h5" textAlign="center"> Statistics </Typography></Grid>
                      <InfoRow
                        xs={12}
                        name="healthpoints"
                        shouldDisplayBar
                        minValue={0}
                        currentValue={character?.healthpoints}
                        maxValue={character?.maxHealthpoints}
                      />
                      <InfoRow
                        xs={12}
                        name="experience"
                        shouldDisplayBar
                        minValue={0}
                        currentValue={character?.experience - character?.totalExperienceToLevelUp + character?.experienceToLevelUp}
                        maxValue={character?.experienceToLevelUp}
                      />
                      <InfoRow xs={12} sm={6} name="damage" currentValue={character?.damage} shouldDisplayName />
                      <InfoRow xs={12} sm={6} name="defense" currentValue={character?.defense} shouldDisplayName />
                      <InfoRow
                        xs={12}
                        sm={4}
                        name="strength"
                        currentValue={character?.statistics?.strength}
                        shouldDisplayName
                      />
                      <InfoRow
                        xs={12}
                        sm={4}
                        name="dexterity"
                        currentValue={character?.statistics?.dexterity}
                        shouldDisplayName
                      />
                      <InfoRow
                        xs={12}
                        sm={4}
                        name="intelligence"
                        currentValue={character?.statistics?.intelligence}
                        shouldDisplayName
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container className={classes.equipmentContainer}>
                      <Grid item xs={12}><Typography variant="h5" textAlign="center"> Equipment </Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
          }
          {
            isOwner
              ? (
                <Grid container className={classes.buttonsMenu}>
                  <Grid item xs={2}><Button name="strength" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+str</Button></Grid>
                  <Grid item xs={2}><Button name="dexterity" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+dex</Button></Grid>
                  <Grid item xs={2}><Button name="intelligence" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+int</Button></Grid>
                  <Grid item xs={2}><Button name="level" value={1} variant="contained" color="primary" onClick={handleButtonClick}>+level</Button></Grid>
                  <Grid item xs={2}><Button name="healthpoints" value={10} variant="contained" color="primary" onClick={handleButtonClick}>+hp</Button></Grid>
                  <Grid item xs={2}><Button name="experience" value={50} variant="contained" color="primary" onClick={handleButtonClick}>+xp</Button></Grid>
                </Grid>
              )
              : null
            }
        </Paper>
      </Container>
    </Grow>
  );
};

export default CharacterInfo;
