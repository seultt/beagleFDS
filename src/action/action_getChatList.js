import axios from 'axios';

export const getChatList = () => {
  return (dispatch) => {
    console.log('jflf');
    dispatch({
      type: 'GET_CHAT_LIST_REQUEST',
    })

    axios.get(`http://test.swtpumpkin.com/`)
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