import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loan from './pages/Loan';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookDetail/:id" component={BookDetail} />
        <Route exact path="/loanList" component={Loan} />
      </Switch>
    </Router>
  );
}

export default App;
