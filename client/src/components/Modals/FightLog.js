import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function FightLogModal({ fightLog, open, handleClose }) {
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
          {
            fightLog?.didWin
              ? (
                <>
                  <Typography variant="h6">
                    Fight won!
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    You have gained
                    {' '}
                    {fightLog?.experienceGained}
                    {' '}
                    experience.
                  </Typography>
                  <Typography>
                    {fightLog?.newLevel !== fightLog?.oldLevel
                      ? `You have advanced from level ${fightLog?.newLevel - 1} to level ${fightLog?.newLevel}`
                      : null}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>Loot collected:</Typography>
                </>
              )
              : (
                <>
                  <Typography variant="h6">
                    Fight lost.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    You have lost
                    {' '}
                    {fightLog?.experienceLost}
                    {' '}
                    experience.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    {fightLog?.newLevel !== fightLog?.oldLevel
                      ? `You have degraded from level ${fightLog?.oldLevel} to level ${fightLog?.newLevel}`
                      : null}
                  </Typography>
                </>
              )
          }
        </Box>
      </Modal>
    </div>
  );
}
