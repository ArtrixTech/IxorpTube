import React from 'react'
import { withRouter, Redirect } from 'react-router';
import { Steps, Icon, Button, Divider } from 'antd';
import PropTypes from "prop-types";

const Step = Steps.Step;


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            largeIcon: "disconnect",
            connectionStateText: "Disconnected"
        }
    }

    render() {
        return (
            <div>
                <Icon className="dash-largeIcon" type={this.state.largeIcon} />
                <p className="dash-stateSpan">{this.state.connectionStateText}</p>
                <Steps className="dash-connectSteps" size="small">
               
                    <Step status="finish"  style={{  marginLeft: 136}}title="Computer" icon={<Icon type="user" />} />
                    <Step status="finish" style={{ right: 24 }} title="Proxy Server" icon={<Icon type="solution" />} />
                    <Step status="wait" title="Internet" icon={<Icon type="global" />} />
                </Steps>

            </div>
        )

    }



} withRouter(Dashboard)
// class Page end