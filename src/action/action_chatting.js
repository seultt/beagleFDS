// import axios from 'axios';

// export const sendMessageFromDB = ({message, user_id, id}) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'GET_A_SEND_MESSAGE',
//     })

//     axios.post(`http://192.168.0.7:9494/api/chat-rooms/${id}`, {message, user_id, id})
//     .then(res => {
//       console.log('ok')
//     })
//     .catch(e => console.log(e.message))
//   }
// }