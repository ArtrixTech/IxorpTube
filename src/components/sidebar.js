import React from "react";
import { Menu, Icon, Button } from 'antd';


import { browserHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
const SubMenu = Menu.SubMenu;

class SideBar extends React.Component {
  state = {
    collapsed: true,
  }

  constructor(props) {
    super(props)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  changePage = (path) => {

    // return(<Redirect to="/dashboard"/>) 
  }

  render() {
    return (
      <div style={{ "height": "100%", width: 80, "WebkitAppRegion": "no-drag" }} className="ixorptube-sidebar">
        <Button type="primary" onClick={this.toggleCollapsed} className="hidden" style={{ marginBottom: 16, display: "none" }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>

        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={24}
          className="ixorptube-sidebar"
          style={{ "height": "100%", "position": "absolute" }}
        >

          <Menu.Item key="1" onClick={() => this.props.history.push('/dashboard')} className="menuItem">
            <Icon type="pie-chart" style={{ "fontSize": "22px", "marginLeft": -2, "marginTop": 10 }} />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => this.props.history.push('/proxy_list')} className="menuItem">
            <Icon type="desktop" style={{ "fontSize": "22px", "marginLeft": -2, "marginTop": 10 }} />
            <span>Proxy List</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => this.props.history.push('/settings')} className="menuItem" >
            <Icon type="setting" style={{ "fontSize": "22px", "marginLeft": -2, "marginTop": 10 }} />
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
SideBar = withRouter(SideBar)
export default SideBar;

