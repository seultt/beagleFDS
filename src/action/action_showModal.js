// 모달창 출력 액션
export const showModal = () => {
  return (dispatch, getState) => {
    const checkModal = getState().userData.showModal;
    let openModal;

    checkModal ? openModal = false : openModal = true;

    dispatch({
      type: 'CLICK_SHOW_MODAL',
      payload: {
        showModal: openModal,
      }
    })
  }
}