// 모달창 출력 액션
export const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLICK_SHOW_MODAL'
    })
  }
}