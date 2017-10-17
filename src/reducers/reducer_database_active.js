const databaseReducer = (state = null, action = null) => {

  if (action.type === 'CREATE_ROOM')  {
   return {
     ...state,
     chat_rooms: [ ...action.payload ],
   } 
  }
  return {
    ...state,
  }
}


export default databaseReducer;