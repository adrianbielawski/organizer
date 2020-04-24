import React from 'react';
//Components
import {CalendarMenu} from './calendar-menu';

export class CalendarContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                title: nextProps.title,
                showSettings: nextProps.showSettings
            });
        }
    }

    removeItem = (item) => {
        this.props.removeItem(item);
    }

    addItem = (item) => {
        this.props.addItem(item);
    }

    handleRemoveTab = () => {
        this.props.removeTab();
    }

    openSettings = () => {
        this.props.openSettings();
    }

    closeSettings = () => {
        this.props.closeSettings();
    }

    changeTabTitle = (newTitle) => {
        this.props.changeTabTitle(newTitle)
    }

    render() {
        return (
            <div className="content">
                <CalendarMenu
                    handleRemoveTab={this.handleRemoveTab}
                    openSettings={this.openSettings}
                    closeSettings={this.closeSettings}
                    changeTabTitle={this.changeTabTitle}
                    title={this.state.title}
                    showSettings={this.state.showSettings}/>
            </div>
        )
    }
}