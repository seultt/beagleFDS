import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ModalLogin from './loginModal/modalLogin';
import Logined from './logined';
import {Logo} from '../../images/icons';

import SERVER_ADDRESS from '../../config';
import { updateUserInfo, logout } from '../../action/action_login';
import { showModal } from '../../action/action_showModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupWindow: null,
    }
  }

  // 토큰 핸들러
  tokenHandler = (e) => {
    if (typeof e.data === 'object') return;
    const token = e.data;
    localStorage.setItem('jwtToken', token);
    this.state.popupWindow.close();
    this.setState({
      popupWindow: null,
    });
    this.props.updateUserInfo(localStorage.getItem('jwtToken'));
  }

  // 로그인 클릭시
  login = (e) => {
    const SNS_NAME = e.target.value;
    window.addEventListener('message', this.tokenHandler);
    const popupWindow = window.open(`${SERVER_ADDRESS}/auth/${SNS_NAME}`);
    this.setState({
      popupWindow,
      showModal: false,
    });
  }

  // 로그아웃 클릭시
  logout = () => {
    if (window.confirm('로그아웃 하시겠습니까?') === true) {
      delete localStorage.jwtToken; // 토큰 삭제
      this.props.logout();  // 리듀서 액션 처리
      this.props.history.push('/'); // index 페이지로 리다이렉션
    } else {
      return;
    }
  }

  // 로그인 모달창 핸들러 열기
  modalHandler = () => {
    this.props.modal()
  }

  componentWillMount = () => {
    const ExistedToken = localStorage.getItem('jwtToken')
    if (ExistedToken) {
      this.props.updateUserInfo();
      // this.props.isLogin = true 이런식으로 리덕스는 사용할 수 없으므로
      // 위처럼 this.props.updateUserInfo() 액션을 날려서 store의 스테이트를 업데이트 쳐준다.
    }
    // getItem을 안쓸때 아래처럼 쓰면 됨
    // this.props.isLogin;
    // if (localStorage.jwtToken) {
    //   this.setState({
    //     token: localStorage.jwtToken,
    //     isLogin: true,
    //   })
    // }
  }

  componentDidMount = () => {
    if (localStorage.getItem('jwtToken')) {
      this.props.updateUserInfo(localStorage.getItem('jwtToken'));
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('message', this.tokenHandler);
  }

  render() {
    return(
      <header>
        <ModalLogin 
          checkModal={this.props.checkModal}
          closeModal={this.modalHandler}
          currentUser={this.currentUser}
          login={this.login}
        />
        <div className="__container">
          <h1><a href="/"><Logo/></a></h1>
          <div className="menu">
            {
              !this.props.isLogin ? (
                // 로그인 전
                <a
                  className="menu__login-before btn"
                  onClick={this.modalHandler}
                >
                  Sign Up
                </a>
              ) : (
                // 로그인 후
                <Logined 
                  logout={this.logout}
                />
              )
            }
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogin: state.userData.isLogin,
  checkModal: state.userData.showModal,
})
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (token) => dispatch(updateUserInfo(token)),
    logout: () => dispatch(logout()),
    modal: () => dispatch(showModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));