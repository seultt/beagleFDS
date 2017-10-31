import { combineReducers, } from 'redux';
import chatLogs from './reducer_logs';
import initialCities from './reducer_initial_cities';
import iniialSort from './reducer_initial_sort';
import databaseReducer from './reducer_database_active';
import theRoom from './reducer_theRoom';
import userData from './reducer_login_active';
import myRooms from './reducer_profile';
// import outputModal from './reducer_showModal';

const reducers = combineReducers ({
  chatLogs,
  cities: initialCities,
  sort: iniialSort,
  databaseReducer,
  theRoom,
  userData,
  myRooms,
  // outputModal,
})

export default reducers;