const DEFAULT_STATE = {
  isLogin: false, // 로그인 여부
  currentUser: {
    id: 0,
    nickname: '',// user.nickname,
    like: 0,// user.like
    photo: '',// user.profile_photo,
  }, // 로그인한 유저의 정보
  signingIn: false, // 회원가입 여부
  complete: true,
}

const authReducer = (
  state = DEFAULT_STATE, 
  action = null
) => {
  if (action.type === 'LOGIN_USER_REQUEST' ) {
    return {
      ...state,
    }
  }

  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
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
      nickname: '',
      profilePhoto: '',
    }
  }
  return {
    ...state,
  }

}

export default authReducer;