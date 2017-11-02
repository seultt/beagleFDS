import React, { Component } from 'react';
import ProfileUser from '../components/profile/ProfileUser';
import ProfileChatList from '../components/profile/ProfileChatList'


class Profile extends Component {
  render() {
    return (
      <main className="profile">
        <ProfileUser />
        <ProfileChatList />
      </main>
    )
  }
}

export default Profile;