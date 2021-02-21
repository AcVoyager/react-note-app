import React from 'react';
import NavHeader from './NavHeader';
import PageMain from './PageMain';
import NavFooter from './NavFooter';

const App = () =>
    <div className="d-flex flex-column">

        <NavHeader />
        <a className="visually-hidden-focusable" href="#content">Skip to main content</a>
        <PageMain />
        <NavFooter />

    </div>

export default App;