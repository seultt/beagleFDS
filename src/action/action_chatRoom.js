import axios from 'axios';
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

export const postCreateToDB = (create, callback) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })
    axios.post(`${SERVER_ADDRESS}/api/chat-rooms`, create, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res.data)

      axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${res.data.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res)
  
         dispatch({
          type: 'GET_A_ROOM_SUCCESS',
          payload: res
        })
      })
      .catch(e => console.log(e.message))

      callback(res.data.id)
    })
  }
}

export const getChatRoomFromDB = ({id, user_id}) => {
  return (dispatch) => {

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })

    axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${id}/?user_id=${user_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      // console.log(res)

       dispatch({
        type: 'GET_A_ROOM_SUCCESS',
        payload: res
      })
    })
    .catch(e => console.log(e.message))
  }
}

export const enterTheNewUser = (user) => {
  return {
    type:'ENTER_THE_NEW_USER',
    payload: user
  }
}

export const resetTheReducerRoom = () => {
  // console.log('reset the logs!!')
  return {
    type: 'RESET_THE_ROOM'
  }
}