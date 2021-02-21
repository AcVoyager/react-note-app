import React from 'react';
import PageHeaderNav from '../components/PageHeaderNav';
import PageMain from '../components/PageMain';
import PageFooter from '../components/PageFooter';

const App = () =>

  <div className="d-flex flex-column div-app">

    <PageHeaderNav />

    <a className="visually-hidden-focusable" href="#content">Skip to main content</a>

    <PageMain />

    <PageFooter />

  </div>

export default App;