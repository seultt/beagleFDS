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
    // console.log(action.payload)
    return {
      ...state,
      // chatList: [...this.state.chatList, ...action.payload],
      chatList: [...action.payload],
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