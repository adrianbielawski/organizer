import React from 'react';
//Components
import {EditDay} from './edit-day';

export class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            day: this.props.day,
            dayName: this.props.day.dayName,
            dayIndex: this.props.dayIndex,
            displayDayEdit: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                day: nextProps.day,
                dayIndex: nextProps.dayIndex,
                weekHours: nextProps.weekHours,
                weekIndex: nextProps.weekIndex,
            });
        }
    }

    updateDay = (breakLength, shiftStart, shiftEnd) => {
        this.props.updateDay(breakLength, shiftStart, shiftEnd, this.state.dayIndex, this.state.weekIndex)
    }

    handleShowEditDay = () => {
        if(this.props.isEditDayOpen) {
            return
        }
        this.props.changeEditDayStatus(true);
        this.setState({displayDayEdit: true});
    }

    closeEditDay = () => {
        this.setState({displayDayEdit: false});
        this.props.changeEditDayStatus(false);
    }

    render() {
        return (
            <div className="day" onClick={this.handleShowEditDay}>
                <p>{this.state.day.dayName}</p>
                <EditDay
                    closeEditDay = {this.closeEditDay}
                    updateDay = {this.updateDay}
                    display = {this.state.displayDayEdit}
                    dayIndex = {this.state.dayIndex}/>
                <div className="day-hours">
                    <div className="break"><p>Break:</p><span>{this.state.day.breakLength}</span></div>
                    <div className="hours">{this.state.day.shiftStart}<span> - </span>{this.state.day.shiftEnd}</div>
                    <div className="day-total-hours">{this.state.day.dayHours}</div>
                </div>
            </div>
        );
    }
}