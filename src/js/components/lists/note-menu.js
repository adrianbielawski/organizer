import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
//Components
import { TabSettings } from '../nav/tab-settings';

export class NoteMenu extends React.Component {
    handleColorChange = () => {
        let color = this.refs.color.value;
        this.props.changeFontColor(color);
    }

    handleFontFamilyChange = () => {
        let fontFamily = this.refs.fontFamily.value;
        this.props.changeFontFamily(fontFamily);
    }

    render() {
        let fontButtonOn = {backgroundColor: '#f8c668', borderColor: '#fffbe4'};

        return (
            <div className="form-wraper note">
                <form>
                    <select id="note-color" name="color" onChange={this.handleColorChange} ref="color" defaultValue={this.props.textareaStyles.color}>
                        <option value="black" >Black</option>
                        <option value="blue" >Blue</option>
                        <option value="red" >Red</option>
                        <option value="green" >Green</option>
                    </select>
                    <select id="note-font-family" name="font-family" onChange={this.handleFontFamilyChange} ref="fontFamily" defaultValue={this.props.textareaStyles.fontFamily}>
                        <option value="auto" >Auto</option>
                        <option value="roboto" >Roboto</option>
                        <option value="roboto mono" >Roboto Mono</option>
                    </select>
                </form>
                    <div className="button bold" name="bold" value="B" onClick={this.props.changeFontWeight} style={this.props.bold ? fontButtonOn : {}}>B</div>
                    <div className="button italic" name="italic" value="I" onClick={this.props.changeFontStyle} style={this.props.italic ? fontButtonOn : {}}>I</div>
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
        )
    }
}