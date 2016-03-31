/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let {
    Router,
    Route,
    DefaultRoute,
    NotFoundRoute,
    Redirect
    } = require('react-router');


import app from './js/container/app';
import TodoDetails from './js/container/TodoDetails';
import DetailsPage from './js/container/DetailsPage';


var Routes = (
    <Router>
        <Route path='/' component={app}>
            <Route path='/TodoDetails/:id' component={TodoDetails} />
            <Route path='/DetailsPage' component={DetailsPage} />
        </Route>
    </Router>
);

export default Routes;


