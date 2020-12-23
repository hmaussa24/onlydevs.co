import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  notFound  from "../src/Error/404"
import Login from "./Login/"
import Register from "./Register/"
import Home from "./Home/Home"
function Index() {
        return (
            <BrowserRouter>
                <Switch>
                    
                    <Route path='/login' component={Login} exact/>
                    <Route path='/registro' component={Register} exact/>
                    <Route path='/home' component={Home} exact/>
                    {/* <Route path='/create-post' component={CreatePost} exact />
                    <Route path='/post/:slug' component={Post} exact /> */}
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        )
    
}

export default Index
