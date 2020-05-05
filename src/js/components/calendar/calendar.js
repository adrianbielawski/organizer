import React from 'react';
import './calendar.css';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Components
import { Tab } from '../nav/tab';
import {CalendarContent} from './calendar-content';

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    tabTitle: 'Week',
                    showSettings: false
                },
                {
                    tabTitle: 'Month',
                    showSettings: false
                },
                {
                    tabTitle: 'Year',
                    showSettings: false
                }],
            activeTab: 0,
        }
    }

    activateTab = (index) => {
        this.setState({
            activeTab: index
        })
    }

    removeTab = () => {
        if (this.state.tabs.length === 1) {
            alert("You can't remove this tab. Please add new tab before removing this one")
            return
        }
        const tabsLength = this.state.tabs.length - 1;
        let tab = this.state.activeTab;
        let newTabs = this.state.tabs.filter((val, index) => {
            return tab !== index;
        });

        let activeTab = tab;
        if(tab === tabsLength) {
            activeTab = tab -1;
        }

        this.setState({
            tabs: newTabs,
            activeTab: activeTab
        });
    }

    toggleShowSettings = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].showSettings = !newState.tabs[tab].showSettings;
        this.setState(newState);
    }

    changeTabTitle = (newTitle) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].tabTitle = newTitle;
        this.setState(newState);
    }

    render() {
        let tabs = this.state.tabs;
        let activeTab = this.state.activeTab;
        let showSettings = this.state.tabs[activeTab].showSettings;

        tabs = tabs.map((item, index) => {
            let active = false

            if (index === activeTab) (
                active = true
            )

            return(
                <Tab activateTab={this.activateTab} active={active} index={index} tabTitle={this.state.tabs[index].tabTitle}/>
            );
        })

        return (
            <div className="calendar-wraper">
                <div className="tabs-wraper">
                    <div className="tabs">
                        <ul>
                            {tabs}
                        </ul>
                    </div>
                </div>
                <CalendarContent
                    toggleShowSettings={this.toggleShowSettings}
                    removeTab={this.removeTab}
                    changeTabTitle={this.changeTabTitle}
                    tabTitle={this.state.tabs[activeTab].tabTitle}
                    showSettings={showSettings}/>
            </div>
        )
    }
}