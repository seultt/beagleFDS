import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChatList } from '../action/action_getChatList';
import MainBanner from '../components/mainBanner/MainBanner';
import Filter from '../components/filter/Filter';
import ChatList from '../components/chatList/ChatList';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // 대화방 리스트 미리 가져온다.
  componentDidMount = () => {
    this.props.getChatList();
  }
  render() {
    return (
    <main className="main">
      <MainBanner />
      <Filter />
      <ChatList />
    </main>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getChatList: () => dispatch(getChatList()),
});
export default connect(null, mapDispatchToProps)(Main)