import React, { Component } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import socketIoJWT from 'socketio-jwt';

import { resetTheReducerRoom } from '../action/action_chatRoom'
import {enterTheChat, resetTheReducerLogs} from '../action/action_chatting'

import ChatRoom from '../components/chat/ChatRoom'
// import ChatSearch from './ChaSearch'
import ChatInfo from '../components/chat/ChatInfo'
import SERVER_ADDRESS from '../config'


//  {'query': 'token=' + localStorage.getItem('jwtToken')}

class Chat extends Component {
  constructor() {
    super()
    this.socket = io.connect(`${SERVER_ADDRESS}/chat`, {'query': 'token=' + localStorage.jwtToken})
  }
  componentDidMount() {  
    console.log(this.props.id + '룸아이디')
    if (!this.props.id) {
       console.log('room-id not found')
     } else {
      this.socket.emit('room', {room: this.props.id})
     }
   }
   
   componentWillReceiveProps(nextProps) {  
     console.log('room id 갱신')
     this.socket.emit('room', {room: nextProps.id}, data => {this.props.enterTheChat(data.logs.reverse())})
   } 

   componentWillUnmount() {
     console.log('disconnect')
     this.props.resetTheReducerLogs()
     this.props.resetTheReducerRoom()
    this.socket.disconnect()
   }

  render() {
    return (
      <main className="chat-main">
        <div className="__container">
            {/* 채팅 대화창 */}
            <ChatRoom socket={this.socket}/>
          {/* 채팅 정보창 */}
          <section className="info">
            {/*  대화 검색 */}
            {/* <ChatSearch /> */}
            <ChatInfo socket={this.socket} />
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
  resetTheReducerLogs: () => (dispatch(resetTheReducerLogs())),
  resetTheReducerRoom: () => (dispatch(resetTheReducerRoom()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat); 





