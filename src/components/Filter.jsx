import React, { useState } from 'react';
import { useActions } from '../app/hooks';
import { TextField, Button, Box } from '@mui/material';

const Filter = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const { filterByRange } = useActions();

  const handleFilter = () => {
    const minValue = Number(min);
    const maxValue = Number(max);

    if (!isNaN(minValue) && !isNaN(maxValue)) {
      filterByRange([minValue, maxValue]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        mb: 4,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      <TextField
        label="Min ID"
        variant="outlined"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        fullWidth
      />
      <TextField
        label="Max ID"
        variant="outlined"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleFilter}>Filter</Button>
    </Box>
  );
};

export default Filter;
