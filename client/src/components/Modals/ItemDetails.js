import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { getItemBorderColor } from '../../img/imgFunctions';

export default function ItemDetailsModal({ item, open, handleClose, showItemModalOptions }) {
  return (
    <div>
      <Modal
        open={open || false}
        onClose={handleClose}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          color: '#FFFFFF',
          backgroundColor: '#531516',
          border: '2px solid #FFFFFF',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4 }}
        >
          <>
            <Typography variant="h4" color={getItemBorderColor(item?.rarity)}>
              {item?.subtype}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              {item?.type}
              {' '}
              -
              {' '}
              {item?.itemLevel}
              {' '}
              lvl
            </Typography>
            <Typography>
              Class:
              {'   '}
              {item?.requiredClass}
            </Typography>
            <Typography>
              Statistics:
              {'   '}
            </Typography>
            {
              showItemModalOptions
                ? (
                  <>
                    <Button variant="text">EQUIP</Button>
                    <Button variant="text">SELL</Button>
                  </>
                )
                : null
            }
          </>
        </Box>
      </Modal>
    </div>
  );
}
