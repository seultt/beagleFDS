const INITIAL_STATE = {

}

const chatLogReducer = (
  state = INITIAL_STATE,
  action = {}
) => {
  switch (action.type) {
    case 'GET_CHATLOG_SUCCESS':
      return action.payload;
  
    default:
      return {
        ...state,
      }
  }
}

export default chatLogReducer;