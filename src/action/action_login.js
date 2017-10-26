import axios from 'axios';
import SERVER_ADDRESS from '../config';

// 유저정보 AJAX 업데이트
export const updateUserInfo = (token) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_USER_REQUEST',
    })
    axios.get(`${SERVER_ADDRESS}/login`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then( 
        (res) => {
          // console.log(res);
          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: {
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
