import { combineReducers, } from 'redux';
import ChatLogReducer from './reducer_chatLog_active';
import ChatLogData from './reducer_chatLog_data'
import initialCities from './reducer_initial_cities';
import getTheRoom from './reducer_getTheRoom_active';
import ChatListData from './reducer_chatList_data';
import databaseReducer from './reducer_database_active';

const reducers = combineReducers ({
  chatLogs: ChatLogReducer,
  mockupData: ChatLogData,
  cities: initialCities,
  databaseReducer,
  getTheRoom: getTheRoom,
  ChatListData,
})

export default reducers;