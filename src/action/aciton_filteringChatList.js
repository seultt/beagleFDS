import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const getFilteringChatList = (FILTER) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_FILTERING_CHAT_LIST_REQUEST',
    })
    
    // 데이터 가져오는 부분
    axios.get(
      `${SERVER_ADDRESS}/api/chat-list?${FILTER}`
      , {
      // CORS 문제 해결하려면 아래 header를 넣어줘야한다.
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(
        (res) => {
          dispatch({
            type: 'GET_FILTERING_CHAT_LIST_SUCCESS',
            payload: res.data,
          })
        }
      )
      .catch(
        (error) => {
          dispatch({
            type: 'GET_FILTERING_CHAT_LIST_FAILED',
            payload: console.log(error),
          }) 
        }
      )
  }
}