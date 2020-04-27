import React, {Component} from 'react';


class Tree extends Component {

  
  render() {
    
    console.log(this.props.tree)
    
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
          <img className="tree-image" src={image_url} />
           
         </div>
    </div>
    
    )}
}



export default Tree;