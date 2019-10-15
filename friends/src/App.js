import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
 <div className="App">
  <Router>
    <Route path='/' component={Nav}/>
    <Switch>
      <PrivateRoute path='/protected' component={FriendsList} />
     <Route path='/login' component={Login} />
    </Switch>
  </Router>
</div>
  );
}

export default App;
