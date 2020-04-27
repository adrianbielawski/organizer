import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export class TabSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                tabTitle: nextProps.tabTitle,
                activeTab: nextProps.activeTab,
            });
        }
    }

    handleTitleChange = () => {
        let newTitle = this.refs.newTitle.value;
        this.props.changeTabTitle(newTitle);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.closeSettings();
        e.target.reset();
    }

    render() {        
        let style = {};
        if(this.props.showSettings) {
            style = {
                width: '100%',
                padding: '0 1px 0 5px',
            }
        }
        let tabTitle = this.state.tabTitle;
        return (
            <div className="tab-settings" style={style}>
                    <form id="new-tab-title" onSubmit={this.handleSubmit}>
                        <button className="remove-tab" onClick={this.props.removeTab}>Remove tab</button>
                        <label>Tab title
                            <input onChange={this.handleTitleChange} placeholder={tabTitle} ref="newTitle"/>
                            <button type="submit" className="confirm">
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                        </label>
                    </form>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.props.closeSettings}/>
            </div>
        )
    }
}