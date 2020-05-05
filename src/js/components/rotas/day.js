import React from 'react';
//Components
import {EditDay} from './edit-day';

export class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayDayEdit: false,
        };
    }

    updateDay = (breakLength, shiftStart, shiftEnd) => {
        this.props.updateDay(breakLength, shiftStart, shiftEnd, this.props.dayIndex, this.props.weekIndex)
    }

    showEditDay = () => {
        if(this.props.isEditDayOpen) {
            return
        }
        this.props.toggleIsEditDayOpen();
        this.setState({displayDayEdit: true});
    }

    closeEditDay = () => {
        this.setState({displayDayEdit: false});
        this.props.toggleIsEditDayOpen();
    }

    render() {
        return (
            <div className="day" onClick={this.showEditDay}>
                <p>{this.props.day.dayName}</p>
                <EditDay
                    closeEditDay = {this.closeEditDay}
                    updateDay = {this.updateDay}
                    display = {this.state.displayDayEdit}
                    dayIndex = {this.props.dayIndex}/>
                <div className="day-hours">
                    <div className="break"><p>Break:</p><span>{this.props.day.breakLength}</span></div>
                    <div className="hours">{this.props.day.shiftStart}<span> - </span>{this.props.day.shiftEnd}</div>
                    <div className="day-total-hours">{this.props.day.dayHours}</div>
                </div>
            </div>
        );
    }
}