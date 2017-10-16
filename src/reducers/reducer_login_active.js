const DEFAULT_STATE = {
  id: 0, 
  photo: '', 
  nickname: '',
  like: 0,
}

const authReducer = (
  state = DEFAULT_STATE, 
  action = {}
) => {
  if (action.type === 'LOGIN_USER_REQUEST' ) {
    return {
      ...state,
    }
  }

  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      nickname: action.payload.nickname,
      profilePhoto: action.payload.profileImageUrl,
      email: action.payload.email,
    }
  }

  if (action.type === 'LOGIN_USER_FAILED') {
    return {
      ...state,
    }
  }

  if (action.type === 'LOGOUT') {
    return {
      ...state,
      nickname:'',
      profilePhoto: '',
    }
  }
  return {
    ...state,
  }

}

export default authReducer;