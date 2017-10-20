import React, { Component } from 'react';
import like from '../../images/icon_like.svg';
import setting from '../../images/btn_set.svg';


class ProfileUser extends Component {
  render() {
    return (
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
    )
  }
}

export default ProfileUser;