import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class NewTabForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.refs.tabTitle.value;
        const type = document.querySelector('input[name="tab-type"]:checked').value;
        this.props.addTab(title, type);
        this.props.removeNewTabForm();
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
                    <input type="text" ref="tabTitle" placeholder="Tab name" required></input>
                    <label className="container">
                        <input type="radio" name="tab-type" value="list" required></input>List
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        <input type="radio" name="tab-type" value="note"></input>Note
                        <span className="checkmark"></span>
                    </label>
                    <button type="submit" >Add</button>
                </form>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.props.removeNewTabForm}/>
            </div>
        )
    }
}