import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Questions'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import Question6 from './components/Question6'
import Question7 from './components/Question7'
import Question8 from './components/Question8'
import Question9 from './components/Question9'
import Question10 from './components/Question10'
import Question11 from './components/Question11'
import Question12 from './components/Question12'
import Question13 from './components/Question13'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Question}></Route>
        <Route exact path="/question2" component={Question2}></Route>
        <Route exact path="/question3" component={Question3}></Route>
        <Route exact path="/question4" component={Question4}></Route>
        <Route exact path="/question5" component={Question5}></Route>
        <Route exact path="/question6" component={Question6}></Route>
        <Route exact path="/question7" component={Question7}></Route>
        <Route exact path="/question8" component={Question8}></Route>
        <Route exact path="/question9" component={Question9}></Route>
        <Route exact path="/question10" component={Question10}></Route>
        <Route exact path="/question11" component={Question11}></Route>
        <Route exact path="/question12" component={Question12}></Route>
        <Route exact path="/question13" component={Question13}></Route>

      </div>
    </Router>
  );
}

export default App;
