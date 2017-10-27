import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import profile from '../../../images/icon_profile.svg';
import {getMyRooms} from '../../../action/action_profile'

class Profile extends Component {
  render () {
    return (
      <Link to={`/profile`}>
        <li>
          <a 
            className="menu__profile menu_icon"
            onClick={() => {this.props.getMyRooms(this.props.user_id)}}>
            <img src={this.props.photo} alt="프로필" />
          </a>
        </li>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  photo: state.userData.currentUser.photo,
  user_id: state.userData.currentUser.id,
})

const mapDispatchToProps = (dispatch) => ({
  getMyRooms: (user_id) => dispatch(getMyRooms(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)