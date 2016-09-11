import './navbar_style.css';
import React,{Component} from 'react';
import { IndexLink, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import {  browserHistory } from 'react-router';

export default class Navbar extends Component {

      constructor() {
          super();
          this.state = {
            user :Meteor.userId(),
          }
          console.log(Meteor.userId());
          let currentPath = location.pathname;
          console.log(currentPath);

          if(!Meteor.userId()){
                if(currentPath != '/'){
                    browserHistory.push('/');
                }                              
          }
      }

      logout(){
          Meteor.logout(() => {
                browserHistory.push('/');
          });
      }

      loginState(){
            console.log("btn = ",Meteor.userId());
            if(Meteor.userId()){
                loggedButton =  <a onClick={this.logout.bind(this)}>SignOut</a>;
            }
            else{
                loggedButton = <Link to="/login">Login</Link>;
            }
            return loggedButton;
      }

      render(){

        return (
              <div id="custom-bootstrap-menu" className="navbar navbar-default " role="navigation">
                      <div className="container-fluid">
                        <div className="navbar-header">
                            <IndexLink className="pull-left" to="/">
                                <img src="images/main_30.png" className="img-responsive" />
                            </IndexLink>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder">
                              <span className="sr-only">
                                Toggle navigation
                              </span>
                              <span className="icon-bar" />
                              <span className="icon-bar" />
                              <span className="icon-bar" />
                          </button>
                        </div>
                        <div className="collapse navbar-collapse navbar-menubuilder">
                          <ul className="nav navbar-nav navbar-right">
                             <li>
                                {this.loginState()}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
              )
          }
}

{/*
export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><Link to="/one" activeClassName="active">Page One</Link></li>
    <li><Link to="/two" activeClassName="active">Page Two</Link></li>
  </ul>
)

export default class Navbar extends Component {
  constructor() {
    super();
    console.log("hii")
  }
  render(){
    return(
        <div>Hiii</div>
    )
  }
}

  export default class Navbar extends React.Component{
      constructor(){
          super()
          console.log("123",Meteor.userId());
      }

      render(){
        return(
          <h1>Hiii</h1>
        )
      }
  }





  {/*

    */}
