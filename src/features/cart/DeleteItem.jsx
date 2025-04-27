import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const DeleteItem = ({pizzaId}) => {
    const dispatch = useDispatch()

  return (
    <Button onClick={(() => dispatch(deleteItem(pizzaId)))} type="small">Delete</Button>
  );
};

export default DeleteItem;