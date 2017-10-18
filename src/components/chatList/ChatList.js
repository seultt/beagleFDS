import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import like from '../../images/icon_like.svg';
import travel from '../../images/icon_travel.svg';

export default class ChatList extends Component {
  render() {
    return (
      <section className="main__chat-list">
        <div className="main__chat-list__container">
          {/* main__chat-list__card */}
          {this.props.chatList.map( (list) => {
            return(
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img src={list.userImage} alt="대화방 개설자 프로필 사진" />
                    <strong>{list.userName}</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} alt="좋아요" />
                    <span>{list.like}</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img src={list.chatImage} alt="대화방 사진" />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>{list.cityName}</strong>
                    <span>{list.date}</span>
                    <p>{list.description}</p>
                  </div>
                  <Link to={`/chat/${list.chatId}`}>
                    <div className="main__chat-list__card--content--btn">
                      <a><img src={travel} alt="대화버튼" />함께 여행하기</a>
                    </div>
                  </Link>
                  <p>{list.currentUsers} / 5명</p>
                </div>
              </article>
            )
          })
          }
        </div>
        {/* main__chat-list__card */}
      </section>
    )
  }
}