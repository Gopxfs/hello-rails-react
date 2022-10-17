import { useDispatch, useSelector } from 'react-redux';
import { getDataThunk } from '../redux/messages/messages';

let load = false;

const Messages = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.messages);
  console.log(message);

  if (!load) {
    load = true;
    dispatch(getDataThunk());
  }


  return (
    <h1>{message}</h1>
  );
};

export default Messages