import React, { Component } from 'react';
import Tree from './Tree.js'
import NewTreeForm from './NewTreeForm'

class ProfileContainer extends Component {


  state = {
    clicked: false
  }

  changeState = (event) => {
    console.log(event, "i've been clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }

       mapTrees = () => {
         if (this.props.user) {
          let treeArray = this.props.user.trees.map((tree) => {
            return <Tree key={tree.id} tree={tree} deleteOneTree={this.props.deleteOneTree}/>
          })
          return treeArray
         }}

  render() {
    
    let {username} = this.props.user
    console.log(this.props.user.trees)
    return (
      <div>
        <h2>{`${username}'s Profile`}</h2>
        <button className='logout-button' onClick={this.changeState}>Click to Add Your Own Tree</button>
          {this.state.clicked ? <NewTreeForm addNewTree={null}/> : null}
        <h3>Prospect Park Trees {username} has seen so far :
        {this.mapTrees()}
        </h3>
        
      </div>
    );
  }
}
export default ProfileContainer;