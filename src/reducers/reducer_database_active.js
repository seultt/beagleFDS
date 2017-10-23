const INITIAL_STATE = {
  chatList: [],
}

const databaseReducer = (state = INITIAL_STATE, action = null) => {

  if (action.type === 'GET_CHAT_LIST_REQUEST')  {
   return {
     ...state,
   }
  }
  if (action.type === 'GET_CHAT_LIST_SUCCESS') {
    return {
      ...state,
      chatList: [...action.payload.data]
    }
  }
  if (action.type === 'GET_CHAT_LIST_FAILED') {
    return {
      ...state,
    }
  }

  return {
    ...state,
  }
}


export default databaseReducer;