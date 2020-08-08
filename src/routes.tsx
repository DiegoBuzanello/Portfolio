import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import HeaderApp from './components/HeaderApp';
import FooterApp from './components/FooterApp';

const Routes = () => {
    return (
        <BrowserRouter>
            
            <HeaderApp />
            
            <Route component={Home} exact path="/" />

            <FooterApp />

        </BrowserRouter>
    );
}

export default Routes;