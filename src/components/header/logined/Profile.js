import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import profile from '../../../images/icon_profile.svg';

class Profile extends Component {
  render () {
    return (
      <Link to={`/profile`}>
        <li>
          <a className="menu__profile menu_icon">
            <img src={this.props.userImage} alt="프로필" />
          </a>
        </li>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  userImage: state.user.currentUser.id,
})

export default connect(mapStateToProps, null)(Profile)