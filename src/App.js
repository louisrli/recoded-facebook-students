import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './SignUp';
import FacebookPage from './Facebook';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/facebook'} component={FacebookPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
