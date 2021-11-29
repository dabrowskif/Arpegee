import React from 'react';

import { ButtonBase, Grid } from '@mui/material';
import useStyles from './styles.js';
import { getItemAvatar, getItemBorderColor } from '../../../../img/imgFunctions';

const BackpackItem = ({ item, onItemClick }) => {
  const customStyleProps = { outlineColor: getItemBorderColor(item?.rarity) };
  const classes = useStyles(customStyleProps);

  return (
    <Grid item xs={3} sm={2} md={3} className={classes.backpackItem}>
      <Grid container>
        <Grid item xs={12}>
          <ButtonBase onClick={() => onItemClick(item)}>
            <img className={classes.backpackItemAvatar} src={getItemAvatar(item?.subtype)} alt="avatar" />
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BackpackItem;
