import React, {Component} from 'react';
import { connect } from 'react-redux';

import like from '../images/icon_like.svg';
import point from '../images/icon_point.svg';
import calendar from '../images/icon_calendar.svg';

class ChatInfo extends Component {
  render () {
    return (
      <div className="info__description">
        <div className="description__travel">
          <div className="description__travel--about">
            <h3>
              <p><span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>
                {
                  this.props.getTheRoom.currentUser.find(user => user.user_id === this.props.getTheRoom.creator)
                    ? this.props.getTheRoom.currentUser.find(user => user.user_id === this.props.getTheRoom.creator).nickname
                    : 'user not found'
                  }
                </p>
              <a href="/"><img src={like} alt="좋아요 버튼"/></a>
            </h3>
            <div>
              <p><span><img src={calendar} alt="여행 날짜"/></span>{this.props.getTheRoom.start_at}</p>
            {this.props.getTheRoom.description}
            </div>
          </div>
          <div className="description__travel--map">
            <h3>
              <p>
                <span><img src={point}/></span>{this.props.cities.find(city => city.value === this.props.getTheRoom.city_id).label}</p>
              <a href="/">+ 자세히 보기</a>
            </h3>
            <div></div>
          </div>
        </div>     
        <div className="info__users">
          <h3>사람</h3>
          <ul>
            {this.props.getTheRoom.currentUser.map((user, i) => {
              return (
                <li>
                  <span><img src={user.photo} alt="photoo"/></span>
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
  getTheRoom: {
    currentUser: state.getTheRoom.currentUser,
    name: state.getTheRoom.chattingInfo.name,
    id: state.getTheRoom.chattingInfo.id,
    description: state.getTheRoom.chattingInfo.description,
    photo: state.getTheRoom.chattingInfo.photo,
    start_at: state.getTheRoom.chattingInfo.start_at,
    city_id: state.getTheRoom.chattingInfo.city_id,
    creator: state.getTheRoom.chattingInfo.creator
  },
  cities : state.cities
})

export default connect(chatInfoToProps)(ChatInfo)