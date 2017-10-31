import React, {Component} from 'react';
import { connect } from 'react-redux';

import like from '../../images/icon_like.svg';
import point from '../../images/icon_point.svg';
import calendar from '../../images/icon_calendar.svg';

import GoogleMap from './Map'

import {enterTheNewUser} from '../../action/action_chatRoom'

class ChatInfo extends Component {

  componentDidMount () {
    this.props.socket.on('user connected', data => {
      const isUser = this.props.theRoom.currentUsers.find(user => user.user_id === data.user_id)
      if(!isUser) {
        this.props.enterTheNewUser(data)
      }
    })
  }

  render () {
    return (
      <div className="info__description">
        <div className="description__travel">
          <div className="description__travel--about">
            <h3>
              <p><span><img src={this.props.theRoom.currentUsers.find(user => user.user_id === this.props.theRoom.creator).profile_photo}/></span>
                {
                  this.props.theRoom.currentUsers.find(user => user.user_id === this.props.theRoom.creator)
                    ? this.props.theRoom.currentUsers.find(user => user.user_id === this.props.theRoom.creator).nickname
                    : 'user not found'
                  }
                </p>
              <a href="/"><img src={like} alt="좋아요 버튼"/></a>
            </h3>
            <div>
              <p className="about__name">{this.props.theRoom.name}</p>
              <p className="about__description">{this.props.theRoom.description}</p>
              <p className="about__date"><span><img src={calendar} alt="여행 날짜"/></span>{this.props.theRoom.start_at.slice(5,7)}월 {this.props.theRoom.start_at.slice(8,10)}일</p>
            </div>
          </div>
          <div className="description__travel--map">
            <h3>
              <p>
                <span><img src={point}/></span>{this.props.cities.find(city => city.value === this.props.theRoom.city_id).label}</p>
              <a href="/">+ 자세히 보기</a>
            </h3>
            <div><GoogleMap /></div>
          </div>
        </div>     
        <div className="info__users">
          <h3>대화 상대</h3>
          <ul>
            {this.props.theRoom.currentUsers.map((user, i) => {
              return (
                <li key={user.user_id}>
                  <span><img src={user.profile_photo} alt="photoo"/></span>
                  {user.nickname}
                </li>
              )
            })}
          </ul>
        </div>         
      </div>
    ) 
  }
}

const chatInfoToProps = (state) => ({
  theRoom: {
    currentUsers: state.theRoom.currentUsers,
    name: state.theRoom.chattingInfo.name,
    id: state.theRoom.chattingInfo.id,
    description: state.theRoom.chattingInfo.description,
    photo: state.theRoom.chattingInfo.photo,
    start_at: state.theRoom.chattingInfo.start_at,
    city_id: state.theRoom.chattingInfo.city_id,
    creator: state.theRoom.chattingInfo.creator
  },
  cities : state.cities
})

const mapDispatchToProps = (dispatch) => ({
  enterTheNewUser: (user)=> (dispatch(enterTheNewUser(user)))
})

export default connect(chatInfoToProps, mapDispatchToProps)(ChatInfo)