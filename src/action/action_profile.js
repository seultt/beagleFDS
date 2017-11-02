import axios from 'axios'
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

// delete루트가 생길 경우 사용할 액션 크리에이터 
export const deleteTheRoom = (room_id) => {
  return (dispatch, getState) => {

    return axios.delete(`${SERVER_ADDRESS}/api/profile/chatRooms/${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log('방 삭제 성공',res)

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
    
    return axios.delete(`${SERVER_ADDRESS}/api/profile/chatList/${room_id}`, {
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
        return rooms.filter(room => {
          return room[1].id !== res.data.id
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
    })
  }
}

// 유저아이디를 가지고 소속되어있는 모든 방의 아이디를 가져옴 
export const getRooms = () => {
  return (dispatch, getState) => {
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
      console.log('rooms', rooms)
      const ownedRooms = []
      const participatedRooms = []
      const myRooms = []
      const currentUserId = getState().userData.currentUser.id

      rooms.data.map(room => {
        console.log(room[1].creator, currentUserId, '********')
        if(room[1].creator === currentUserId) {
          ownedRooms.push(room)
        } else {
          participatedRooms.push(room)
        }
      })

      myRooms.push(ownedRooms)
      myRooms.push(participatedRooms)
      console.log(myRooms)
      dispatch({
        type: 'PROFILE_ROOMS_SUCCESS',
        payload: myRooms
      })
    })
    .catch(e => console.log('roomsFailed', e.message))
  }
}