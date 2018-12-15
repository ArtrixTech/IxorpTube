import { Icon, Button } from 'antd';
import React from 'react'

export default class WindowControl extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div style={{ display: "inline-block" }} className={this.props.className}>
                <Button className="windowButton minimize no-drag" type="ghost" size="small" shape="circle">
                    <Icon type="minus" className="windowButton icon" />
                </Button>

                <Button className="windowButton close no-drag" type="primary" size="small" shape="circle">
                    <Icon type="close" className="windowButton icon" />
                </Button>
            </div>
        );
    }
}