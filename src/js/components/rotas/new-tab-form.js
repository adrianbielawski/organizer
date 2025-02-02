import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class NewTabForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const tabTitle = this.refs.tabTitle.value;
        this.props.addTab(tabTitle);
        this.props.toggleNewTabForm();
        e.target.reset();
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
                    <input id="new-tab-title" type="text" ref="tabTitle" placeholder="Tab title" required></input>
                    <button type="submit" >Add</button>
                </form>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.props.toggleNewTabForm}/>
            </div>
        )
    }
}