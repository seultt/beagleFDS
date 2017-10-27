const INITIAL_STATE = [[], []]

const myRooms = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'PROFILE_ROOMS_REQUEST':
      return state
      break

    case 'PROFILE_ROOMS_SUCCESS':
      return action.payload

    // case 'DELETE_REQUEST_REJECTED':
    //   return action.payload

    case 'PROFILE_ROOM_DELETE':
      return action.payload

    case 'PROFILE_ROOM_IDS':
      return action.payload

    default:
      return state
  }
}

export default myRooms