// profile_chat_list에서 룸 아이디인 key값을 가지고 와서 component did mount에서 axios 요청보낸다.
// 결과값을 스테이트에 저장한다.
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import calendar from '../../images/icon_calendar.svg';

import {getChatRoomFromDB} from '../../action/action_chatRoom'

import ProfileChatListItemButtons from './profiletChatListItemButtons'

class ProfileChatListItem extends Component {
  constructor(props) {
    super(props)

    this.showRooms = this.showRooms.bind(this)
  }

  showRooms(info) {
    return (
      <article key={info[1].id} className="profile__chat-list--card">
        <Link to={`/chat/${this.props.info[1].id}`} onClick={() =>{this.props.getChatRoomFromDB({id: this.props.info[1].id, user_id: this.props.user_id})}}>
          <div className="profile__chat-list--card--header">
            <div className="profile__chat-list--card--header--left">
              <strong>{info[1].name}</strong>
              <span> / {this.props.cities.find(city => city.value === info[1].city_id).label}</span>
            </div>
            <div className="profile__chat-list--card--header--right">
              <img src={calendar} alt="달력" />
              <span>{info[1].start_at.slice(0,4)}년 {info[1].start_at.slice(5,7)}월 {info[1].start_at.slice(8,10)}일</span>
            </div>
          </div>
        </ Link>
        <div className="profile__chat-list--card--text">
          {info[1].description}
        </div>
        <div className="profile__chat-list--card--footer">
          <div className="profile__chat-list--card--footer--left">
            <div className="profile__chat-list--card--footer--users">
              {info[0].map(user => <img key={user.user_id} src={user.profile_photo} alt="사용자 이미지" />)}
            </div>
          </div>
          <ProfileChatListItemButtons id={this.props.info[1].id} isCreator={this.props.isCreator}/>
        </div>
      </article>
    )
  }

  render() {
    if(_.isEmpty(this.props.info)) return <div></div>
    return this.showRooms(this.props.info)
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  user_id: state.userData.currentUser.id
})

const mapDispatchToProps = (dispatch) => ({
  getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatListItem)