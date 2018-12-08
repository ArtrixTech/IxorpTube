import React from 'react'
import { Router } from './components'
import routes from './pages/routes'
import './styles/index.less'
import SideBar from './components/sidebar.js'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app">
        <SideBar style="width:auto;"></SideBar>
      </div>
    )
  }
 
} // class App end        <Router routes={routes} />




