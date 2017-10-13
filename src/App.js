import React, { Component } from 'react';
import Chat from './pages/Chat'
import './scss/main.scss'
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Chat />
      </div>
    );
  }
}

export default App;
  