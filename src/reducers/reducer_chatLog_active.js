const INITIAL_DATA = {
  isLoading: false,
  errorState: false,
  chattingLog: [],
}

const chatLogReducer = (
  state = INITIAL_DATA,
  action = {}
) => {

  if (action.type === 'ENTER_THE_CHAT') {
    const temp = state.chattingLog
    return {
      ...state,
      errorState: false,
      chattingLog: [...action.payload, ...temp]
    }
  }

  if (action.type === 'CREATED_THE_LOG') {
    return {
      ...state,
      errorState: false,
      chattingLog: [...state.chattingLog, action.payload,]
    }
  }
  
  return {
    ...state,
  }


}

export default chatLogReducer;