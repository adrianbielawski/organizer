import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class NewTabForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.refs.tabName.value;
        this.props.addTab(title);
        this.props.removeNewTabForm();
        e.target.reset();
    }

    handleRemove = () => {
        this.props.removeNewTabForm();
    }

    render() {
        let style = {
            width: '0',
            padding: '0'
        };

        if (this.props.display === true) {
            style = {
                width: '100%',
                padding: '0 10px'
            }
        }
        return (
            <div className="new-tab-form" style={style}>
                <form onSubmit={this.handleSubmit}>
                    <input id="new-tab-title" type="text" ref="tabName" placeholder="Tab name" required></input>
                    <button type="submit" >Add</button>
                </form>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.handleRemove}/>
            </div>
        )
    }
}