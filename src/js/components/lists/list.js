import React from 'react';
//Components
import {ListMenu} from './list-menu';
import {Item} from './item';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                title: nextProps.title,
                showSettings: nextProps.showSettings
            });
        }
    }

    render() {
        let items = this.props.items;
        items = items.map((item, index) => {
            return(
                <Item key={index} index={index} value={item} removeItem={this.props.removeItem}/>
            );
        })

        return (
            <div className="content">
                <ListMenu
                    addItem={this.props.addItem}
                    removeTab={this.props.removeTab}
                    openSettings={this.props.openSettings}
                    closeSettings={this.props.closeSettings}
                    changeTabTitle={this.props.changeTabTitle}
                    title={this.state.title}
                    showSettings={this.state.showSettings}/>
                <ul className="items">
                    {items}
                </ul>
            </div>
        )
    }
}