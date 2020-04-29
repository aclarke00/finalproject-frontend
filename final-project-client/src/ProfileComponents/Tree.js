import React, {Component} from 'react';


class Tree extends Component {

  handleChange = (event) => {
    this.props.addTreeToProfile(this.props.tree.id) 
  }

  
  render() {
    
    console.log(this.props)
    
    let {name, size, bark_description, leaf_characteristics, image_url} = this.props.tree



    return(

      // button -> handle on click 
      // function in app, send down
      // fetch to joiner
      

      <div className="treeTile">
        <h2 className="section-title">{name}</h2>
        <div>
          <h5 className="bio-label">Tree Bio </h5>
          <p>{size}</p>
          <p>{bark_description}</p>
          <p>{leaf_characteristics}</p>
          <img className="tree-image" src={image_url} /><br></br>
          {this.props.addTreeToProfile ? <button className="add-button"  onClick={this.handleChange}>Add to Profile as Seen</button> : null}
           
        </div>
    </div>
    
    )}
}



export default Tree;