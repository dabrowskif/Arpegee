import React, { useState } from 'react';

import { Grid } from '@mui/material';
import useStyles from './styles.js';
import BackpackItem from './BackpackItem';
import ItemDetailsModal from '../../../Modals/ItemDetails';

const Backpack = ({ items, maxHeight, showItemModalOptions }) => {
  const [openItemDetailsModal, setOpenItemDetailsModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const handleOpenItemDetailsModal = () => setOpenItemDetailsModal(true);
  const handleCloseItemDetailsModal = () => setOpenItemDetailsModal(false);

  const classes = useStyles();

  const onItemClick = async (item) => {
    await setModalItem(item);
    handleOpenItemDetailsModal();
  };

  return (
    <>
      <ItemDetailsModal item={modalItem} open={openItemDetailsModal} handleClose={handleCloseItemDetailsModal} showItemModalOptions={showItemModalOptions} />
      <Grid container className={classes.backpack} maxHeight={maxHeight} spacing={2}>
        {items.map((item) => (
          <BackpackItem key={item?.id} item={item} onItemClick={onItemClick} />
        ))}
      </Grid>
    </>
  );
};

export default Backpack;
