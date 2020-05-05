import React from 'react';
//Components
import { ListMenu } from './list-menu';
import { ListItem } from './list-item';

export class List extends React.Component {
    render() {
        let items = this.props.items;
        items = items.map((value, index) => {
            return(
                <ListItem key={index} index={index} value={value} removeListItem={this.props.removeListItem}/>
            );
        })

        return (
            <div className="content">
                <ListMenu
                    addListItem={this.props.addListItem}
                    removeTab={this.props.removeTab}
                    toggleShowSettings={this.props.toggleShowSettings}
                    changeTabTitle={this.props.changeTabTitle}
                    tabTitle={this.props.tabTitle}
                    showSettings={this.props.showSettings}
                    key={this.props.id} />
                <ul className="items">
                    {items}
                </ul>
            </div>
        )
    }
}