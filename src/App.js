import React from 'react'
//import { Router } from './components'
import routes from './pages/routes'

import {
  BrowserRouter as Router, browserHistory,
  Route, Switch
} from 'react-router-dom';

import { Redirect } from 'react-router';

import { Icon, Button } from 'antd';


import Dashboard from './pages/dashboard'
import ProxyList from './pages/proxy_list'
import Settings from './pages/settings'

import SideBar from './components/sidebar'
import WindowControl from './components/window_control'

import './styles/index.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app">

        <Router history={browserHistory}>

          <div id="contents">

            <SideBar/>

            <div id="pages">

              <div id="topBar" className="drag">
                <span id="logo" className="ixorptube-logo unselective">IxorpTube</span>

                <WindowControl className="windowControl"/>
               
              </div>

              <div id="container">
                <Switch>

                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/proxy_list" component={ProxyList} />
                  <Route path="/settings" component={Settings} />
                  <Redirect to="/dashboard"></Redirect>

                </Switch>
              </div>
            </div>
          </div>
        </Router>

      </div>
    )
  }

} // class App end        <Router routes={routes} />




