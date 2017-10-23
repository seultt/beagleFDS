import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const getChatList = () => {
  return (dispatch) => {
    // console.log('getChatList 데이터 요청-로딩부분');
    // dispatch({
    //   type: 'GET_CHAT_LIST_REQUEST',
    // })

    axios.get(`${SERVER_ADDRESS}/api/chat-list`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(
      (res) => {
        console.log('통신은 된겁니까?');
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