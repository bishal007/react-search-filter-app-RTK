import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filterByRange, search, resetFilteredItems } from '../features/dataSlice';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ filterByRange, search, resetFilteredItems }, dispatch);
};
