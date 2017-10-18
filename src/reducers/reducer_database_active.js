const INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  chatList: [],
}

const databaseReducer = (state = INITIAL_STATE, action = null) => {

  if (action.type === 'GET_CHAT_LIST_REQUEST')  {
   return {
     ...state,
     isLoading: true,
   } 
  }
  if (action.type === 'GET_CHAT_LIST_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      chatList: action.payload,
    }
  }
  if (action.type === 'GET_CHAT_LIST_FAILED') {
    return {
      ...state,
      isLoading: false,
      errorState: true,
    }
  }

  return {
    ...state,
  }
}


export default databaseReducer;