import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class ListMenu extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const inputVal = this.refs.newItem.value;
        this.props.addListItem(inputVal);
        e.target.reset();
        const input = document.getElementById('new-list-value');
        input.focus();
    }

    render() {
        return (
            <div className="form-wraper">
                <form onSubmit={this.handleSubmit}>
                    <input  id="new-list-value" type="text" placeholder="Max 30 characters" ref="newItem" autoFocus required/>
                    <button type="submit" className="add"><FontAwesomeIcon icon={faPlus} className="plus"/></button>
                </form>
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