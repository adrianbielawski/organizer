import React from 'react';
//Components
import {NoteMenu} from './note-menu';

export class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                title: nextProps.title,
                showSettings: nextProps.showSettings,
                bold: nextProps.bold,
                italic: nextProps.italic,
                color: nextProps.color,
                fontFamily: nextProps.fontFamily
            });
        }
    }

    render() {
        let textareaStyles = {
            fontWeight: '400',
            fontStyle: 'unset',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
        };

        if(this.state.bold) {
            textareaStyles.fontWeight = '700'
        }
        
        if(this.state.italic) {
            textareaStyles.fontStyle = 'italic'
        }

        return (
            <div className="content">
                <NoteMenu
                    removeTab={this.props.removeTab}
                    openSettings={this.props.openSettings}
                    closeSettings={this.props.closeSettings}
                    changeFont={this.props.changeFont}
                    changeFontWeight={this.props.changeFontWeight}
                    changeFontStyle={this.props.changeFontStyle}
                    changeTabTitle={this.props.changeTabTitle}
                    title={this.state.title}
                    showSettings={this.state.showSettings}/>
                <textarea cdkFocusInitial autoFocus style={textareaStyles} defaultValue={this.props.items}></textarea>
            </div>
        )
    }
}