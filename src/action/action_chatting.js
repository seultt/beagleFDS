// import axios from 'axios';
// import SERVER_ADDRESS from '../config'

export const responsivMessage = (logs) => {
  return {
    type: 'ENTER_THE_CHAT',
    payload: logs
  }
}