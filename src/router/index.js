import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'

function Router(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
        </Switch>

    );
}

export default Router;