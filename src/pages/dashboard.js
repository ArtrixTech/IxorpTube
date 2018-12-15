import React from 'react'
import {withRouter,Redirect } from 'react-router';
import { Menu, Icon, Button } from 'antd';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
      
        return (
            <div>
                <p>Dashboard</p>
                <hr />
                <Button onClick={() => {
                    history.goBack()
                }}>back</Button>
            </div>
        )
    }

   

} withRouter(Dashboard) 
// class Page end