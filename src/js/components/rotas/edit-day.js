import React from 'react';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
//Components

export class EditDay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screenWidth: window.innerWidth
        };
        this.changeInnerWidth = window.addEventListener('resize', this.setInnerWidth);
    }

    setInnerWidth = () => {
      const newWidth = window.innerWidth;
      this.setState({screenWidth: newWidth});
    }

    componentDidMount() {
        let rotaDiv = document.getElementsByClassName('rota');
        let rotaDivInfo = rotaDiv[0].getBoundingClientRect();
        this.setState({rotaWidth: rotaDivInfo.width})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let breakLength = this.refs.newBreak.value;
        let shiftStart = this.refs.newShiftStart.value;
        let shiftEnd = this.refs.newShiftEnd.value;
        this.props.updateDay(breakLength, shiftStart, shiftEnd);
        this.props.closeEditDay();
    }

    render() {
        let left = (this.state.rotaWidth -180) /2;
        let style = {width: '0', height: '0', padding: '0'};

        if(this.props.display && this.state.screenWidth <= 680) {
            style = {width: '180px', height: 'auto', padding: '3px', left: `${left}px`}
            if(this.props.dayIndex == 6) {
                style = {width: '180px', height: 'auto', padding: '3px', left: `${left}px`, top: '-45px'}
            }
        } else if(this.props.display) {
            style = {width: '180px', height: 'auto', padding: '3px', left: 'unset'}
            if(this.props.dayIndex == 6) {
                style = {width: '180px', height: 'auto', padding: '3px', right: '0px'}
            }
        }
        return (
            <div className="edit-day" style={style}>
                <form onSubmit={this.handleSubmit}>
                    <FontAwesomeIcon icon={faTimes} className="remove" onClick={this.props.closeEditDay}/>
                    <label>Break:<input type="time" ref="newBreak" defaultValue="02:00"></input></label>
                    <label>Shift start:<input type="time" ref="newShiftStart" defaultValue="11:00"></input></label>
                    <label>Shift end:<input type="time" ref="newShiftEnd" defaultValue="18:00"></input></label>
                    <button type="submit" className="confirm">
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </form>
            </div>
        );
    }
}