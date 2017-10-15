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
        {this.props.chatLogs.map( (isCurrentUser, i)=> {
          if(isCurrentUser.userId === this.props.currentUser.userId) {
            return (
              <article className="contents__me">
                <div className="contents__me--box">
                  <div className="text-field">
                    <p>{isCurrentUser.message}</p>
                    <span className="chat-date">{isCurrentUser.created_at}</span>
                  </div>
                </div>
              </article>
            )
          } else {
            return(
              <article className="contents__another">
                <div className="contents__another--box">
                  <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/>{this.props.participants.find( id => id.userId === isCurrentUser.userId ).nickname}</span>
                  <div className="text-field">
                    <p>{isCurrentUser.message}</p>
                    <span className="chat-date">{isCurrentUser.created_at}</span>
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
  chatLogs: state.mockupData.chatLog,
  currentUser: state.mockupData.currentUser,
  participants: state.mockupData.chatRoom[0].participants
})

export default connect(mapChatLogToProps)(ChatRoom);