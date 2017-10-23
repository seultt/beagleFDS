import React, { Component } from 'react';
import {connect} from 'react-redux'
import calendar from '../../images/icon_calendar.svg';

class ProfileChatList extends Component {
  constructor(props) {
    super(props)
    this.showRooms = this.showRooms.bind(this)
    this.deleteRoom = this.deleteRoom.bind(this)
    this.exitRoom = this.exitRoom.bind(this)
  }

  deleteRoom() {
    return (
      <div className="profile__chat-list--card--footer--right">
        <a><img />삭제하기</a>
      </div>
    )
  }

  exitRoom() {
    return (
      <div className="profile__chat-list--card--footer--right">
        <a><img />나가기</a>
      </div>
    )
  }

  showRooms(room, footer) {
    return (
      <article className="profile__chat-list--card">
        <div className="profile__chat-list--card--header">
          <div className="profile__chat-list--card--header--left">
            <strong>{room.name}</strong>
            <span> / {this.props.cities.find(city => city.value === room.city_id).label}</span>
          </div>
          <div className="profile__chat-list--card--header--right">
            <img src={calendar} alt="달력" />
            <span>{room.start_at}</span>
          </div>
        </div>
        <div className="profile__chat-list--card--text">
          {room.description}
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
          {footer()}
        </div>
      </article>
    )
  }

  render() {
    return (
      <section className="profile__chat-list">
        <div className="profile__chat-list--container">
        {this.props.ownedRooms.map(room => {
          return this.showRooms(room, this.deleteRoom)
        })}
        {this.props.participatedRooms.map(room => {
          return this.showRooms(room, this.exitRoom)
        })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  ownedRooms: state.myRooms[0],
  participatedRooms: state.myRooms[1],
  cities: state.cities
})

export default connect(mapStateToProps)(ProfileChatList)