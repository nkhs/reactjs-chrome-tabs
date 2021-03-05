import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import List from './List';
import Edit from './Edit';

function App() {
  let [list, setList] = useState([])


  return (
    <HashRouter>

      <Switch>
        <Route exact path="/" render={props => <List />} />
        <Route exact path="/edit/:id" render={(props) => <Edit {...props}/>} />
      </Switch>

    </HashRouter>
  );
}

export default App;
