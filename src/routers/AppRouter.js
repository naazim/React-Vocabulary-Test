import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateDirectory from '../components/CreateDirectory';
import Quiz from '../components/Quiz';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={CreateDirectory} exact={true} />
                <Route path="/quiz" component={Quiz} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;