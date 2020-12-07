import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Host from './Host';
import Join from './Join';
import Login from './Login';
import SignUp from './SignUp';
import  User  from './User';
import  UserSettings  from './UserSettings';
import  Room  from './Room';
import Notfound from './Notfound';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
        <Route exact path ="/host" component = {Host}/>
        <Route exact path ="/join" component = {Join}/>
        <Route exact path ="/signin" component = {Login}/>
        <Route exact path ="/signup" component = {SignUp}/>
        <Route exact path ="/user" component = {User}/>
        <Route exact path ="/usersettings" component = {UserSettings}/>
        <Route exact path ="/room" component = {Room}/>
        
        <Route component = {Notfound} />
        <NotificationContainer />
    </Switch>
  );
}