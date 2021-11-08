import React from 'react';

import { Divider, Grid, Typography } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import useStyles from './styles.js';
import InfoRow from '../../../Character/Summary/InfoRow';

// eslint-disable-next-line arrow-body-style
const CharacterShortInfo = ({ character }) => {
  // const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}><Typography variant="h4" textAlign="center" gutterBottom>INFO</Typography></Grid>
        <InfoRow xs={12} name="healthpoints" shouldDisplayBar shouldDisplayName minValue={0} currentValue={character?.healthpoints} maxValue={character?.maxHealthpoints} />
        <InfoRow xs={12} name="experience" shouldDisplayBar shouldDisplayName minValue={0} currentValue={character?.experience - character?.totalExperienceToLevelUp + character?.experienceToLevelUp} maxValue={character?.experienceToLevelUp} />
        <Divider sx={{ width: '100%', height: '20px', borderColor: '#531516' }} />
        <InfoRow xs={12} sm={12} name="level" currentValue={character?.level} shouldDisplayName />
        <InfoRow xs={12} sm={12} name="damage" currentValue={character?.damage} shouldDisplayName />
        <InfoRow xs={12} sm={12} name="defense" currentValue={character?.defense} shouldDisplayName />
      </Grid>
    </Grid>
  );
};

export default CharacterShortInfo;
