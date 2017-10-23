const INITIAL_STATE = [[], []]

const myRooms = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'PROFILE_ROOMS_REQUEST':
      return state
      break

    case 'PROFILE_ROOMS_SUCCESS':
      return [
        ...action.payload
      ]

    default:
      return state
  }
}

export default myRooms