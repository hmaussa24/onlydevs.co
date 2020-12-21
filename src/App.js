import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  notFound  from "../src/Error/404"
function Index() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        )
    
}

export default Index
