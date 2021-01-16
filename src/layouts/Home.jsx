import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Routes from 'routes/routes';
import Header from 'components/Header/Header';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch style={{backgroundColor: 'inherit', boxShadow: 'none'}}>
                    {Routes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />
                        if (prop.exact) {
                            return <Route path={prop.path} exact component={prop.component} key={key} />
                        }
                        return <Route path={prop.path} component={prop.component} key={key} />
                    })}
                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Home;
