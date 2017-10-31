// import axios from 'axios';
// import SERVER_ADDRESS from '../config'

export const enterTheChat = (logs) => {
  return {
    type:'ENTER_THE_CHAT',
    payload: logs
  }
}

export const createdTheLog = (log) => {
  return {
    type: 'CREATED_THE_LOG',
    payload: log
  }
}

export const resetTheReducerLogs = () => {
  // console.log('reset the logs!!')
  return {
    type: 'RESET_THE_LOGS'
  }
}


