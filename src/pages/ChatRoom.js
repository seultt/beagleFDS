import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendMessageFromDB} from '../action/action_chatting'

class ChatRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
  }

  componentDidMount () {
    this.props.chatLogs.map( (log, i)=> {
      if(log.user_id === this.props.me.userId) {
        return this.showMyMSG(log)
      } else {
        return this.showYourMSG(log)
      }
    })
    // (user connected) 새 사용자가 접속한 사실을 출력
    this.props.socket.on('user connected', data => {
      this.showUserEnter(data.nickname)
    })

    // (user disconnected) 사용자의 연결이 끊어졌다는 사실을 출력
    this.props.socket.on('user disconnected', data => {
      this.showUserEnter(data.nickname)
    })
  }

  showMyMSG = (log) => {
    return (
      <article className="contents__me">
        <div className="contents__me--box">
          <div className="text-field">
            <p>{log.message}</p>
            <span className="chat-date">{log.created_at}</span>
          </div>
        </div>
      </article>
    )
  }

  showYourMSG = (log) => {
    return (
      <article className="contents__another">
        <div className="contents__another--box">
          <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/>{
            this.props.currentUser.find( another => another.id === log.user_id ) ? this.props.currentUser.find( another => another.id === log.user_id ).nickname : 'user waiting...'
            }</span>
          <div className="text-field">
            <p>{log.message}</p>
            <span className="chat-date">{log.created_at}</span>
          </div>
        </div>
      </article>
    )
  }

  showUserEnter = (nickname) => {
    return (
      <article>
        <div>
          <div className="text-field">
            <p>{`${nickname}님이 접속하거나 나갔습니다.`}</p>
          </div>
        </div>
      </article>      
    )
  }

  onTextChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  sendMessage = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    this.props.sendMessageFromDB({message: this.state.message, token, id: this.props.id});
    this.setState({
      message:'',
    })
  }

  render () {
    // 1. map
    // 2. if 
    // (currentUser의 userId가 채팅로그의 userId와 true) <=== right 
    // contents__another 으로 랜더

    // (currentUser의 userId가 채팅로그의 userId와 false) <=== left
    // contents__me 으로 랜더
    
    
    return (
      <section className="chatting">
        <div className="chatting__contents">
          
        </div>
        <div className="chatting__input">
          <input 
            type="text" 
            placeholder="type your message..."
            onChange={this.onTextChange}
            value={this.state.message}
          />
          <div className="chatting-__input--buttons">
            <button 
              className="buttons-send" 
              type="button"
              onClick={this.sendMessage}
            >
              send
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.getTheRoom.chattingInfo.id,
  chatLogs: state.getTheRoom.chattingLog,
  me: state.mockupData.currentUser,
  currentUser: state.getTheRoom.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  sendMessageFromDB: ({message, token, id}) => (dispatch(sendMessageFromDB({message, token, id})))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom); 