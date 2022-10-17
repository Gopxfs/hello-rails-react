import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataThunk = createAsyncThunk(
  'messages/getData',
  async () => {
    const response = await axios.get('http://localhost:3000/greeting_message')
      .then((response) => response.json());

    return response;
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    message: 'Greeting message',
  },
  extraReducers: {
    [getDataThunk.fulfilled]: (state, { payload }) => {
      return {
        greeting: payload.messages.text,
      };
    },
  },
});

export default messagesSlice.reducer;