const DEFAULT_STATE = {
  showModal: false, // 모달창 출력 여부
}

const outputModal = (
  state = DEFAULT_STATE, action = null
) => {
  if (action.type === 'CLICK_SHOW_MODAL') {
    console.log('리듀서 들어왔냐?')
    console.log(!state.showModal);
    return {
      ...state,
      showModal: !state.showModal,
    } 
  }
  
  return {
    ...state,
  }
}

export default outputModal;