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

    updateDay = (breakLength, shiftStart, shiftEnd, dayIndex, weekIndex) => {
        this.props.updateDay(breakLength, shiftStart, shiftEnd, dayIndex, weekIndex)
    }

    removeItem = (item) => {
        this.props.removeItem(item);
    }

    addItem = (item) => {
        this.props.addItem(item);
    }

    handleRemoveTab = () => {
        this.props.removeTab();
    }

    openSettings = () => {
        this.props.openSettings();
    }

    closeSettings = () => {
        this.props.closeSettings();
    }

    changeTabTitle = (newTitle) => {
        this.props.changeTabTitle(newTitle)
    }

    changeView = (value) => {
        this.props.changeView(value);
    }

    render() {
        let weeks = [];
        for (let i = 0; i <= this.state.rotaView; i++) {
            weeks.push(
                <Rota
                updateDay = {this.updateDay}
                week = {this.state.weeks[i] && this.state.weeks[i]} key={i}/>)
            }
        
        return (
            <div className="content">
            <RotaMenu
                handleRemoveTab = {this.handleRemoveTab}
                openSettings = {this.openSettings}
                closeSettings = {this.closeSettings}
                changeTabTitle = {this.changeTabTitle}
                changeView = {this.changeView}
                tabTitle = {this.state.tabTitle}
                showSettings = {this.state.showSettings}/>
                {weeks}
            </div>
        )
    }
}