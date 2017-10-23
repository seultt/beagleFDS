import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const getChatList = () => {
  return (dispatch) => {
    // console.log('getChatList 데이터 요청-로딩부분');
    // dispatch({
    //   type: 'GET_CHAT_LIST_REQUEST',
    // })

    axios.get(`${SERVER_ADDRESS}/api/chat-list`, {
      // cors 문제 해결하려면 아래 header를 넣어줘야한다.
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(
      (res) => {
        dispatch({
          type: 'GET_CHAT_LIST_SUCCESS',
          payload: res,
        })
      }
    ).catch(
      (error) => {
        console.error(error)
        // dispatch({
        //   type: 'GET_CHAT_LIST_FAILED',
        // }) 
      }
    )
  }
}

// export const getChatList = (param = '?citiy=3&date=201;') => {
//   return (dispatch) => {
//     console.log('getChatList 데이터 요청-로딩부분');
//     dispatch({
//       type: 'GET_CHAT_LIST_REQUEST',
//     })

//     axios.get(`https://test.younghea.com/${param}`)
//     .then(
//       (res) => {
//         console.log(res);
//         dispatch({
//           type: 'GET_CHAT_LIST_SUCCESS',
//           payload: res,
//         })
//       }
//     ).catch(
//       (error) => {
//         console.error(error)
//         dispatch({
//           type: 'GET_CHAT_LIST_FAILED',
//         }) 
//       }
//     )
//   }
// }