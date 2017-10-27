// profile_chat_list에서 룸 아이디인 key값을 가지고 와서 component did mount에서 axios 요청보낸다.
// 결과값을 스테이트에 저장한다.
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import _ from 'lodash'

import calendar from '../../images/icon_calendar.svg';
import SERVER_ADDRESS from '../../config'

class ProfileChatListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersInfo: [],
      roomInfo: {}
    }

    this.token = localStorage.getItem('jwtToken')
    this.showRooms = this.showRooms.bind(this)
  }

  componentDidMount() {
    axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${this.props.id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })
    .then(room => {
      this.setState({
        usersInfo: room.data[0],
        roomInfo: room.data[1]
      })
      console.log()
    })
    .catch(e => console.log(e))
  }

  showRooms(room, users) {
    return (
      <article key={room.id} className="profile__chat-list--card">
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
        <div className="profile__chat-list--card--text">
          {room.description}
        </div>
        <div className="profile__chat-list--card--footer">
          <div className="profile__chat-list--card--footer--left">
            <div className="profile__chat-list--card--footer--users">
              {users.map(user => <img src={user.profile_photo} alt="사용자 이미지" />)}
            </div>
          </div>
        </div>
      </article>
    )
  }

  render() {
    if(_.isEmpty(this.state.roomInfo)) {
      return <div></div>
    }
    return this.showRooms(this.state.roomInfo, this.state.usersInfo)
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateToProps)(ProfileChatListItem)