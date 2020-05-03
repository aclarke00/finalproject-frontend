import React from 'react';
import Tree from './Tree'

const TreeContainer = (props) => {

   
    console.log(props, 'PROPS!!!')
    
    let arrayOfComponents = props.trees.map((tree) => {
        // console.log(tree)
      return <Tree key={tree.id} tree={tree} addTreeToProfile={props.addTreeToProfile} deleteOneTree={props.deleteOneTree}/>
    })
  
  
  
    return (
      <div>
        <h2>Prospect Park Trees</h2>
        { arrayOfComponents }
      </div>
    )
  }
  

export default TreeContainer