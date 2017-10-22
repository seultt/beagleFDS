import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const postCreateToDB = (create, callback) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })
    axios.post(`${SERVER_ADDRESS}/api/chat-rooms`, create)
    .then(res => {
      console.log(res)

       dispatch({
        type: 'GET_A_ROOM_SUCCESS',
        payload: res
      })

      callback(res.data[2].id)
    })
  }
}

export const getChatRoomFromDB = ({id, user_id}) => {
  return (dispatch) => {

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })

    axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${id}`, {
      params: {id, user_id},
      // {Authorization: `Bearer ${token}`} // 지금 토큰이 없으므로...
    })
    .then(res => {
      console.log(res)

       dispatch({
        type: 'GET_A_ROOM_SUCCESS',
        payload: res
      })
    })
    .catch(e => console.log(e.message))
  }
}