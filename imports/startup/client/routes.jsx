import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import  Index  from '../../ui/components/index.jsx';
import { Login } from '../../ui/components/Login/Login.jsx';
import { SignUp } from '../../ui/components/SignUp/SignUp.jsx';
import { AddSong } from '../../ui/components/AddSong/AddSong.jsx';
import { One } from '../../ui/pages/one.jsx';
import { Two } from '../../ui/pages/two.jsx';
import VideoList from '../../ui/components/VideoList/VideoList.jsx';

import {MainLayout} from '../../ui/layouts/MainLayout.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
            <IndexRoute component={ Index } />
            <Route path="/one" component={ One } />
            <Route path="/two" component={ Two } />
            <Route path="/add_song" component={ AddSong } />
            <Route path="/video_list" component={ VideoList } />
      </Route>
       <Route path="/login" component={ Login } />
       <Route path="/signup" component={ SignUp } />

    </Router>,
    document.getElementById( 'react-root' )
  );
});
