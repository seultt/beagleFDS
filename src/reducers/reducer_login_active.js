const DEFAULT_STATE = {
  isLogin: false, // 로그인 여부
  currentUser: { // 로그인한 유저의 정보
    id: 0,  //
    nickname: '', // user.nickname,
    like: 0,  // user.like
    photo: '',  // user.profile_photo,
  },
}

const authReducer = (
  state = DEFAULT_STATE, 
  action = null
) => {
  if (action.type === 'LOGIN_USER_REQUEST') {
    return {
      ...state,
    }
  }

  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      isLogin: !state.isLogin,
      currentUser: {
        id: action.payload.id,
        nickname: action.payload.nickname,
        like: action.payload.like,
        photo: action.payload.photo,
      }
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
      isLogin: !state.isLogin,  // true된 isLogin 값을 false로 반환
      currentUser: {
        id: '',
        nickname: '',
        profilePhoto: '',
      }
    }
  }

  return {
    ...state,
  }

}

export default authReducer;