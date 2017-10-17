const INITIAL_DATA = {
  isLoading: false,
  isError: false,
  id: 0,
  name: '',
  description: '',
  photo: '',
  start_at: '',
  city_id: 0,
}

const getTheRoom = (state = null, action = null) => {
  if (action.type === 'GET_A_ROOM_REQUEST')  {
      
    return {
      ...state,
      isLoading: true,
    } 
  }

  if (action.type === 'GET_A_ROOM')  {
     
    return {
      ...state,
      isLoading: false,
      id: action.payload.data.id,
      name: action.payload.data.name,
      description: action.payload.data.description,
      photo: action.payload.data.photo,
      start_at: action.payload.data.start_at,
      city_id: action.payload.data.city_id,
    } 
  }
  return {
    ...state,
  }
}


export default getTheRoom;
