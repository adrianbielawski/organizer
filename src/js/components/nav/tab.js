import React from 'react';

export class Tab extends React.Component {
    activateTab = () => {
        this.props.activateTab(this.props.index);
    }

    render() {
        let style = this.props.active ? 'active' : 'inactive';
        
        return (
            <li onClick={this.activateTab} className={style}>
                {this.props.tabTitle}
            </li>
        )
    }
}