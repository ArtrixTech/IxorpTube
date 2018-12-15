import React from 'react'
import {withRouter,Redirect } from 'react-router';
import { Menu, Icon, Button } from 'antd';

export default class Settings extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
      
        return (
            <div>
                <p>Settings</p>
                <hr />
                <Button onClick={() => {
                    history.goBack()
                }}>back</Button>
            </div>
        )
    }

   

} withRouter(Settings) 
// class Page end