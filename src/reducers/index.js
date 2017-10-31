import { combineReducers, } from 'redux';
import chatLogs from './reducer_logs';
import initialCities from './reducer_initial_cities';
import iniialSort from './reducer_initial_sort';
import theRoom from './reducer_theRoom';
import databaseReducer from './reducer_database_active';
import userData from './reducer_login_active';
import myRooms from './reducer_profile';
import chatSearchText from './reducer_chatSearchText_active';

const reducers = combineReducers ({
  chatLogs,
  cities: initialCities,
  sort: iniialSort,
  databaseReducer,
  theRoom,
  userData,
  myRooms,
  chatSearchText,
})

export default reducers;