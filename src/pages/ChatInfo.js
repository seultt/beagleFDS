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
              <p><span><img src="https://randomuser.me/api/portraits/women/94.jpg"/></span>Kristina Holmes</p>
              <a href="/"><img src={like} alt="좋아요 버튼"/></a>
            </h3>
            <div>
              <p><span><img src={calendar} alt="여행 날짜"/></span>10월 06일</p>
            {this.props.getTheRoom.description}
            </div>
          </div>
          <div className="description__travel--map">
            <h3>
              <p><span><img src={point}/></span>Tokyo</p>
              <a href="/">+ 자세히 보기</a>
            </h3>
            <div></div>
          </div>
        </div>     
        <div className="info__users">
          <h3>사람</h3>
          <ul>
            {/* {this.props.participants.map((partici, i) => {
              return (
                <li>
                  <span><img src={partici.profilePhoto}/></span>{partici.nickname}
                </li>
              )
            })} */}
          </ul>
        </div>         
      </div>
    ) 
  }
}

const chatInfoToProps = (state) => ({
  getTheRoom: {
    name: state.getTheRoom.name,
    id: state.getTheRoom.id,
    description: state.getTheRoom.description,
    photo: state.getTheRoom.photo,
    start_at: state.getTheRoom.start_at,
    city_id: state.getTheRoom.city_id
  }
})

export default connect(chatInfoToProps)(ChatInfo)