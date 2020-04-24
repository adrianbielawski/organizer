import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import {TabSettings} from '../nav/tab-settings';

export class NoteMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                showSettings: nextProps.showSettings,
                title: nextProps.title
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

    handleChange = () => {
        let color = this.refs.color.value;
        let fontFamily = this.refs.fontFamily.value;
        this.props.changeFont(color, fontFamily);
    }

    handleBold = () => {
        this.props.changeFontWeight();
    }

    handleItalic = () => {
        this.props.changeFontStyle();
    }

    changeTabTitle = (newTitle) => {
        this.props.changeTabTitle(newTitle)
    }

    render() {
        return (
            <div className="form-wraper note">
                <form onChange={this.handleChange}>
                    <select id="note-color" name="color" ref="color">
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
                    <select id="note-font-family" name="font-family" ref="fontFamily">
                        <option value="auto">Auto</option>
                        <option value="roboto">Roboto</option>
                        <option value="roboto mono">Roboto Mono</option>
                    </select>
                </form>
                    <div className="button bold" name="bold" value="B" onClick={this.handleBold}>B</div>
                    <div className="button italic" name="italic" value="I" onClick={this.handleItalic}>I</div>
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
        )
    }
}