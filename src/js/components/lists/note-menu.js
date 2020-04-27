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

    handleChange = () => {
        let color = this.refs.color.value;
        let fontFamily = this.refs.fontFamily.value;
        this.props.changeFont(color, fontFamily);
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
                    <div className="button bold" name="bold" value="B" onClick={this.props.changeFontWeight}>B</div>
                    <div className="button italic" name="italic" value="I" onClick={this.props.changeFontStyle}>I</div>
                <div className="tab-settings-button" onClick={this.props.openSettings}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </div>
                <TabSettings
                    closeSettings={this.props.closeSettings}
                    removeTab={this.props.removeTab}
                    changeTabTitle={this.props.changeTabTitle}
                    title={this.state.title}
                    showSettings={this.state.showSettings}/>
            </div>
        )
    }
}