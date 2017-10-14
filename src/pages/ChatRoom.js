import React, { Component } from 'react';

export default class ChatRoom extends Component {
  render () {
    return (
      <div className="chatting__contents">
        <article className="contents__another">
          <div className="contents__another--box">
            <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/>Kristina Holmes</span>
            <div className="text-field">
              <p>인생을 것은 때까지 있는가? 이성은 열락의 방황하여도, 같으며, 유소년에게서 끓는 것이다.</p>
              <span className="chat-date">9:27 PM</span>
            </div>
          </div>
        </article>
        <article className="contents__me">
          <div className="contents__me--box">
            <div className="text-field">
              <p>감사합니다 :)</p>
              <span className="chat-date">9:27 PM</span>
            </div>
          </div>
        </article>
      </div>
    );
  }
}