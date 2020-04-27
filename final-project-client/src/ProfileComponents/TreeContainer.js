import React from 'react';
import Tree from './Tree'

const TreeContainer = (propsObj) => {

    let {trees} = propsObj
    console.log(propsObj)
    // let arrayOfComponents = props.trees.map((tree) => {
    //     console.log(tree)
    //   return <Tree key={tree.id} tree={tree} />
    // })
  
  
  
    return (
      <div>
        <h2>Prospect Park Trees</h2>
        {/* { arrayOfComponents } */}
      </div>
    )
  }
  

export default TreeContainer