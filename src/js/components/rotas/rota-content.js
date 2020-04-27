import React from 'react';
//Components
import {RotaMenu} from './rota-menu';
import {Rota} from './rota';

export class RotaContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotaView: this.props.rotaView,
            tabTitle: this.props.tabTitle,
            showSettings: this.props.showSettings,
            weeks: this.props.weeks,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                rotaView: nextProps.rotaView,
                tabTitle: nextProps.tabTitle,
                showSettings: nextProps.showSettings,
                weeks: nextProps.weeks,
            });
        }
    }

    render() {
        let weeks = [];
        for (let i = 0; i <= this.state.rotaView; i++) {
            weeks.push(
                <Rota
                updateDay = {this.props.updateDay}
                week = {this.state.weeks[i] && this.state.weeks[i]} key={i}/>)
            }
        
        return (
            <div className="content">
            <RotaMenu
                removeTab = {this.props.removeTab}
                openSettings = {this.props.openSettings}
                closeSettings = {this.props.closeSettings}
                changeTabTitle = {this.props.changeTabTitle}
                changeView = {this.props.changeView}
                tabTitle = {this.state.tabTitle}
                showSettings = {this.state.showSettings}/>
                {weeks}
            </div>
        )
    }
}