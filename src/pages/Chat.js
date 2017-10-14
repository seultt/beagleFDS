import React, { Component } from 'react';

import message from '../images/icon_message.svg';
import profile from '../images/icon_profile.svg';
import arrow from '../images/icon_arrow_down.svg';
import search from '../images/icon_search.svg';
import like from '../images/icon_like.svg';
import point from '../images/icon_point.svg';
import calendar from '../images/icon_calendar.svg';

export default class Chat extends Component {
  render() {
    return (
      <main className="chat-main">
        <div className="__container">
          <section className="chatting">
            {/* 채팅 대화창 */}
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
            </div>
            {/* 채팅방 정보 */}
            <div className="info__description">
              <div className="description__travel">
                <div className="description__travel--about">
                  <h3>
                    <p><span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>Kristina Holmes</p>
                    <a href="/"><img src={like} alt="좋아요 버튼"/></a>
                  </h3>
                  <div>
                    <p><span><img src={calendar} alt="여행 날짜"/></span>10월 06일</p>
                  인생을 것은 때까지 있는가? 이성은 열락의 방황하여도, 같으며, 유소년에게서 끓는 것이다.
                  </div>
                </div>
                <div className="description__travel--map">
                  <h3>
                    <p><span><img src={point}/></span>Tokyo</p>
                    <a href="/">+ 자세히 보기</a>
                  </h3>
                  <div></div>
                </div>
              </div>     
              <div className="info__users">
                <h3>사람</h3>
                <ul>
                  <li>
                    <span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>Kristina Holmes
                  </li>
                  <li>
                    <span><img src="https://randomuser.me/api/portraits/women/19.jpg"/></span>Georgia Morrison
                  </li>
                  <li>
                    <span><img src="https://randomuser.me/api/portraits/men/96.jpg"/></span>Alexander Pena
                  </li>
                </ul>
              </div>         
            </div>
          </section>
        </div>
      </main>
    );
  }
}