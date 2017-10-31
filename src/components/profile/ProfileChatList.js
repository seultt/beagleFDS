import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import calendar from '../../images/icon_calendar.svg';
// 프로필 작성 해야한다. 
import {exitTheRoom, deleteTheRoom} from '../../action/action_profile'
import {getChatRoomFromDB} from '../../action/action_createChat'

class ProfileChatList extends Component {
  constructor(props) {
    super(props)
    this.showRooms = this.showRooms.bind(this)
    this.ownedRoomButtons = this.ownedRoomButtons.bind(this)
    this.participatedRoomButtons = this.participatedRoomButtons.bind(this)
  }

  ownedRoomButtons(room_id) {
    return (
      <li>
        <a onClick={() =>{this.props.deleteTheRoom(room_id)}}>삭제하기</a>
      </li>
    )
  }

  participatedRoomButtons(room_id) {
    return (
      <a onClick={() => {this.props.exitTheRoom(room_id)}}>나가기</a>
    )
  }

  showRooms(room, footer) {
    return (
      <article key={room.id} className="profile__chat-list--card">
      <Link to={`/chat/${room_id}`} onClick={() =>{this.props.getChatRoomFromDB({id: room_id, user_id})}}>
          <div className="profile__chat-list--card--header">
            <div className="profile__chat-list--card--header--left">
              <strong>{room.name}</strong>
              <span> / {this.props.cities.find(city => city.value === room.city_id).label}</span>
            </div>
            <div className="profile__chat-list--card--header--right">
              <img src={calendar} alt="달력" />
              <span>{room.start_at.slice(0,4)}년 {room.start_at.slice(5,7)}월 {room.start_at.slice(8,10)}일</span>
            </div>
          </div>
        </ Link>
        <div className="profile__chat-list--card--text">
          {room.description}
        </div>
        <div className="profile__chat-list--card--footer">
          <div className="profile__chat-list--card--footer--left">
            <div className="profile__chat-list--card--footer--users">
              {}
              <img src="https://randomuser.me/api/portraits/women/10.jpg" alt="사용자 이미지" />
            </div>
          </div>
            <div className="profile__chat-list--card--footer--right">
            {footer(this.props.user_id, room.id)}
            </div>
        </div>
      </article>
    )
  }

  render() {
    return (
      <section className="profile__chat-list">
        <div className="profile__chat-list--container">
        {this.props.ownedRooms.map(room => {
          return this.showRooms(room, this.exitButton)
        })}
        {this.props.participatedRooms.map(room => {
          return this.showRooms(room, this.exitButton)
        })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  user_id: state.userData.currentUser.id,
  ownedRooms: state.myRooms[0],
  participatedRooms: state.myRooms[1],
  cities: state.cities
})

const mapDispatchToProps = (dispatch) => ({
  exitTheRoom: (room_id) => dispatch(exitTheRoom(room_id)),
  getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatList)