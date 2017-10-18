import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainBanner from '../components/mainBanner/MainBanner';
import Filter from '../components/filter/Filter';
import ChatList from '../components/chatList/ChatList';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
