import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ModalLogin from './loginModal/modalLogin';
import Logined from './logined';
import logo from '../../images/logo.svg';
import SERVER_ADDRESS from '../../config';
import { updateUserInfo } from '../../action/action_login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupWindow: null,
      showModal: false,
      token: null,  // 토큰 여부
    };
  }

  // 토큰 핸들러
  tokenHandler = (e) => {
    if (typeof e.data === 'object') {
      return
    }
    const token = e.data;
    localStorage.setItem('jwtToken', token);
    this.state.popupWindow.close();
    this.setState({
      popupWindow: null,
      token,
      complete: true,
    });
    this.props.updateUserInfo(this.state.token);
    console.log("tokenHandler : " + this.props.isLogin);
  }

  componentWillMount() {
    const ExistedToken = localStorage.getItem('jwtToken')
    if (ExistedToken) {
      this.setState({
        token: ExistedToken,
      })
    }
    console.log("componentWillMount : " + this.props.isLogin);
    // this.props.isLogin;
    // if (localStorage.jwtToken) {
    //   this.setState({
    //     token: localStorage.jwtToken,
    //     isLogin: true,
    //   })
    // }
  }

  componentDidMount() {
    if (this.state.token) {
      this.props.updateUserInfo(this.state.token)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.tokenHandler)
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
    console.log("login : " + this.props.isLogin);
  }

  // 로그아웃 클릭시 (테스트)
  logout = () => {
    delete localStorage.jwtToken;
    this.setState({
      token: null,
    });
    this.props.history.push('/');
  }

  // 로그인 토글(모달창 오픈, isLogin 변경)
  toggleLogin = () => {
    this.setState({ 
      showModal: !this.state.showModal,
    });
  }

  // 로그인 모달창 열기
  handleModalOpenLogin = () => {
    this.setState({ showModal: true });
  }

  // 로그인 모달창 닫기
  handleModalCloseLogin = () => {
    this.setState({ showModal: false });
  }

  render() {
    console.log("render : " + this.props.isLogin);
    return(
      <header>
        <ModalLogin 
          showModal={this.state.showModal}
          toggleLogin={this.toggleLogin}
          handleModalCloseLogin={this.handleModalCloseLogin}
          currentUser={this.currentUser}
          login={this.login}
        />
        <div className="__container">
          <h1><a href="/"><img src={logo} alt="로고" /></a></h1>
          <div className="menu">
            {
              !this.props.isLogin ? (
              // 로그인 전
              <a
                className="menu__login-before btn"
                onClick={this.handleModalOpenLogin}
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
})
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (token) => dispatch(updateUserInfo(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));