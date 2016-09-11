import React,{Component} from 'react';
import {  browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';
import {  Link } from 'react-router';
import './Login.css';

export const Login = React.createClass({

    loginUser(event){
        event.preventDefault();

        let email = this.refs.email.value;
        let password = this.refs.password.value;

        Meteor.loginWithPassword(email, password, function (error) {
          if (error) {
              errorReason = "Unable to login : "+error.reason;
              console.log(errorReason);
          }
          else {
              browserHistory.push('/add_song');
          }
        });
    },

    render(){
    return (
          <div className="container centered">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 bordered">
                            <form>
                                <div className="form-group">
                                    <input className="form-control" ref="email" type="text" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" ref="password" type="password" placeholder="Pasword"/>
                                </div>
                                <button onClick={this.loginUser.bind(this)} type="button" className="btn btn-info">Login</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 bordered">
                              <Link to="/signup" className="btn btn-info">SignUp</Link>
                              <Link to="/forget" className="pull-right btn btn-info">Forget Password</Link>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
    )
  }
});
{/*

import React from 'react';

export const Login = () => <h3>Login</h3>;
 */}
