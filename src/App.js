import React from 'react'
import { Router } from './components'
import routes from './pages/routes'

import SideBar from './components/sidebar.js'

import './styles/index.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app">
        <SideBar></SideBar>
      </div>
    )
  }
 
} // class App end        <Router routes={routes} />




