import React from 'react';
//Components
import { RotaMenu } from './rota-menu';
import { Rota } from './rota';

export class RotaContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDayOpen: false,
        }
    }

    toggleIsEditDayOpen = () => {
        this.setState(prevState => ({
            isEditDayOpen: !prevState.isEditDayOpen}))
    }
    render() {
        let weeks = [];
        for (let i = 0; i <= this.props.rotaView; i++) {
            weeks.push(
                <Rota
                    toggleIsEditDayOpen = {this.toggleIsEditDayOpen}
                    isEditDayOpen = {this.state.isEditDayOpen}
                    updateDay = {this.props.updateDay}
                    week = {this.props.weeks[i] && this.props.weeks[i]} key={i}/>
                )
            }
        
        return (
            <div className="content">
                <RotaMenu
                    removeTab = {this.props.removeTab}
                    toggleShowSettings = {this.props.toggleShowSettings}
                    changeTabTitle = {this.props.changeTabTitle}
                    changeView = {this.props.changeView}
                    tabTitle = {this.props.tabTitle}
                    showSettings = {this.props.showSettings}
                    key={this.props.id}/>
                {weeks}
            </div>
        )
    }
}