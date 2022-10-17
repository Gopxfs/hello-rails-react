import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getDataThunk = createAsyncThunk(
  'messages/getData',
  async () => {
    const response = await fetch('http://localhost:3000/greeting_message', {
      method: 'GET',
      mode: 'cors',
      headers: 'Access-Control-Allow-Origin: *',
      cache: 'default',
    })
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