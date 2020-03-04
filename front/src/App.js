import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostText from './components/postText/postText';
import Accueil from './components/accueil/accueil';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Accueil}/>
      <Route path='/poster-texte' component={PostText}/>
    </Switch>
  );
}

export default App;
