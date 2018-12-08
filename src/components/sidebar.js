import React from "react";
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SideBar extends React.Component {
  state = {
    collapsed: true,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
          theme="light"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={24}
          className="ixorptube-sidebar"
          style={{ "height": "100%", "position": "absolute" }}
        >

          <Menu.Item key="1">
            <Icon type="pie-chart" style={{ "font-size": "22px", margin: "-3px" }} />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" style={{ "font-size": "22px", margin: "-3px" }} />
            <span>Proxy List</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="setting" style={{ "font-size": "22px", margin: "-3px" }} />
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
