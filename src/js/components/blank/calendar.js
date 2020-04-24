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
                    title: 'Week',
                    showSettings: false
                },
                {
                    title: 'Month',
                    showSettings: false
                },
                {
                    title: 'Year',
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

    openSettings = () => {
        let tab = this.state.activeTab;
        let newState = Object.assign({}, this.state);
        newState.tabs[tab].showSettings = true;
        this.setState(newState);
    }

    closeSettings = () => {
        let tab = this.state.activeTab;
        let newState = Object.assign({}, this.state);
        newState.tabs[tab].showSettings = false;
        this.setState(newState);
    }

    changeTabTitle = (newTitle) => {
        let tab = this.state.activeTab;
        let newState = Object.assign({}, this.state);
        newState.tabs[tab].title = newTitle;
        this.setState(newState);
    }

    render() {
        let tabs = this.state.tabs;
        let activeTab = this.state.activeTab;
        let showSettings = this.state.tabs[activeTab].showSettings;

        tabs = tabs.map((item, index) => {
            let active = false

            if (index === this.state.activeTab) (
                active = true
            )

            return(
                <Tab activateTab={this.activateTab} active={active} index={index} title={this.state.tabs[index].title}/>
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
                    openSettings={this.openSettings}
                    closeSettings={this.closeSettings}
                    removeTab={this.removeTab}
                    changeTabTitle={this.changeTabTitle}
                    title={this.state.tabs[activeTab].title}
                    items={this.state.tabs[activeTab].list}
                    showSettings={showSettings}/>
            </div>
        )
    }
}