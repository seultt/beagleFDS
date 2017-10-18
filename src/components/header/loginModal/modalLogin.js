import React from 'react';
import ReactModal from 'react-modal';
import facebook from '../../../images/icon_facebook.svg';
import google from '../../../images/icon_google.svg';


export default class ModalLogin extends React.Component {

  render() {
    return (
      <ReactModal 
        isOpen={this.props.showModal}
        className="join"
        overlayClassName="join__overlay"
      > 
        <div className="join__container">
          <button 
            type="button"
            className="join__facebook--btn"
            onClick={this.props.login}
            value="facebook"
          >
            <img src={facebook} alt="페이스북 로고" />
            페이스북으로 계속하기
          </button>
          <button 
            type="button"
            className="join__google--btn"
            onClick={this.props.login}
            value="google"
          >
            <img src={google} alt="구글 로고" />
            구글로 계속하기
          </button>
          <button 
            type="button"
            className="join__naver--btn"
            onClick={this.props.login}
            value="naver"
          >
            네이버로 계속하기
          </button>
          <button 
            type="button"
            className="join__kakao--btn"
            onClick={this.props.login}
            value="kakao"
          >
            카카오로 계속하기
          </button>
          <p>
          회원 가입 또는 계속하기를 클릭하면 비글의 <span>서비스 약관, 개인정보 보호정책</span>에 동의하는 것 입니다.
          </p>
        </div>
        <button type="button" className="join--closeBtn" onClick={this.props.handleModalCloseLogin}>닫기</button>
      </ReactModal>
    )
  }
}