import React from 'react';
import { Accounts } from "meteor/accounts-base"
import { browserHistory } from 'react-router';

export const SignUp = React.createClass({
    addUser(){

          let email       = this.refs.email.value;
          let password = this.refs.password.value;
          let username = this.refs.username.value;

          Accounts.createUser({
                email: email,
                password: password,
                profile: {
                        username: username,
                        role:"User"
                    }
            });

            browserHistory.push('/add_song');
    },

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-7">
                        SignUp
                        <hr/>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input className="form-control" ref="username" type="text" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" ref="email" type="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" ref="password" type="password" placeholder="Password"/>
                            </div>
                            <button onClick={this.addUser.bind(this)} type="button" className="btn btn-info">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
})
