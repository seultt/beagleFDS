import { combineReducers, } from 'redux';
import ChatLogReducer from './reducer_chatLog_active';
import ChatLogData from './reducer_chatLog_data'

const reducers = combineReducers ({
  chatLogs: ChatLogReducer,
  mockupData: ChatLogData,
})

export default reducers;