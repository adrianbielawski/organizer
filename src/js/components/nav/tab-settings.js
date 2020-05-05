import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export class TabSettings extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let newTitle = this.refs.newTitle.value;
        this.props.changeTabTitle(newTitle);
        this.props.toggleShowSettings();
        e.target.reset();
    }

    handleCloseSettings = () => {
        this.refs.newTitle.value = '';
        this.props.toggleShowSettings();
    }

    render() {        
        let style = {};
        if(this.props.showSettings) {
            style = {
                width: '100%',
                padding: '0 1px 0 5px',
            }
        }
        return (
            <div className="tab-settings" style={style}>
                    <form id="new-tab-title" onSubmit={this.handleSubmit}>
                        <button className="remove-tab" onClick={this.props.removeTab}>Remove tab</button>
                        <label>Tab title
                            <input placeholder={this.props.tabTitle} ref="newTitle"/>
                            <button type="submit" className="confirm">
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                        </label>
                    </form>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.handleCloseSettings}/>
            </div>
        )
    }
}