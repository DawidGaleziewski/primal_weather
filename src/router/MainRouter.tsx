import React, { Suspense, lazy, useContext, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Views
import LoadingView from '@Views/LoadingView/LoadingView';

const HomeView = lazy(() =>
    import('@Views/HomeView/HomeView')
);
const SearchView = lazy(() =>
    import('@Views/SearchView/SearchView')
);

const WeatherView = lazy(() =>
    import('@Views/WeatherView/WeatherView')
);

const UnknownView = lazy(() =>
    import('@Views/UnknownView/UnknownView')
);


/**
 * Main routes of the app
 */
const MainRouter = () => {
    return (
        <Fragment>
            <Suspense fallback={<LoadingView />}>
                <Router>
                        <SearchView />
                        <Switch>
                            <Route path="/" exact component={HomeView } />
                            <Route path="/weather/:city" component={WeatherView } />
                            <Route path="*" component={UnknownView } />
                        </Switch>
                    
                </Router>
            </Suspense>
        </Fragment>
    )
}

export default MainRouter;