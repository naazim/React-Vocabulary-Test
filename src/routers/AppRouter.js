import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateDirectory from '../components/CreateDirectory';
import TestApp from '../components/TestApp';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={CreateDirectory} exact={true} />
                <Route path="/test" component={TestApp} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;