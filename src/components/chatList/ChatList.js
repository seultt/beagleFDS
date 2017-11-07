import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChatRoomFromDB } from '../../action/action_chatRoom';
import {IconTravel, IconLike} from '../../images/icons';


class ChatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersInfo: [],
    }
    this.token = localStorage.getItem('jwtToken')
  }

  render() {
    return (
      <section className="main__chat-list">
        <div className="main__chat-list__container">
          {/* main__chat-list__card */}
          {this.props.chatList.map( (list) => {
            return(
              <article className="main__chat-list__card" key={list.id}>
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img src={list.profile_photo} alt="대화방 개설자 프로필 사진" />
                    <strong>{list.nickname}</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <IconLike className="darkLike"/>
                    <span>{list.like}</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img src={this.props.cities.find(city => city.value === list.city_id).img} alt="대화방 사진" />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>{list.city_name}</strong>
                    <span>{list.start_at.slice(0,4)}년 {list.start_at.slice(5,7)}월 {list.start_at.slice(8,10)}일</span>
                    <p className="main__chat-list__card--content--name">{list.name}</p>
                    <p className="main__chat-list__card--content--description">{list.description}</p>
                  </div>
                  {this.props.user_id? (  
                    <Link to={`/chat/${list.id}`}>
                      <div className="main__chat-list__card--content--btn">
                        <span
                          onClick={() =>{this.props.getChatRoomFromDB({id: list.id, user_id: this.props.user_id})}}
                        ><IconTravel/>함께 여행하기</span>
                      </div>
                    </Link>
                  ) : (
                    <div className="main__chat-list__card--content--btn">
                      <span
                        onClick={()=>alert('로그인 해주세요')}
                      ><IconTravel/>함께 여행하기</span>
                    </div>
                  )}
                  {/* <p>{this.state.usersInfo.length} / 5명</p> */}
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
  cities: state.cities,

  // chatList: state.ChatListData.chatList,
});
const mapDispatchToProps = (dispatch) => ({
  getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatList)