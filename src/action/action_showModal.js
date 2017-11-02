// 모달창 출력 액션
export const showModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLICK_SHOW_MODAL',
      payload: {
        showModal: !getState().userData.showModal,
      }
    })
  }
}