// 룸 아이디를 여러개 가져와서 리턴 맵을 돌려 profile_chat_list_item에 넣어준다.
// 룸에서 나가기를 누르면 배열에 있는 룸 아이디를 삭제해서 리렌더
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import ProfileChatListItem from './profileChatListItem'
import {getRooms} from '../../action/action_profile'

class ProfileChatList extends Component {
  componentDidMount() {
    this.props.getRooms()
  }

  render() {
    if(_.isEmpty(this.props.myRooms)) {
      return <div></div>
    }
    return (
      <section className="profile__chat-list">
        <div className="profile__chat-list--container">
          {this.props.myRooms[0].map(room => {
            return <ProfileChatListItem key={room[1].chat_room_id} info={room} isCreator={true} />
          })}
          {this.props.myRooms[1].map(room => {
            return <ProfileChatListItem key={room[1].chat_room_id} info={room} isCreator={false}/>
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  myRooms: state.myRooms
})

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(getRooms())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatList)