import axios from 'axios';
import SERVER_ADDRESS from '../config';


// 로그인 클릭시
export const updateUserInfo = (token) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_USER_REQUEST',
    });
    axios.get(`${SERVER_ADDRESS}/login`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then( 
        (res) => {
          const checkToken = localStorage.getItem('jwtToken');
          let logined;
          let openModal;

          if (checkToken) {
            logined = true;
            openModal = false;
          } else {
            logined = false;
            openModal = true;
          }

          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: {
              isLogin: logined,
              showModal: openModal,
              id: res.data.id,
              nickname: res.data.nickname,
              like: res.data.like,
              photo: res.data.photo,
            }
          })
        }
      )
      .catch(
        (error) => {
          dispatch({
            type: 'LOGIN_USER_FAILED',
          })
          console.error(error);
        }
      )
  }
}

// 로그아웃 클릭시
export const logout = () => {
  return (dispatch, getState) => {
    const checkLogin = getState().userData.isLogin;
    let logined;

    if (checkLogin) {
      logined = false;
    } else {
      logined = true;
    }

    dispatch({
      type: 'LOGOUT',
      payload: {
        isLogin: logined,
      }
    })
  }
}