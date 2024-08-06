import React, { useState, useCallback } from 'react';
import { useAppSelector, useActions } from '../app/hooks';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TextField, Box } from '@mui/material';
import debounce from 'lodash.debounce';

const DataTable = () => {
  const { filteredItems } = useAppSelector(state => state.data);
  const { search, resetFilteredItems } = useActions();
  const [query, setQuery] = useState('');

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim() !== '') {
        search(query);
      } else {
        resetFilteredItems();
      }
    }, 300), // Adjust debounce delay as needed
    [search, resetFilteredItems]
  );

  // Handle search input change
  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <Box sx={{ p: 4, bgcolor: 'white', minHeight: '100vh' }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={query}
          onChange={handleChange}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
