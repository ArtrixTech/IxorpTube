import React from 'react'
import { withRouter, Redirect } from 'react-router';
import { Menu, Icon, Button, Divider } from 'antd';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <span className="pageTitle">Dashboard</span>


            </div>
        )

    }



} withRouter(Dashboard)
// class Page end