import axios from 'axios'
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

export const getMyRooms = (user_id) => {
  return (dispatch) => {
    console.log(user_id)

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