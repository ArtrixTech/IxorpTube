import React from 'react'
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router, browserHistory,
  Route, Switch
} from 'react-router-dom';

import { Redirect } from 'react-router';

import Dashboard from './pages/dashboard'
import ProxyList from './pages/proxy_list'
import Settings from './pages/settings'

import SideBar from './components/sidebar'
import WindowControl from './components/window_control'

import './styles/index.less'

const {ipcRenderer: ipc} = require('electron');

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dashboard'
    }
  }

  setTitle(titleIn) {
    this.setState({ title: titleIn });
  }

  render() {
    return (
      <div id='app'>

        <Router history={browserHistory}>

          <div id='contents'>

            <SideBar titleCallBack={this.setTitle.bind(this)} />

            <div id='pages'>

              <div id='topBar' className='drag'>
                <span className='pageTitle'>{this.state.title}</span>
                <span id='logo' className='ixorptube-logo unselective'>IxorpTube</span>
                <WindowControl className='windowControl' ipc={ipc}/>
              </div>

              <div id='container'>
                <Switch>

                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/proxy_list' component={ProxyList} />
                  <Route path='/settings' component={Settings} />
                  <Redirect to='/dashboard' />

                </Switch>
              </div>
            </div>
          </div>
        </Router>

      </div>
    )
  }

} // class App end        <Router routes={routes} />




