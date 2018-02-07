import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import RegionsContainer from './containers/regions-container.component';
import NotFound from './presentational/not-found.component';
import Contact from './presentational/contact.component';


const Routes = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Navigation />
                <div className="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/countries" component={CountryFlagContainer} />
                    <Route exact path="/regions" component={RegionsContainer} />
                    <Route exact path="/country/:numericCode" component={CountryDetailsContainer} />
                    <Route exact path='/regions' component={RegionsContainer} />
                    <Route exact path='/contact' component={Contact}/>
                    <Route component={NotFound} />
                </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Routes;