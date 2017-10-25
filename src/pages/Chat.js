import React, { Component } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import socketIoJWT from 'socketio-jwt';

import {enterTheChat, resetTheReducerLogs} from '../action/action_chatting'

import ChatRoom from './ChatRoom'
import ChatSearch from './ChaSearch'
import ChatInfo from './ChatInfo'
import SERVER_ADDRESS from '../config'


//  {'query': 'token=' + localStorage.getItem('jwtToken')}
const socket = io.connect(`${SERVER_ADDRESS}/chat`, {'query': 'token=' + localStorage.jwtToken})

class Chat extends Component {

  componentDidMount() {  
    if (!this.props.id) {
       console.log('room-id not found')
     }
   }
   
   componentWillReceiveProps(nextProps) {  
     console.log('확인해봅시다')
     this.props.resetTheReducerLogs()
     socket.emit('room', {room: nextProps.id}, data => this.props.enterTheChat(data.logs.reverse()))
     
   }

  render() {
    return (
      <main className="chat-main">
        <div className="__container">
            {/* 채팅 대화창 */}
            <ChatRoom socket={socket}/>
          {/* 채팅 정보창 */}
          <section className="info">
            {/*  대화 검색 */}
            <ChatSearch />
            <ChatInfo />
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.theRoom.chattingInfo.id,
})

const mapDispatchToProps = (dispatch) => ({
  enterTheChat: (logs) => (dispatch(enterTheChat(logs))),
  resetTheReducerLogs: () => (dispatch(resetTheReducerLogs()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat); 





