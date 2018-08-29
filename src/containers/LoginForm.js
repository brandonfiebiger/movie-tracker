import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions'
import { Route, Link, NavLink, withRouter } from 'react-router-dom';



class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ password: this.state.password, email: this.state.email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    const { name, id } = result.data;
    this.props.userLogin(name, id)
    this.props.history.push('/')
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
          type="text"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          type="text"
        />
        {/* <NavLink to='/'>LOGIN</NavLink> */}
        <button>LOGIN</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  userLogin: (name, id) => dispatch(getUserInfo(name, id))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))