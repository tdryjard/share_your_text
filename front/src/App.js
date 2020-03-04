import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostText from './components/postText/postText';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/"/>
      <Route path='/poster-texte' component={PostText}/>
    </Switch>
  );
}

export default App;
