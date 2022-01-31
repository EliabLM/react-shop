import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/global.css';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/recovery-password' component={RecoveryPassword} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
