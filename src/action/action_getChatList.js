import axios from 'axios';

export const getChatList = () => {
  return (dispatch) => {
    console.log('getChatList 데이터 요청-로딩부분');
    dispatch({
      type: 'GET_CHAT_LIST_REQUEST',
    })

    axios.get(`https://test.younghea.com/`)
    .then(
      (res) => {
        console.log(res);
        dispatch({
          type: 'GET_CHAT_LIST_SUCCESS',
          payload: res,
        })
      }
    ).catch(
      (error) => {
        console.error(error)
        dispatch({
          type: 'GET_CHAT_LIST_FAILED',
        }) 
      }
    )
  }
}