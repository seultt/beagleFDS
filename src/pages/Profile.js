import React, { Component } from 'react';
import ProfileUser from '../components/profile/ProfileUser';
import ProfileChatList from '../components/profile/ProfileChatList';
import ProfileChatListAlpha from '../components/profile/profile_chat_list'


class Profile extends Component {
  render() {
    return (
      <main className="profile">
        <ProfileUser />
        <ProfileChatListAlpha />
      </main>
    )
  }
}

export default Profile;