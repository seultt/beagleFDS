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

