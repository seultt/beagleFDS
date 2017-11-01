const INITIAL_STATE = [[], []]

const myRooms = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'PROFILE_ROOMS_REQUEST':
      return state
      break

    case 'PROFILE_ROOMS_SUCCESS':
      return action.payload
      break
    // case 'DELETE_REQUEST_REJECTED':
    //   return action.payload

    case 'PROFILE_ROOM_DELETE':
      return action.payload
      break

    case 'PROFILE_ROOMS':
      return action.payload
      break
      
    default:
      return state
  }
}

export default myRooms