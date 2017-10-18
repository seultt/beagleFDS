import axios from 'axios';

export const postCreateToDB = (create) => {
  return (dispatch) => {
    axios.post('http://192.168.0.217:9494/api/chat-rooms', create)
    .then(res => {
      console.log(res)

       dispatch({
        type: 'CREATE_ROOM',
        payload: res
      })
    })
  }
}

export const getChatRoomFromDB = (id) => {
  return (dispatch) => {

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })

    axios.get(`http://192.168.1.132:9494/api/chat-rooms/${id}`, {
      params: {id}
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