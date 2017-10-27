import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChatList } from '../../action/action_getChatList';
import { getChatRoomFromDB } from '../../action/action_createChat';
import like from '../../images/icon_like.svg';
import travel from '../../images/icon_travel.svg';

class ChatList extends Component {
  render() {
    return (
      <section className="main__chat-list">
        <div className="main__chat-list__container">
          {/* main__chat-list__card */}
          {this.props.chatList.map( (list) => {
            return(
              <article className="main__chat-list__card" key={list.id}>{list.id}
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img src={list.profile_photo} alt="대화방 개설자 프로필 사진" />
                    <strong>{list.nickname}</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} alt="좋아요" />
                    <span>{list.like}</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img src={list.photo} alt="대화방 사진" />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>{list.city_name}</strong>
                    <span>{list.start_at.slice(0,4)}년 {list.start_at.slice(5,7)}월 {list.start_at.slice(8,10)}일</span>
                    <p className="main__chat-list__card--content--name">{list.name}</p>
                    <p className="main__chat-list__card--content--description">{list.description}</p>
                  </div>
                  <Link to={`/chat/${list.id}`}>
                    <div className="main__chat-list__card--content--btn">
                      <a
                        onClick={() =>{this.props.getChatRoomFromDB({id: list.id, user_id: this.props.user_id})}}
                      ><img src={travel} alt="대화버튼" />함께 여행하기</a>
                    </div>
                  </Link>
                  <p>{list.current_users} / 5명</p>
                </div>
              </article>
            )
          })
          }
        </div>
        {/* main__chat-list__card */}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  chatList: state.databaseReducer.chatList,
  user_id: state.userData.currentUser.id,
  // chatList: state.ChatListData.chatList,
});
const mapDispatchToProps = (dispatch) => ({
  getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatList)