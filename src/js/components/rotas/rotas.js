import React from 'react';
import './rotas.css';
import { v4 as uuidv4 } from 'uuid';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import { NewTabForm } from './new-tab-form';
import { Tab } from '../nav/tab';
import { RotaContent } from './rota-content';

export class Rotas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            newTabForm: false,
            tabs: [
                {
                    tabTitle: 'My Rota',
                    showSettings: false,
                    rotaView: 0,
                    id: 1,
                    weeks: [
                        {
                            weekCommencing: '',
                            weekHours: 0,
                            weekIndex: 0,
                            days: [
                                {
                                    dayName: 'Monday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Tuesday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Wednesday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Thursday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Friday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Saturday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Sunday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                            ],
                        },
                        {
                            weekCommencing: '',
                            weekHours: 0,
                            weekIndex: 1,
                            days: [
                                {
                                    dayName: 'Monday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Tuesday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Wednesday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Thursday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Friday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Saturday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                                {
                                    dayName: 'Sunday',
                                    breakLength: '00:00',
                                    shiftStart: '00:00',
                                    shiftEnd: '00:00',
                                    dayHours: '0',
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    }
/*
    getData() {
        fetch('http://192.168.1.168/database/organizer/rotas/rotas.json')
            .then(response => response.json())
            .then(data => {
                this.setState({tabs: data });
        })
            .catch(err => console.error(this.props.url, err.toString()))
    }
*/
    componentDidMount() {
        //this.getData();
        let tab = this.state.activeTab;
        let thisWeek = this.getWeekCommencing('monday', -7);
        let nextWeek = this.getWeekCommencing('monday', 7);
        let newState = this.state;
        newState.tabs[tab].weeks[0].weekCommencing = thisWeek;
        newState.tabs[tab].weeks[1].weekCommencing = nextWeek;    
        this.setState({newState});
    }

    getWeekCommencing = (dayName, week, excludeToday = true, refDate = new Date()) => {
        const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"].indexOf(dayName.slice(0,3).toLowerCase());
        if (dayOfWeek < 0) return;
        refDate.setHours(0,0,0,0);
        refDate.setDate(refDate.getDate() + !!excludeToday + (dayOfWeek + week - refDate.getDay() - !!excludeToday) % 7);

        let day = refDate.getDate();
        let month = refDate.getMonth() + 1;
        let year = refDate.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    updateDay = (breakLength, shiftStart, shiftEnd, dayIndex, weekIndex) => {        
        let start = `01 Jan 1970 ${shiftStart}:00`;
        let end = `01 Jan 1970 ${shiftEnd}:00`;
        let breakStart = `01 Jan 1970 00:00:00`;
        let breakEnd = `01 Jan 1970 ${breakLength}:00`;

        start = Date.parse(start);
        end = Date.parse(end);
        breakStart = Date.parse(breakStart);
        breakEnd = Date.parse(breakEnd);

        let newBreakLength = breakEnd - breakStart;
        let workingMs = end - start - newBreakLength;
        let dayHours = workingMs /1000/60/60;

        let tab = this.state.activeTab;
        let state = this.state;
        state.tabs[tab].weeks[weekIndex].days[dayIndex].breakLength = breakLength;
        state.tabs[tab].weeks[weekIndex].days[dayIndex].shiftStart = shiftStart;
        state.tabs[tab].weeks[weekIndex].days[dayIndex].shiftEnd = shiftEnd;
        state.tabs[tab].weeks[weekIndex].days[dayIndex].dayHours = dayHours.toFixed(2);
        
        let newState = this.updateWeekHours(state, weekIndex)

        this.setState({newState});
    }

    updateWeekHours = (newState, weekIndex) => {
        let tab = this.state.activeTab;
        let arr = newState.tabs[tab].weeks[weekIndex].days
        let weekHours = 0;

        for (let i in arr) {
            let dayHours = parseFloat(arr[i].dayHours)
            weekHours+= dayHours;
        }
        newState.tabs[tab].weeks[weekIndex].weekHours = weekHours.toFixed(2);
        
        return newState
    }

    activateTab = (index) => {
        this.setState({
            activeTab: index
        })
    }

    toggleNewTabForm = () => {
        this.setState({newTabForm: !this.state.newTabForm})
    }

    addTab = (tabTitle) => {
        let thisWeek = this.getWeekCommencing('monday', -7, true);
        let nextWeek = this.getWeekCommencing('monday', 7, true);
        const newTab = {
            tabTitle: tabTitle,
            showSettings: false,
            rotaView: 0,
            id: uuidv4(),
            weeks: [
                {
                    weekCommencing: thisWeek,
                    weekHours: 0,
                    weekIndex: 0,
                    days: [
                        {
                            dayName: 'Monday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Tuesday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Wednesday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Thursday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Friday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Saturday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Sunday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                    ],
                },
                {
                    weekCommencing: nextWeek,
                    weekHours: 0,
                    weekIndex: 1,
                    days: [
                        {
                            dayName: 'Monday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Tuesday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Wednesday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Thursday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Friday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Saturday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                        {
                            dayName: 'Sunday',
                            breakLength: '00:00',
                            shiftStart: '00:00',
                            shiftEnd: '00:00',
                            dayHours: '0',
                        },
                    ],
                },
            ],
        }

        let newTabs =  this.state.tabs;
        newTabs.push(newTab);
        let newActiveTab = newTabs.length -1;
        this.setState({activeTab: newActiveTab, tabs: newTabs})
        

        /*
        let thisWeek = this.getWeekCommencing('monday', -7, true);
        let nextWeek = this.getWeekCommencing('monday', 7, true);
        fetch('http://192.168.1.168/database/organizer/rotas/new-rota-tab.json')
            .then(response => response.json())
            .then(data => {
                data.tabTitle = tabTitle;
                data.weeks[0].weekCommencing = thisWeek;
                data.weeks[1].weekCommencing = nextWeek;
                let newTabs =  this.state.tabs;
                newTabs.push(data);
                let newActiveTab = newTabs.length -1;
                this.setState({activeTab: newActiveTab, tabs: newTabs})
        })
            .catch(err => console.error(this.props.url, err.toString()))
        */
    }

    removeTab = () => {
        if (this.state.tabs.length === 1) {
            alert("You can't remove this tab. Please add new tab before removing this one")
            return
        }
        const tabsLength = this.state.tabs.length - 1;
        let tab = this.state.activeTab;
        let newTabs = this.state.tabs.filter((val, index) => {
            return tab !== index;
        });

        let activeTab = tab;
        if(tab === tabsLength) {
            activeTab = tab -1;
        }

        this.setState({
            tabs: newTabs,
            activeTab: activeTab
        });
    }

    toggleShowSettings = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].showSettings = !newState.tabs[tab].showSettings;
        this.setState(newState);
    }

    changeTabTitle = (newTitle) => {
        let tab = this.state.activeTab;
        let newState =  this.state;
        newState.tabs[tab].tabTitle = newTitle;
        this.setState(newState);
    }

    changeView = (value) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].rotaView = value;
        this.setState(newState);
    }

    render() {
        let tabs = this.state.tabs;
        let activeTab = this.state.activeTab;
        let showSettings = this.state.tabs[activeTab].showSettings;

        tabs = tabs.map((item, index) => {
            let active = false

            if (index === this.state.activeTab) (
                active = true
            )

            return(
                <Tab activateTab = {this.activateTab} active={active} index={index} tabTitle={this.state.tabs[index].tabTitle} key={index}/>
            );
        })

        return (
            <div className="rota-wraper">
                <div className="tabs-wraper">
                    <div className="tabs">
                        <ul>
                            {tabs}
                        </ul>
                    </div>
                    <FontAwesomeIcon
                        icon = {faFolderPlus}
                        className = "add-tab"
                        onClick = {this.toggleNewTabForm}/>
                    <NewTabForm
                        addTab = {this.addTab}
                        toggleNewTabForm = {this.toggleNewTabForm}
                        display = {this.state.newTabForm}/>
                </div>
                <RotaContent
                    updateDay = {this.updateDay}
                    toggleShowSettings = {this.toggleShowSettings}
                    removeTab = {this.removeTab}
                    changeTabTitle = {this.changeTabTitle}
                    changeView = {this.changeView}
                    tabTitle = {this.state.tabs[activeTab].tabTitle}
                    rotaView = {this.state.tabs[activeTab].rotaView}
                    weeks = {this.state.tabs[activeTab].weeks && this.state.tabs[activeTab].weeks}
                    showSettings = {showSettings}
                    id = {this.state.tabs[activeTab].id}/>
            </div>
        )
    }
}