import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import Header from './common/Header'
import PageNotFound from './PageNotFound'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
 

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    )
}

export default App