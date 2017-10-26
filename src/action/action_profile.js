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
    
    return axios.delete(`${SERVER_ADDRESS}/api/profile/delete?id=${room_id}`, {
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
          return room.id !== parseInt(res.data.id)
        })
      })
      console.log('뉴룸리스트', newRoomList)
    
      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })

    })
    .then(() => {
      // 삭제된 유저를 제외하고 리스트를 돌려준다. 
      const userList = getState().theRoom.currentUser
      // id가 맞는지 확인할것 
      const userId = getState().userData.currentUser.id
      console.log('유저리스트, 유저아이디', userList, userId)
      const newUserList = userList.filter(user => {
        return user.user_id !== userId
      })
      console.log('뉴 유저리스트', newUserList)
      dispatch({
        type: 'EXIT_THE_USER',
        payload: newUserList
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