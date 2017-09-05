import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux'
import App from './pages/App'
import Home from './pages/home'
import List from './pages/list'
import Add from './pages/add'
import Update from './pages/update'
import Collect from './pages/collect'
import './assets/index.css'
//import 'bootstrap/dist/css/bootstrap.css'
render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/list'} component={List}/>
                    <Route path={'/add'} component={Add}/>
                    <Route path={'/update/:id'} component={Update}/>
                    <Route path={'/collect'} component={Collect}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root'));