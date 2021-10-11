import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'components/pages/login/Login';
import Layout from 'components/pages/layout/Layout';
import Register from 'components/pages/login/Register';
import Dashboard from 'components/pages/dashboard/Dashboard';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from 'utils/firebaseConfig';

const App = () => {

    const [user] = useAuthState(auth)

    return (
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {user ? <Redirect to={'/dashboard'} /> : <Login /> }
                    </Route>    
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard}>
                        {user ? <Dashboard /> : <Redirect to={'/'} />}
                    </Route>
                </Switch>
            </Router>
        </Layout>
    )
}

export default App
