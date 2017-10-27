// 룸 아이디를 여러개 가져와서 리턴 맵을 돌려 profile_chat_list_item에 넣어준다.
// 룸에서 나가기를 누르면 배열에 있는 룸 아이디를 삭제해서 리렌더
import React, {Component} from 'react'
import {connect} from 'react-redux'

import ProfileChatListItem from './profile_chat_list_item'
import {getRoomIds} from '../../action/action_profile'

class ProfileChatListAlpha extends Component {
  componentDidMount() {
    this.props.getRoomIds()
  }

  render() {
    if(!this.props.roomIds[0]) return <div>'키 요청 보내는중'</div>
    return (
      <section className="profile__chat-list">
        <div className="profile__chat-list--container">
          {this.props.roomIds.map(roomId => {
            return <ProfileChatListItem key={roomId.chat_room_id} id={roomId.chat_room_id} />
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  roomIds: state.myRooms
})

const mapDispatchToProps = (dispatch) => ({
  getRoomIds: (user_id) => dispatch(getRoomIds(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatListAlpha)