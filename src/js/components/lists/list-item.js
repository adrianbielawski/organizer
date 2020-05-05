import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export class ListItem extends React.Component {
    handleClick = () => {
        this.props.removeListItem(this.props.index);
    }

    render() {
        return (
            <li>
                <div className="item-content">{this.props.value}</div>
                <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.handleClick}/>
            </li>
        )
    }
}