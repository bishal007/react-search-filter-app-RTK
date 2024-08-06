import React, { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { fetchData } from './features/dataSlice';
import Filter from './components/Filter';
import DataTable from './components/Table';
import { Container, Typography } from '@mui/material';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Data Table
      </Typography>
      <Filter />
      <DataTable />
    </Container>
  );
};

export default App;
