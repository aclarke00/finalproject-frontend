import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      <div className="flex-container">
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label className="input-label" htmlFor="username">Username</label>
        <input className="label-container" type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label className="input-label" htmlFor="password">Password</label>
        <input className="label-container" type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <input className="submit-button" type="submit" value="Submit"/>
      </form>
      </div>
    );
  }

}

export default Form;