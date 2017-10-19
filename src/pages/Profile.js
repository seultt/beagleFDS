import React, { Component } from 'react';
import like from '../images/icon_like.svg'
import setting from '../images/btn_set.svg';
import calendar from '../images/icon_calendar.svg';

class Profile extends Component {
  render() {
    return (
      <main className="profile">
        <section className="profile__user">
          <div className="profile__user--container"> 
            <article className="profile__user--info">
              <ul>
                <li className="profile__user--info__image">
                  <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="사용자 이미지" />
                </li>
                <li className="profile__user--info__name">
                  <strong>이슬기</strong>
                </li>
                <li className="profile__user--info__like">
                  <img src={like} alt="좋아요" />
                  <span>1,234</span>
                </li>
                <li className="profile__user--info__btn">
                  <a>Logout</a>
                  <a><img src={setting} alt="사용자 환경설정" /></a>
                </li>
              </ul>
            </article>
            <article className="profile__user--tab">
              <ul>
                <li className="profile_user--tab--on"><a>참여한 대화방</a></li>
                <li><a>개설한 대화방</a></li>
              </ul>
            </article>
          </div>
        </section>
        <section className="profile__chat-list">
          <div className="profile__chat-list--container">
            {/* profile__chat-list--card*/}
            <article className="profile__chat-list--card">
              <div className="profile__chat-list--card--header">
                <div className="profile__chat-list--card--header--left">
                  <strong>보라카이는 항목에 없지만 보라카이로 놀러가요</strong><span> / Tokyo</span>
                </div>
                <div className="profile__chat-list--card--header--right">
                  <img src={calendar} alt="달력" />
                  <span>2017년 10월 25일</span>
                </div>
              </div>
              <div className="profile__chat-list--card--text">
                원질이 꽃 미묘한 보라. 불어 거선의 영락과 날카로우나 과실이 듣기만 것이다. 있음으로써 무한한 보이는 위하여 들어 것이다. 보배를 청춘은 무한한 품으며, 그들은 커다란 끓는다. 눈이 가는 같으며, 얼음 위하여서. 주는 피어나는 붙잡아 그러므로 새가 청춘의 꽃이 아니다. 가진 하는 구하기 품에 대중을 봄바람이다. 어디 굳세게 심장의 이상 것이다.보라, 말이다. 영원히 풍부하게 찾아 평화스러운 이상은 소금이라 뼈 사막이다. 이상은 생명을 얼음에 고행을 뭇 인류의 쓸쓸하랴?
              </div>
              <div className="profile__chat-list--card--footer">
                <div className="profile__chat-list--card--footer--left">
                  <div className="profile__chat-list--card--footer--users">
                    <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/88.jpg" alt="사용자 이미지" />
                  </div>
                </div>
                <div className="profile__chat-list--card--footer--right">
                  <a><img />나가기</a>
                </div>
              </div>
            </article>
            {/* profile__chat-list--card*/}
            {/* profile__chat-list--card*/}
            <article className="profile__chat-list--card">
              <div className="profile__chat-list--card--header">
                <div className="profile__chat-list--card--header--left">
                  <strong>보라카이는 항목에 없지만 보라카이로 놀러가요</strong><span> / Tokyo</span>
                </div>
                <div className="profile__chat-list--card--header--right">
                  <img src={calendar} alt="달력" />
                  <span>2017년 10월 25일</span>
                </div>
              </div>
              <div className="profile__chat-list--card--text">
                원질이 꽃 미묘한 보라. 불어 거선의 영락과 날카로우나 과실이 듣기만 것이다. 있음으로써 무한한 보이는 위하여 들어 것이다. 보배를 청춘은 무한한 품으며, 그들은 커다란 끓는다. 눈이 가는 같으며, 얼음 위하여서. 주는 피어나는 붙잡아 그러므로 새가 청춘의 꽃이 아니다. 가진 하는 구하기 품에 대중을 봄바람이다. 어디 굳세게 심장의 이상 것이다.보라, 말이다. 영원히 풍부하게 찾아 평화스러운 이상은 소금이라 뼈 사막이다. 이상은 생명을 얼음에 고행을 뭇 인류의 쓸쓸하랴?
              </div>
              <div className="profile__chat-list--card--footer">
                <div className="profile__chat-list--card--footer--left">
                  <div className="profile__chat-list--card--footer--users">
                    <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/88.jpg" alt="사용자 이미지" />
                  </div>
                </div>
                <div className="profile__chat-list--card--footer--right">
                  <a><img />나가기</a>
                </div>
              </div>
            </article>
            {/* profile__chat-list--card*/}
            {/* profile__chat-list--card*/}
            <article className="profile__chat-list--card">
              <div className="profile__chat-list--card--header">
                <div className="profile__chat-list--card--header--left">
                  <strong>보라카이는 항목에 없지만 보라카이로 놀러가요</strong><span> / Tokyo</span>
                </div>
                <div className="profile__chat-list--card--header--right">
                  <img src={calendar} alt="달력" />
                  <span>2017년 10월 25일</span>
                </div>
              </div>
              <div className="profile__chat-list--card--text">
                원질이 꽃 미묘한 보라. 불어 거선의 영락과 날카로우나 과실이 듣기만 것이다. 있음으로써 무한한 보이는 위하여 들어 것이다. 보배를 청춘은 무한한 품으며, 그들은 커다란 끓는다. 눈이 가는 같으며, 얼음 위하여서. 주는 피어나는 붙잡아 그러므로 새가 청춘의 꽃이 아니다. 가진 하는 구하기 품에 대중을 봄바람이다. 어디 굳세게 심장의 이상 것이다.보라, 말이다. 영원히 풍부하게 찾아 평화스러운 이상은 소금이라 뼈 사막이다. 이상은 생명을 얼음에 고행을 뭇 인류의 쓸쓸하랴?
              </div>
              <div className="profile__chat-list--card--footer">
                <div className="profile__chat-list--card--footer--left">
                  <div className="profile__chat-list--card--footer--users">
                    <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="사용자 이미지" />
                    <img src="https://randomuser.me/api/portraits/women/88.jpg" alt="사용자 이미지" />
                  </div>
                </div>
                <div className="profile__chat-list--card--footer--right">
                  <a><img />나가기</a>
                </div>
              </div>
            </article>
            {/* profile__chat-list--card*/}
          </div>
        </section>
      </main>
    )
  }
}

export default Profile;