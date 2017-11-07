import axios from 'axios'
import SERVER_ADDRESS from '../config'

// delete루트가 생길 경우 사용할 액션 크리에이터 
export const deleteTheRoom = (room_id) => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('jwtToken')

    return axios.delete(`${SERVER_ADDRESS}/api/profile/chatRooms/${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {

      const roomList = getState().myRooms
      const newRoomList = roomList.map(rooms => {
        return rooms.filter(room => {
          return room[1].id !== res.data.id
        })
      })

      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })
    })
    .catch(e => console.log(e.message))
  }
}

export const exitTheRoom = (room_id) => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('jwtToken')
    
    return axios.delete(`${SERVER_ADDRESS}/api/profile/chatList/${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {

      const roomList = getState().myRooms
      const newRoomList = roomList.map(rooms => {
        return rooms.filter(room => {
          return room[1].id !== res.data.id
        })
      })
    
      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })

    })
    .catch(e => {
      console.log(e.message)
    })
  }
}

// 유저아이디를 가지고 소속되어있는 모든 방의 아이디를 가져옴 
export const getRooms = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('jwtToken')
    
    dispatch({
      type: 'PROFILE_ROOMS_REQUEST'
    })

    return axios.get(`${SERVER_ADDRESS}/api/profile/rooms`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rooms =>{
      // roomIds는 배열로 들어온다.
      const ownedRooms = []
      const participatedRooms = []
      const myRooms = []
      const currentUserId = getState().userData.currentUser.id

      rooms.data.map(room => {
        if(room[1].creator === currentUserId) {
          ownedRooms.push(room)
        } else {
          participatedRooms.push(room)
        }
      })

      myRooms.push(ownedRooms)
      myRooms.push(participatedRooms)

      dispatch({
        type: 'PROFILE_ROOMS_SUCCESS',
        payload: myRooms
      })
    })
    .catch(e => console.log('roomsFailed', e.message))
  }
}