import axios from 'axios';

export const postCreateToDB = (create, callback) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })
    axios.post('http://192.168.0.41:9494/api/chat-rooms', create)
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

export const getChatRoomFromDB = (id) => {
  return (dispatch) => {

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })

    axios.get(`http://192.168.0.7:9494/api/chat-rooms/${id}`, {
      params: {id},
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