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
    console.log('리듀서 데이터')
    console.log(action.payload)
    return {
      ...state,
      chatList: [...state.chatList, ...action.payload],
    }
  }
  if (action.type === 'GET_CHAT_LIST_FAILED') {
    return {
      ...state,
    }
  }
  if (action.type === 'GET_FILTERING_CHAT_LIST_REQUEST') {
    return {
      ...state,
    }
  }
  if (action.type === 'GET_FILTERING_CHAT_LIST_SUCCESS') {
    return {
      ...state,
      chatList: [...action.payload],
    }
  }
  if (action.type === 'GET_FILTERING_CHAT_LIST_FAILED') {
    return {
      ...state,
    }
  }
  return {
    ...state,
  }
}


export default databaseReducer;