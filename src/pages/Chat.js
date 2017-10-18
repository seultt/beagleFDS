import React, { Component } from 'react';
import ChatRoom from './ChatRoom'
import ChatInfo from './ChatInfo'

import message from '../images/icon_message.svg';
import profile from '../images/icon_profile.svg';
import arrow from '../images/icon_arrow_down.svg';
import search from '../images/icon_search.svg';

export default class Chat extends Component {
  render() {
    return (
      <main className="chat-main">
        <div className="__container">
          <section className="chatting">
            {/* 채팅 대화창 */}
            <ChatRoom />
            {/*  채팅 입력란 */}
            <div className="chatting__input">
              <input type="text" placeholder="type your message..."/>
              <div className="chatting-__input--buttons">
                <button className="buttons-send" type="button">send</button>
              </div>
            </div>
          </section>
          {/* 채팅 정보창 */}
          <section className="info">
            {/*  대화 검색 */}
            <div className="info__search">
              <input type="text" />
              <button><img src={search} alt="검색" /></button>
              <button onClick={() => this.props.history.push("/")}>홈으로 가기</button>
              </div>
            <ChatInfo />
          </section>
        </div>
      </main>
    );
  }
}