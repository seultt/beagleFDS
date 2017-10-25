import React, {Component} from 'react';
import { connect } from 'react-redux';

import like from '../images/icon_like.svg';
import point from '../images/icon_point.svg';
import calendar from '../images/icon_calendar.svg';

import {enterTheNewUser} from '../action/action_chatting'

class ChatInfo extends Component {

  componentDidMount () {
    this.props.socket.on('user connected', data => {
      const isUser = this.props.theRoom.currentUser.find(user => user.user_id === data.user_id)
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
              <p><span><img src={this.props.theRoom.currentUser.find(user => user.user_id === this.props.theRoom.creator).profile_photo}/></span>
                {
                  this.props.theRoom.currentUser.find(user => user.user_id === this.props.theRoom.creator)
                    ? this.props.theRoom.currentUser.find(user => user.user_id === this.props.theRoom.creator).nickname
                    : 'user not found'
                  }
                </p>
              <a href="/"><img src={like} alt="좋아요 버튼"/></a>
            </h3>
            <div>
              <p><span><img src={calendar} alt="여행 날짜"/></span>{this.props.theRoom.start_at}</p>
            {this.props.theRoom.description}
            </div>
          </div>
          <div className="description__travel--map">
            <h3>
              <p>
                <span><img src={point}/></span>{this.props.cities.find(city => city.value === this.props.theRoom.city_id).label}</p>
              <a href="/">+ 자세히 보기</a>
            </h3>
            <div></div>
          </div>
        </div>     
        <div className="info__users">
          <h3>사람</h3>
          <ul>
            {this.props.theRoom.currentUser.map((user, i) => {
              return (
                <li>
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
    currentUser: state.theRoom.currentUser,
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