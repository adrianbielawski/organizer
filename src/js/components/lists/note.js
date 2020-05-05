import React from 'react';
//Components
import { NoteMenu } from './note-menu';

export class Note extends React.Component {
    handleUpdate = (e) => {
        this.props.updateNote(e.target.value)
    }

    render() {
        let textareaStyles = {
            fontWeight: '400',
            fontStyle: 'unset',
            color: this.props.fontColor,
            fontFamily: this.props.fontFamily,
        };
        let bold = false;
        let italic = false;

        if(this.props.isFontWeightBold) {
            textareaStyles.fontWeight = '700';
            bold = !bold;
        }
        
        if(this.props.isFontStyleItalic) {
            textareaStyles.fontStyle = 'italic';
            italic = !italic;
        }

        return (
            <div className="content">
                <NoteMenu
                    removeTab={this.props.removeTab}
                    toggleShowSettings={this.props.toggleShowSettings}
                    changeFontFamily={this.props.changeFontFamily}
                    changeFontColor={this.props.changeFontColor}
                    changeFontWeight={this.props.changeFontWeight}
                    changeFontStyle={this.props.changeFontStyle}
                    changeTabTitle={this.props.changeTabTitle}
                    textareaStyles={textareaStyles}
                    bold={bold}
                    italic={italic}
                    tabTitle={this.props.tabTitle}
                    showSettings={this.props.showSettings}
                    key={this.props.id} />
                <textarea onChange={this.handleUpdate} style={textareaStyles} value={this.props.note} cdkFocusInitial autoFocus></textarea>
            </div>
        )
    }
}