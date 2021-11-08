import React from 'react';
import { Grid, Typography } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import useStyles from './styles.js';

import ValueBar from './ValueBar.js';

// TODO Refactor this component (DRY and unnecessary props)
const InfoRow = ({
  xs, sm, md, justifyContent, shouldDisplayBar, shouldDisplayName, name, minValue, maxValue, currentValue,
}) => {
  const classes = useStyles();

  const display = () => {
    switch (name) {
      case 'level':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <DoubleArrowIcon sx={{ color: '#EFB821' }} fontSize="large" />
            <Typography whiteSpace="nowrap" variant="h6">
              {' '}
              {shouldDisplayName ? `Level: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      case 'healthpoints':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <FavoriteIcon sx={{ color: 'RED' }} fontSize="large" />
            {shouldDisplayBar
              ? <ValueBar primaryColor="red" secondaryColor="#ffcccb" minValue={0} maxValue={maxValue} currentValue={currentValue} />
              : (
                <Typography whiteSpace="nowrap" variant="h6">
                  {' '}
                  {shouldDisplayName ? `HP: ${currentValue}` : currentValue}
                  {' '}
                </Typography>
              )}
          </Grid>
        );

      case 'experience':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <AddCircleOutlineIcon sx={{ color: 'GOLD' }} fontSize="large" />
            {shouldDisplayBar
              ? <ValueBar primaryColor="#EFB821" secondaryColor="#ECD288" minValue={minValue} maxValue={maxValue} currentValue={currentValue} />
              : (
                <Typography variant="h6">
                  {' '}
                  {shouldDisplayName ? `XP: ${currentValue}` : currentValue}
                  {' '}
                </Typography>
              )}
          </Grid>
        );

      case 'damage':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <FlashOnIcon sx={{ color: 'BROWN' }} fontSize="large" />
            <Typography variant="h6">
              {' '}
              {shouldDisplayName ? `Damage: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      case 'defense':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <SecurityIcon sx={{ color: 'GRAY' }} fontSize="large" />
            <Typography variant="h6">
              {' '}
              {shouldDisplayName ? `Armor: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      case 'strength':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <FitnessCenterIcon sx={{ color: 'RED' }} fontSize="large" />
            <Typography variant="h6">
              {' '}
              {shouldDisplayName ? `Str: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      case 'dexterity':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <DirectionsRunIcon sx={{ color: 'GREEN' }} fontSize="large" />
            <Typography variant="h6">
              {' '}
              {shouldDisplayName ? `Dex: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      case 'intelligence':
        return (
          <Grid item xs={12} className={justifyContent ? classes.rowJustify : classes.row}>
            <ImportContactsIcon sx={{ color: 'BLUE' }} fontSize="large" />
            <Typography variant="h6">
              {' '}
              {shouldDisplayName ? `Int: ${currentValue}` : currentValue}
              {' '}
            </Typography>
          </Grid>
        );

      default:
        break;
    }
  };

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Grid container className={classes.infoRow}>
        {display()}
      </Grid>
    </Grid>
  );
};

export default InfoRow;
