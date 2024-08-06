import React, { useState } from 'react';
import { useActions } from '../app/hooks';
import { search } from '../features/dataSlice';
import { TextField, Button } from '@mui/material';

const Search = () => {
  const [query, setQuery] = useState('');
  const { search } = useActions({ search });

  const handleSearch = () => {
    search(query);
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default Search;
