import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataThunk } from '../redux/messages/messages';

const Messages = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.message);

  useEffect(() => {dispatch(getDataThunk())}, []);

  return (
    <h1>{message}</h1>
  );
};

export default Messages