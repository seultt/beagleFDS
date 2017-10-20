import { combineReducers, } from 'redux';
import ChatLogReducer from './reducer_chatLog_active';
import ChatLogData from './reducer_chatLog_data'
import initialCities from './reducer_initial_cities';
import iniialSort from './reducer_initial_sort';
import getTheRoom from './reducer_getTheRoom_active';
import ChatListData from './reducer_chatList_data';
import databaseReducer from './reducer_database_active';
import user from './reducer_login_active';

const reducers = combineReducers ({
  chatLogs: ChatLogReducer,
  mockupData: ChatLogData,
  cities: initialCities,
  sort: iniialSort,
  databaseReducer,
  getTheRoom: getTheRoom,
  ChatListData,
  user,
})

export default reducers;