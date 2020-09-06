import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './../components/page/HomePage';
import PageLayout from './../components/template/PageLayout';
import FullDetailsScreen from './../components/page/FullDetailsScreen';
import IndiaDetailsScreen from './../components/page/IndiaDetailsScreen';
import {About} from './../components/page/About'

const routes = (
  <PageLayout>
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/fullDetailsScreen" component={FullDetailsScreen} />
      <Route exact path="/viewIndiaDetailsScreen" component={IndiaDetailsScreen} />
      <Route exact path="/about" component={About} />
    </Router>
  </PageLayout>
);

export default routes;
