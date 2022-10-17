import { configureStore, combineReducers } from '@reduxjs/toolkit';
import messagesReducer from './messages/messages';

const rootReducer = combineReducers({
  messages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;