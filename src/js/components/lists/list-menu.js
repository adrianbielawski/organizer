import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class ListMenu extends React.Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const inputVal = this.refs.newItem.value;
        this.props.addItem(inputVal);
        e.target.reset();
        const input = document.getElementById('new-list-value');
        input.focus();
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
                <form onSubmit={this.handleSubmit}>
                    <input  id="new-list-value" type="text" placeholder="Max 30 characters" ref="newItem" autoFocus required/>
                    <button type="submit" className="add"><FontAwesomeIcon icon={faPlus} className="plus"/></button>
                </form>
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