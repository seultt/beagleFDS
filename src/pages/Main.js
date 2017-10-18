import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainBanner from '../components/mainBanner/MainBanner';
import Filter from '../components/filter/Filter';
import ChatList from '../components/chatList/ChatList';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      chatList: [
        {
          chatId: 1,
          userName: 'peter',
          userImage: 'https://randomuser.me/api/portraits/men/89.jpg',
          like: 2300,
          chatImage: 'http://corporate.mystays.com/k/column/images/mv_009.jpg',
          title: '교토로 3박4일 가실분!',
          cityName: 'Kyoto',
          date: '10월 14일',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.',
          currentUsers: 3,
        },
        {
          chatId: 2,
          userName: 'seult',
          userImage: 'https://randomuser.me/api/portraits/women/64.jpg',
          like: 2300,
          chatImage: 'http://tourimage.interpark.com/product/tour/00161/A10/500/A1016460_7_480.jpg',
          title: '방콕으로 3박4일 가실분!',
          cityName: 'Bangkok',
          date: '10월 18일',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.',
          currentUsers: 4,
        },
        {
          chatId: 3,
          userName: 'younghea',
          userImage: 'https://randomuser.me/api/portraits/men/79.jpg',
          like: 2300,
          chatImage: 'http://www.yeeum.com/wp-content/uploads/2015/03/%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4-%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg',
          title: '보라카이로 3박4일 가실분!',
          cityName: 'Boracay',
          date: '12월 11일',
          description: '군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.',
          currentUsers: 4,
        },
      ]
    }
  }
  render() {
    return (
    <main className="main">
      <MainBanner />
      <Filter
        selectValue={this.state.selectValue}
      />
      <ChatList 
        chatList={this.state.chatList}
      />
    </main>
    );
  }
}
