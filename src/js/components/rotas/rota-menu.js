import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class RotaMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                tabTitle: nextProps.tabTitle,
                showSettings: nextProps.showSettings,
            });
        }
    }
    handleView = (e) => {
        let value = e.target.value;
        this.props.changeView(value)
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

    handleHistory = () => {
        alert('Comming soon!!!')
    }

    render() {
        return (
            <div className="form-wraper">
                <div className="menu-buttons">
                    <div className="view-options">
                        <button onClick={this.handleView} value="0">One week</button>
                        <button onClick={this.handleView} value="1">Two weeks</button>
                    </div>
                    <div>
                        <button onClick={this.handleHistory}>History</button>
                    </div>
                </div>
                <div className="tab-settings-button" onClick={this.handleSettings}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </div>
                <TabSettings
                    handleClose={this.handleClose}
                    handleRemoveTab={this.handleRemoveTab}
                    changeTabTitle={this.changeTabTitle}
                    tabTitle={this.state.tabTitle}
                    showSettings={this.state.showSettings}/>
            </div>
        );
    }
}