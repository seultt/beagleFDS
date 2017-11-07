import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {IconKakao, IconNaver, IconGoogle, IconFacebook, BTNClose} from '../../../images/icons';


export default class ModalLogin extends Component {

  render() {
    return (
      <ReactModal 
        isOpen={this.props.checkModal}
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
            <IconFacebook/>
            페이스북으로 계속하기
          </button>
          <button 
            type="button"
            className="join__google--btn"
            onClick={this.props.login}
            value="google"
          >
            <IconGoogle/>
            구글로 계속하기
          </button>
          <button 
            type="button"
            className="join__naver--btn"
            onClick={this.props.login}
            value="naver"
          >
            <IconNaver/>
            네이버로 계속하기
          </button>
          <button 
            type="button"
            className="join__kakao--btn"
            onClick={this.props.login}
            value="kakao"
          >
            <IconKakao/>
            카카오로 계속하기
          </button>
          <p>
          회원 가입 또는 계속하기를 클릭하면 비글의 <span>서비스 약관, 개인정보 보호정책</span>에 동의하는 것 입니다.
          </p>
        </div>
        <a type="button" className="join--closeBtn" onClick={this.props.closeModal}><BTNClose/></a>
      </ReactModal>
    )
  }
}