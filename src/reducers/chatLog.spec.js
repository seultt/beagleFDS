import chatLogReducer, {DEFAULT_STATE,} from './reducers/chatLog';

describe('chatLogReducer', () => { // test 하고자하는 함수 이름 혹은 클래스(컴포넌트) 이름
  describe('When initialized' , () => { // 어떤 조건인지를 명시하고 싶을때
    it('returns default state' , () => {
      // 실질적으로 테스트 하려는 것
      expect(chatLogReducer()).toEqual(DEFAULT_STATE);
    })
  })
  describe('when action type is CHAT_LOG' , () => {
    it('changes chatLog value' , () => {
      // 실질적으로 테스트 하려는 것
      const action = {
        type: 'CHAT_LOG',
        payload: [],
      }
      const initialized = chatLogReducer();
      //Expect
      expect(
        chatLogReducer(
          initalState,
          action
        )
      ).toEqual({
        
      });
    })
  })
})