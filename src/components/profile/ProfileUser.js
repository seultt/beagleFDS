import React, { Component } from 'react';
import {connect} from 'react-redux'
import {IconLike, IconSetting} from '../../images/icons';

class ProfileUser extends Component {
  render() {
    return (
      <section className="profile__user">
        <div className="profile__user--container">
          <article className="profile__user--info">
            <ul>
              <li className="profile__user--info__image">
                <img src={this.props.currentUser.photo} alt="사용자 이미지" />
              </li>
              <li className="profile__user--info__name">
                <strong>{this.props.currentUser.nickname}</strong>
              </li>
              <li className="profile__user--info__like">
                <IconLike className="darkLike" />
                <span>{this.props.currentUser.like}</span>
              </li>
              <li className="profile__user--info__btn">
                <a>Logout</a>
                <a><IconSetting/></a>
              </li>
            </ul>
          </article>
          <article className="profile__user--tab">
            <ul>
              <li className="profile_user--tab--on"><a>참여한 대화방</a></li>
            </ul>
          </article>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.userData.currentUser
})

export default connect(mapStateToProps)(ProfileUser)