const INITIAL_DATA = {
  isLoading: false,
  isError: false,
  currentUser: [{
    user_id: 0,
    nickname: 'loading....'
  }],
  chattingLog: [
    {
      user_id: '',
      nickname: '',
      photo: '',
    }
  ],
  chattingInfo: {
    id: 0,
    name: '',
    description: '',
    photo: '',
    start_at: '',
    city_id: 1,
    creator: 0
  }
}

const getTheRoom = (state = INITIAL_DATA, action = null) => {
  if (action.type === 'GET_A_ROOM_REQUEST')  {
      
    return {
      ...state,
      isLoading: true,
    } 
  }

  if (action.type === 'GET_A_ROOM_SUCCESS')  {
     
    return {
      ...state,
      isLoading: false,
      currentUser: action.payload.data[0],
      chattingLog: action.payload.data[1],
      chattingInfo: {
        id: action.payload.data[2].id,
        name: action.payload.data[2].name,
        description: action.payload.data[2].description,
        photo: action.payload.data[2].photo,
        start_at: action.payload.data[2].start_at,
        city_id: action.payload.data[2].city_id,
        creator: action.payload.data[2].creator
      }
    } 
  }
  return {
    ...state,
  }
}


export default getTheRoom;
