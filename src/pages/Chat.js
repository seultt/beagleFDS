import React, { Component } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import socketIoJWT from 'socketio-jwt';

import ChatRoom from './ChatRoom'
import ChatInput from './ChatInput'
import ChatInfo from './ChatInfo'
import SERVER_ADDRESS from '../config'

import message from '../images/icon_message.svg';
import profile from '../images/icon_profile.svg';
import arrow from '../images/icon_arrow_down.svg';
import search from '../images/icon_search.svg';

//  {'query': 'token=' + localStorage.getItem('jwtToken')}
const socket = io.connect(`${SERVER_ADDRESS}/chat`, {'query': 'token=' + localStorage.jwtToken})

class Chat extends Component {

  componentDidMount() {  
    if (!this.props.id) {
       console.log('room-id not found')
     } else {
       socket.emit('room', {room: this.props.id});
     }
   }
   
   componentWillReceiveProps(nextProps) {  
     socket.emit('room', {room: nextProps.id})
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
            <div className="info__search">
              <input type="text" />
              <button><img src={search} alt="검색" /></button>
              {/* <button onClick={() => this.props.history.push("/")}>홈으로 가기</button> */}
              </div>
            <ChatInfo />
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.getTheRoom.chattingInfo.id,
})

export default connect(mapStateToProps)(Chat); 

