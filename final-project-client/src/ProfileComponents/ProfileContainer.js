import React, { Component } from 'react';
import Tree from './Tree.js'

class ProfileContainer extends Component {
  render() {
    let {username} = this.props.user
    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Prospect Park Trees {username} has seen so far :
        <Tree />
        </h3>
      </div>
    );
  }
}
export default ProfileContainer;