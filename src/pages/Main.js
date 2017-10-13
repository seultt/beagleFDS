import React, { Component } from 'react';

import arrow from '../images/icon_arrow_down.svg';
import like from '../images/icon_like.svg';
import travel from '../images/icon_travel.svg';

export default class Main extends Component {
  render() {
    return (
    <main className="main">
      {/* main__banner */}
      <section className="main__banner">
        <article>
          <div>
            <h2>Beagle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</p>
          </div>
        </article>
      </section>
      {/* main__banner */}

      {/* main__filter */}
      <section className="main__filter">
        <article>
          <form>
            <div className="main__filter--chat">
              <div className="main__filter--where">
                <strong>도시</strong>
                <a><p>어디로 가세요?</p><img src={arrow} alt="도시 선택" /></a>
              </div>
              <div className="main__filter--date">
                <strong>일정</strong>
                <a><p>여행 날짜</p><img src={arrow} alt="출발 여행날짜 선택" /></a>
              </div>
              <div className="main__filter--list">
                <strong>대화방 리스트</strong>
                <a><p>인기순</p><img src={arrow} alt="대화방 리스트 선택" /></a>
              </div>
              <div className="main__filter--search">
                <button type="button">검색</button>
              </div>
            </div>
          </form>
        </article>
      </section>
      {/* main__filter */}

      {/* main__chat-list */}
      <section className="main__chat-list">
        <div className="main__chat-list__container">
          {/* main__chat-list__card */}
          <article className="main__chat-list__card">
            <div className="main__chat-list__card--header">
              <div className="main__chat-list__card--header--profile">
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="대화방 개설자 프로필 사진" />
                <strong>Username</strong>
              </div>
              <div className="main__chat-list__card--header--like">
                <img src={like} alt="좋아요" />
                <span>2,300</span>
              </div>
            </div>
            <div className="main__chat-list__card--image">
              <img alt="대화방 사진" />
            </div>
            <div className="main__chat-list__card--content">
              <div className="main__chat-list__card--content--text">
                <strong>Kyoto</strong>
                <span>10월 14일</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                </p>
              </div>
              <div className="main__chat-list__card--content--btn">
                <a><img src={travel} alt="대화버튼" />함께 여행하기</a>
              </div>
              <p>1 / 5명</p>
            </div>
          </article>
          <article className="main__chat-list__card">
            <div className="main__chat-list__card--header">
              <div className="main__chat-list__card--header--profile">
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="대화방 개설자 프로필 사진" />
                <strong>Username</strong>
              </div>
              <div className="main__chat-list__card--header--like">
                <img src={like} alt="좋아요" />
                <span>2,300</span>
              </div>
            </div>
            <div className="main__chat-list__card--image">
              <img alt="대화방 사진" />
            </div>
            <div className="main__chat-list__card--content">
              <div className="main__chat-list__card--content--text">
                <strong>Kyoto</strong>
                <span>10월 14일</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                </p>
              </div>
              <div className="main__chat-list__card--content--btn">
                <a><img src={travel} alt="대화버튼" />함께 여행하기</a>
              </div>
              <p>1 / 5명</p>
            </div>
          </article>
          <article className="main__chat-list__card">
            <div className="main__chat-list__card--header">
              <div className="main__chat-list__card--header--profile">
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="대화방 개설자 프로필 사진" />
                <strong>Username</strong>
              </div>
              <div className="main__chat-list__card--header--like">
                <img src={like} alt="좋아요" />
                <span>2,300</span>
              </div>
            </div>
            <div className="main__chat-list__card--image">
              <img alt="대화방 사진" />
            </div>
            <div className="main__chat-list__card--content">
              <div className="main__chat-list__card--content--text">
                <strong>Kyoto</strong>
                <span>10월 14일</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.
                </p>
              </div>
              <div className="main__chat-list__card--content--btn">
                <a><img src={travel} alt="대화버튼" />함께 여행하기</a>
              </div>
              <p>1 / 5명</p>
            </div>
          </article>
        </div>
        {/* main__chat-list__card */}
      </section>
      {/* main__chat-list */}
    </main>
    );
  }
}
