import React, { Component } from 'react';
import Main from './pages/Main';
import Chat from './pages/Chat';
import './scss/main.scss';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {<Main />}
        {/* <Chat /> */}
      </div>
    );
  }
}

export default App;
  