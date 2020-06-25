import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DJ from './components/DJ'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' render={() => (<DJ/>)}/>
      </Switch>
    </div>
  );
}

export default App;
