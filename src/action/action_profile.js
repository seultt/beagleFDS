import axios from 'axios'
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

export const getMyRooms = (user_id) => {
  return (dispatch) => {

    dispatch({
      type: 'PROFILE_ROOMS_REQUEST'
    })

    axios.get(`${SERVER_ADDRESS}/api/profile?id=${user_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
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

// export const deleteMyRoom = (user_id, room_id) => {
//   return (dispatch) => {
    
//     return axios.delete(`${SERVER_ADDRESS}/profile?id=${user_id}&roomId=${room_id}`, {
//       Authorization: `Bearer ${token}`
//     })
//     .then(res => {
//       console.log('삭제되어따', res)

//       // dispatch({
//       //   type: 'PROFILE_ROOM_DELETE'
//       // })
//     })
//     .catch(e => console.log(e.message))
//   }
// }

export const exitTheRoom = (user_id, room_id) => {
  return (dispatch, getState) => {
    
    return axios.delete(`${SERVER_ADDRESS}/api/profile/delete?user_id=${user_id}&id=${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      // res에는 룸 넘버
      console.log('방나오기 성공', res)

      const roomList = getState().myRooms
      console.log('겟스테이트', roomList)
      const newRoomList = roomList.map(rooms => {
        // room의 id와 res의 id가 다른 값만 반환 
        return rooms.filter(room => {
          return room.id !== res.data.id
        })
      })
      console.log('뉴룸리스트', newRoomList)
    
      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })
    })
    .catch(e => {
      console.log(e.message)

      // dispatch({
      //   type: 'DELETE_REQUEST_REJECTED',
      //   payload: roomList
      // })
    })
  }
}