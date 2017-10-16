import { combineReducers, } from 'redux';
import ChatLogReducer from './reducer_chatLog_active';
import ChatLogData from './reducer_chatLog_data'
import initialCities from './reducer_initial_cities';

const reducers = combineReducers ({
  chatLogs: ChatLogReducer,
  mockupData: ChatLogData,
  cities: initialCities,
  
})

export default reducers;