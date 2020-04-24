import React from 'react';
//Components
import {Rotas} from '../rotas/rotas';
import {Lists} from '../lists/lists';
import {Calendar} from '../calendar/calendar';
import {Tab} from './tab';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    tabTitle: 'Lists',
                },
                {
                    tabTitle: 'Rotas',
                },
                {
                    tabTitle: 'Calendar',
                }],
            activeTab: 1,
            newTabForm: false,
        }
    }
    
    activateTab = (index) => {
        this.setState({
            activeTab: index
        })
    }

    render() {
        let tabs = this.state.tabs;
        let activeTab = this.state.activeTab;
        let tabTitles = [];

        let tabsContent = tabs.map((item, index) => {
            let title = item.tabTitle;
            let active = false;
            tabTitles.push(title);

            if (index === activeTab) (
                active = true
            )

            if (title === 'Rotas') {
                return <Rotas active={active} index={index} title={this.state.tabs[index].tabTitle}/>
            } else if (title === 'Lists') {
                return <Lists active={active} index={index} title={this.state.tabs[index].tabTitle}/>
            } else if (title === 'Calendar') {
                return <Calendar active={active} index={index} title={this.state.tabs[index].tabTitle}/>
            }
        })

        let navItems = tabTitles.map((item, index) => {
            let active = false;

            if (index === activeTab) (
                active = true
            )
            return <Tab activateTab={this.activateTab} index={index} tabTitle={item} active={active} key={index}/>
        })

        return (
            <div className="nav">
                <ul>
                    {navItems}
                </ul>
                <div className="main-content">
                    {tabsContent[activeTab]}
                </div>
            </div>
        )
    }
}