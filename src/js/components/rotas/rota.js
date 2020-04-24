import React from 'react';
//Components
import {Day} from './day';

export class Rota extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: this.props.week,
            weekCommencing: this.props.week.weekCommencing,
            weekHours: this.props.week.weekHours,
            weekIndex: this.props.week.weekIndex,
            isEditDayOpen: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                week: nextProps.week,
                weekCommencing: nextProps.week.weekCommencing,
                weekHours: nextProps.week.weekHours,
                weekIndex: nextProps.week.weekIndex,
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

    changeEditDayStatus = (value) => {
        this.setState({isEditDayOpen: value})
    }

    render() {
        let days = this.state.week.days;
        this.daysArray = [];
        
        for (let i in days) {
            let day = <Day
                updateDay = {this.updateDay}
                changeEditDayStatus = {this.changeEditDayStatus}
                setWeekHours = {this.setWeekHours}
                isEditDayOpen = {this.state.isEditDayOpen}
                day = {this.state.week.days[i]}
                dayIndex = {i}
                weekIndex = {this.state.weekIndex}
                key={i}/>;
            
            this.daysArray.push(day)
        }


        return (
            <div className="rota-content-wraper">
                <div className="rota">
                    <div className="rota-header">
                        <div className="week-commencing">Week Commencing: <span>{this.state.weekCommencing}</span></div>
                        <div className="">Total hours: <span>{this.state.weekHours}</span></div>
                    </div>
                    <div className="days">
                        {this.daysArray}
                    </div>
                </div>
            </div>
        )
    }
}