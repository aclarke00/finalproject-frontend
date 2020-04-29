import React, { Component } from 'react';
import Tree from './Tree.js'

class ProfileContainer extends Component {



       mapTrees = () => {
         if (this.props.user) {
          let treeArray = this.props.user.trees.map((tree) => {
            return <Tree key={tree.id} tree={tree} />
          })
          return treeArray
         }}

  render() {
    let {username} = this.props.user
    console.log(this.props.user.trees)
    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Prospect Park Trees {username} has seen so far :
        {this.mapTrees()}
        </h3>
      </div>
    );
  }
}
export default ProfileContainer;