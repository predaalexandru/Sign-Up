import React, { Component } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // call function signInWIthEmailAndPassword() to pass in the email and password
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  //create the user with the specified email and password
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="panel">
         <form>
          <div className="control-group">
            <label className="control-label" forhtml="inputEmail">Email address: </label>
            <div className="controls">
            <input  value={this.state.email} onChange={this.handleChange} type="text" id="inputEmail" placeholder="Enter email" />
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" forhtml="inputPassword">Password: </label>
            <div className="controls">
              <input  value={this.state.password} onChange={this.handleChange} type="password" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
            {/* <button type="submit" onClick={this.login} className="btn btn-primary">Login</button> */}
          <button onClick={this.signup} className="btn">Sign Up</button>
          </div>
          </div>
        </form> 
    
      </div>
    );
  }
}
export default Login;