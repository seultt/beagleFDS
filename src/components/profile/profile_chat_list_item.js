// profile_chat_list에서 룸 아이디인 key값을 가지고 와서 component did mount에서 axios 요청보낸다.
// 결과값을 스테이트에 저장한다.
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import _ from 'lodash'

import calendar from '../../images/icon_calendar.svg';
import SERVER_ADDRESS from '../../config'

import ProfileChatListItemButtons from './profilet_chat_list_item_buttons'

class ProfileChatListItem extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   usersInfo: [],
    //   roomInfo: {}
    // }

    // this.token = localStorage.getItem('jwtToken')
    this.showRooms = this.showRooms.bind(this)
  }

  // componentDidMount() {
  //   axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${this.props.id}`, {
  //     headers: {
  //       'Authorization': `Bearer ${this.token}`
  //     }
  //   })
  //   .then(room => {
  //     this.setState({
  //       usersInfo: room.data[0],
  //       roomInfo: room.data[1]
  //     })
  //     console.log()
  //   })
  //   .catch(e => console.log(e))
  // }

  showRooms(info) {
    return (
      <article key={info[1].id} className="profile__chat-list--card">
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
        <div className="profile__chat-list--card--text">
          {info[1].description}
        </div>
        <div className="profile__chat-list--card--footer">
          <div className="profile__chat-list--card--footer--left">
            <div className="profile__chat-list--card--footer--users">
              {info[0].map(user => <img key={user.user_id} src={user.profile_photo} alt="사용자 이미지" />)}
            </div>
          </div>
          <ProfileChatListItemButtons id={this.props.info[1].id} />
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
  cities: state.cities
})

export default connect(mapStateToProps)(ProfileChatListItem)