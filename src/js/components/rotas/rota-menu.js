import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import { TabSettings } from '../nav/tab-settings';

export class RotaMenu extends React.Component {
    handleView = (e) => {
        let value = e.target.value;
        this.props.changeView(value)
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
                <div className="tab-settings-button" onClick={this.props.toggleShowSettings}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </div>
                <TabSettings
                    toggleShowSettings={this.props.toggleShowSettings}
                    removeTab={this.props.removeTab}
                    changeTabTitle={this.props.changeTabTitle}
                    tabTitle={this.props.tabTitle}
                    showSettings={this.props.showSettings}/>
            </div>
        );
    }
}