// 룸 아이디를 여러개 가져와서 리턴 맵을 돌려 profile_chat_list_item에 넣어준다.
// 룸에서 나가기를 누르면 배열에 있는 룸 아이디를 삭제해서 리렌더
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import ProfileChatListItem from './profile_chat_list_item'
import {getRooms} from '../../action/action_profile'

class ProfileChatListAlpha extends Component {
  componentDidMount() {
    this.props.getRooms()
  }

  render() {
    if(_.isEmpty(this.props.rooms[0])) return <div></div>
    return (
      <section className="profile__chat-list">
        <div className="profile__chat-list--container">
          {this.props.rooms.map(room => {
            return <ProfileChatListItem key={room[1].chat_room_id} info={room} />
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  rooms: state.myRooms
})

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(getRooms())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatListAlpha)