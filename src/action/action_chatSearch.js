export const chatSearch = (text) => {
  return {
    type:'TEXT_TO_HIGHLIGHT',
    payload: text
  }
}
