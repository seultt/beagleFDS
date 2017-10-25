const INITIAL_STATE = {
  searchText:'',
  activeIndex: -1,
}

const chatSearchText = (state=INITIAL_STATE, action=null) => {
  if(action.type ==='TEXT_TO_HIGHLIGHT') {
    return {
      ...state,
      searchText:action.payload,
    }
  }
  return {
    ...state,
  }
}

export default chatSearchText;