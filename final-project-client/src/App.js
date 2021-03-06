import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer.js'
import TreeContainer from './ProfileComponents/TreeContainer.js'
import SearchBar from './components/SearchBar'
import NewTreeForm from './ProfileComponents/NewTreeForm'
import {withRouter, Redirect} from 'react-router-dom'

 

class App extends React.Component {

  state = {
    user: {
      id: 0,
      username: "",
      trees: [],
      sightings: []
    },
    treeArray: [],
    searchTerm: '',
    token: "",
  }

  componentDidMount(){
    if (localStorage.token) {
      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch('http://localhost:4000/trees')
    .then(r => r.json())
    .then(trees => {
      this.setState({
        treeArray: trees
      })
    })
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  returnsAnArray = () => {
    let {treeArray, searchTerm} = this.state
    
    let filteredArray = treeArray.filter((tree) => {
      return tree.name.includes(searchTerm) || tree.bark_description.includes(searchTerm)
    })
    return filteredArray
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleLogout = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        trees: []
      },
      token: ""
    })
    localStorage.clear()
  }

  handleResponse = (resp) => {
    
    if (!resp.message) {
      localStorage.token = resp.token
      this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.message)
    }
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Log in to your account" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Don't have an account? Create one" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <ProfileContainer
        user={this.state.user}
        token={this.state.token}
        deleteOneTree={this.deleteOneTree}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  addTreeToProfile = (input) => {
      console.log(input)
      console.log(this.state.user.trees)
    const tree = this.state.user.trees.find((tree) => {
      return input == tree.id
    }) 
      if (tree) {
        alert("This tree has been seen!") 
        return 
      }

     console.log(tree) 
    let sightingsObj = {user_id: this.state.user.id, tree_id: input}
      console.log(sightingsObj)
    fetch("http://localhost:4000/sightings", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(sightingsObj)
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          user: {
            id: this.state.user.id,
            username: this.state.user.username,
            trees: [...this.state.user.trees, data.tree],
            sightings: [...this.state.user.sightings, data] }
        })
        alert(`${data.tree.name} has been added to your list`)
      })
  }


    deleteOneTree = (id) => {
      console.log(id)
      const sighting = this.state.user.sightings.find((sighting) => {
        return sighting.tree_id == id
      })
      console.log(sighting)


      fetch(`http://localhost:4000/sightings/${sighting.id}`, {
        method: 'DELETE'
      })
        .then(r => r.json())
        .then((r) => {
          console.log(r)
          
          let {trees, sightings} = this.state.user

          console.log(trees, '188')
          let newArray = trees.filter(tree => tree.id !== r.tree.id)
          
          let newSightingArr = sightings.filter(sighting => sighting.id !== r.id)

          console.log(newArray)
        
          this.setState({
            user: {
              id: this.state.user.id,
              username: this.state.user.username,
              trees: newArray,
              sightings: newSightingArr
              }
          })

        })
      }


  renderContainer = (routerProps) => {
    if (routerProps.location.pathname === "/explore"){
      return <> <SearchBar searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
      <TreeContainer trees={this.returnsAnArray()} addTreeToProfile={this.addTreeToProfile} deleteOneTree={this.deleteOneTree} />  </>
    } else {
      return <Redirect to="/" />
    }
  }
 
  // renderSearchBar = (routerProps) => {
  //   if (routerProps.location.pathname === '/explore'){
  //     return <SearchBar searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
  //   } else {
  //     return <Redirect to='/' />
  //   }
  // }

  
  render(){
    console.log(this.state.user)
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout}/>
        {/* {this.state.token && <button className="logout-button" onClick={this.handleLogout}>Log out</button>} */}
        {/* <SearchBar searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} /> */}
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/explore" render={ this.renderContainer } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)