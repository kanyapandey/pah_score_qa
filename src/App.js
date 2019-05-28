import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Questions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Question}></Route>
      </div>
    </Router>
  );
}

export default App;
