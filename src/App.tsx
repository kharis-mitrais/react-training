import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Loan = React.lazy(() => import('./pages/Loan'));
const BookDetail = React.lazy(() => import('./pages/BookDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/bookDetail/:id">
            <BookDetail/>
          </Route>
          <Route exact path="/loanList">
            <Loan />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
