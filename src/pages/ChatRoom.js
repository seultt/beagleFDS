import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatRoom extends Component {
  render () {
    // 1. map
    // 2. if 
    // (currentUser의 userId가 채팅로그의 userId와 true) <=== right 
    // contents__another 으로 랜더

    // (currentUser의 userId가 채팅로그의 userId와 false) <=== left
    // contents__me 으로 랜더
    
    
    return (
      <div className="chatting__contents">
        {this.props.chatLogs.map( (log, i)=> {
          if(log.user_id === this.props.me.userId) {
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
          } else {
            return(
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
        })}
      </div>
    );
  }
}

const mapChatLogToProps = (state) => ({
  chatLogs: state.getTheRoom.chattingLog,
  me: state.mockupData.currentUser,
  currentUser: state.getTheRoom.currentUser,
})

export default connect(mapChatLogToProps)(ChatRoom);