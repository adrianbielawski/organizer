import React from 'react';

export class Tab extends React.Component {
    activateTab = () => {
        this.props.activateTab(this.props.index);
    }

    render() {
        if (this.props.active) {
            this.style = 'active';
        } else {
            this.style = 'inactive';
        }

        return (
            <li onClick={this.activateTab} className={this.style}>
                {this.props.tabTitle}
            </li>
        )
    }
}