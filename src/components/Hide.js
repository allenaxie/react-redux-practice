import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hide, show } from '../features/hide';

const Hide = () => {

    const dispatch = useDispatch();
    const hidden = useSelector((state) => state.hide.value);

  return (
    <>
    {hidden || <button onClick={() => {dispatch(hide())}}>Hide</button> }
    {hidden && <button onClick={() => dispatch(show())}>Show</button>}
    </>
  )
}

export default Hide;