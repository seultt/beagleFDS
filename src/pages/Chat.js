import React, { Component } from 'react';
import {connect} from 'react-redux';

import ChatRoom from './ChatRoom'
import ChatInfo from './ChatInfo'

import search from '../images/icon_search.svg';

class Chat extends Component {

  render() {
    return (
      <main className="chat-main">
        <div className="__container">
            {/* 채팅 대화창 */}
            <ChatRoom/>
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
  id: state.theRoom.chattingInfo.id,
})

export default connect(mapStateToProps)(Chat); 

