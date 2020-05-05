import React from 'react';
//Components
import { Day } from './day';

export class Rota extends React.Component {
    render() {
        let days = this.props.week.days;
        let daysArray = [];
        
        for (let i in days) {
            let day = <Day
                isEditDayOpen = {this.props.isEditDayOpen}
                updateDay = {this.props.updateDay}
                toggleIsEditDayOpen = {this.props.toggleIsEditDayOpen}
                setWeekHours = {this.setWeekHours}
                day = {this.props.week.days[i]}
                dayIndex = {i}
                weekIndex = {this.props.week.weekIndex}
                key={i}/>;
            
            daysArray.push(day)
        }

        return (
            <div className="rota-content-wraper">
                <div className="rota">
                    <div className="rota-header">
                        <div className="week-commencing">Week Commencing: <span>{this.props.week.weekCommencing}</span></div>
                        <div className="">Total hours: <span>{this.props.week.weekHours}</span></div>
                    </div>
                    <div className="days">
                        {daysArray}
                    </div>
                </div>
            </div>
        )
    }
}