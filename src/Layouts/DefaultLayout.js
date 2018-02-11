import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import {Redirect} from 'react-router-dom';
import Auth from '../Components/Auth';
import {Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

const DefaultLayout = ({component: Component, ...rest}) => {
    if (Auth.isAuthenticated===true){
        return (

            <Route {...rest} render={matchProps => (
                <div className="DefaultLayout d-flex">
                    <Sidebar/>
                    <div className="content">
                        <Header/>
                        <div>
                            <Component {...matchProps}/>
                        </div>
                    </div>
                </div>
            )} />
        )
    }
    else {
        return <Redirect to="/login"/>;

    }

};

export default DefaultLayout