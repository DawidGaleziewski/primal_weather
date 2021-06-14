import React, { Suspense, lazy, useContext, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Views
import LoadingView from '@Views/LoadingView/LoadingView';

const HomeView = lazy(() =>
    import('@Views/HomeView/HomeView')
);
// import HomeView from '@Views/HomeView/HomeView'

/**
 * Main routes of the app
 */
const MainRouter = () => {
    return (
        <Fragment>
            <Router>
                <Suspense fallback={<LoadingView />}>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                    </Switch>
                </Suspense>
            </Router>
        </Fragment>
    )
}

export default MainRouter;