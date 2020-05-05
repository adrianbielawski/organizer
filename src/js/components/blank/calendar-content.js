import React from 'react';
//Components
import {CalendarMenu} from './calendar-menu';

export class CalendarContent extends React.Component {
    changeTabTitle = (newTitle) => {
        this.props.changeTabTitle(newTitle)
    }

    render() {
        return (
            <div className="content">
                <CalendarMenu
                    removeTab={this.props.removeTab}
                    toggleShowSettings={this.props.toggleShowSettings}
                    changeTabTitle={this.changeTabTitle}
                    tabTitle={this.props.tabTitle}
                    showSettings={this.props.showSettings}/>
            </div>
        )
    }
}