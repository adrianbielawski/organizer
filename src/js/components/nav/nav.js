import React from 'react';
//Components
import {Tab} from './tab';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTabForm: false,
        }
    }

    render() {
        let tabs = this.props.tabs;

        let navItems = tabs.map((item, index) => {
            let active = index === this.props.activeTab ? true : false;
            
            return <Tab activateTab={this.props.activateTab} index={index} tabTitle={item.tabTitle} active={active} key={index}/>
        })

        return (
            <ul className="nav">
                {navItems}
            </ul>
        )
    }
}