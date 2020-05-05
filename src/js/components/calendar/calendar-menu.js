import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class CalendarMenu extends React.Component {
    render() {
        return (
            <div className="form-wraper">
            <button style={{height: '30px', margin: '5px'}}></button>
            <button style={{height: '30px', margin: '5px'}}></button>
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