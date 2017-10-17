import axios from 'axios';

const postCreateToDB = (create) => {
  axios.post('http://192.168.0.217:3000/api/chat-rooms', create)
  .then(res => {
    return {
      type: 'CREATE_ROOM',
      payload: res
    }
  })
}

export default postCreateToDB
