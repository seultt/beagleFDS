import axios from 'axios';

export const sendMessageFromDB = ({message, token, id}) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_A_SEND_MESSAGE',
    })

    axios.post(`http://192.168.0.41:9494/api/chat-rooms/${id}`, {message, token, id})
    .then(res => {
      console.log('ok')
    })
    .catch(e => console.log(e.message))
  }
}