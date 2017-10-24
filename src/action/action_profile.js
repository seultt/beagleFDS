import axios from 'axios'
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

export const getMyRooms = (user_id) => {
  return (dispatch) => {

    dispatch({
      type: 'PROFILE_ROOMS_REQUEST'
    })

    axios.get(`${SERVER_ADDRESS}/profile?id=${user_id}`, {
      Authorization: `Bearer ${token}`
    })
    .then(res => {
      console.log('요청왔어여', res.data[1])

      dispatch({
        type: 'PROFILE_ROOMS_SUCCESS',
        payload: res.data[1]
      })
    })
    .catch(e => console.log('failed!!!!', e.message))
  }
}

// 궁금증, 스토어를 바꾸지 않는 ajax함수는 어디에 넣어야 하는가? query를 하나 만들어야 하는가?
export const deleteMyRoom = (user_id, room_id) => {
  return (dispatch) => {
    
    return axios.delete(`${SERVER_ADDRESS}/profile?id=${user_id}&roomId=${room_id}`, {
      Authorization: `Bearer ${token}`
    })
    .then(res => {
      console.log('삭제되어따', res)

      // dispatch({
      //   type: 'PROFILE_ROOM_DELETE'
      // })
    })
    .catch(e => console.log(e.message))
  }
}

export const exitTheRoom = (user_id, room_id) => {
  return (dispatch) => {
    
    return axios.delete(`${SERVER_ADDRESS}/profile?id=${user_id}&roomId=${room_id}`, {
      Authorization: `Bearer ${token}`
    })
    .then(res => {
      console.log('방나옴', res)

      // dispatch({
      //   type: 'PROFILE_ROOM_DELETE'
      // })
    })
    .catch(e => console.log(e.message))
  }
}