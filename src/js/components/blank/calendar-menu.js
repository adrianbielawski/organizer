import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class CalendarMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                title: nextProps.title,
                showSettings: nextProps.showSettings
            });
        }
    }

    handleSettings = () => {
        this.props.openSettings();
    }

    handleClose = () => {
        this.props.closeSettings();
    }

    handleRemoveTab = () => {
        this.props.handleRemoveTab();
    }

    changeTabTitle = (newTitle) => {
        this.props.changeTabTitle(newTitle)
    }

    render() {
        return (
            <div className="form-wraper">
            <button style={{height: '30px', margin: '5px'}}></button>
            <button style={{height: '30px', margin: '5px'}}></button>
                <div className="tab-settings-button" onClick={this.handleSettings}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </div>
                <TabSettings
                handleClose={this.handleClose}
                handleRemoveTab={this.handleRemoveTab}
                changeTabTitle={this.changeTabTitle}
                title={this.state.title}
                showSettings={this.state.showSettings}/>
            </div>
        );
    }
}