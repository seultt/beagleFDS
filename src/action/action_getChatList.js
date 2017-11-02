import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const getChatList = (LAST_ID, LAST_LIKE, condition) => {
  return (dispatch) => {
    // getChatList 데이터 요청-로딩부분
    dispatch({
      type: 'GET_CHAT_LIST_REQUEST',
    })
    
    // 데이터 가져오는 부분
    axios.get(
        `${SERVER_ADDRESS}/api/chat-rooms?lastId=${LAST_ID}&lastLike=${LAST_LIKE}&${condition}`
      , {
      // CORS 문제 해결하려면 아래 header를 넣어줘야한다.
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(
        (res) => {
          console.log(`${SERVER_ADDRESS}/api/chat-rooms?lastId=${LAST_ID}&lastLike=${LAST_LIKE}&${condition}`)
          dispatch({
            type: 'GET_CHAT_LIST_SUCCESS',
            payload: res.data,
          })
        }
      )
      .catch(
        (error) => {
          dispatch({
            type: 'GET_CHAT_LIST_FAILED',
            payload: console.log(error),
          }) 
        }
      )
  }
}