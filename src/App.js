import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './SignUp';
import FacebookPage from './Facebook';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/facebook'} component={FacebookPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
