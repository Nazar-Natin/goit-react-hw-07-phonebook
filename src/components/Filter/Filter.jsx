import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="search"
      onChange={e => dispatch(filterContact(e.currentTarget.value))}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
