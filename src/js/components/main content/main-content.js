import React from 'react';
//Components
import {Rotas} from '../rotas/rotas';
import {Lists} from '../lists/lists';
import {Calendar} from '../calendar/calendar';

export class MainContent extends React.Component {
    render() {
        let tabs = this.props.tabs;
        let activeTab = this.props.activeTab;
        let activeTabTitle = tabs[activeTab].tabTitle;
        let tab = '';

        switch(activeTabTitle) {
            case 'Rotas':
                tab = <Rotas/>
                break
            case 'Lists':
                tab = <Lists/>
                break
            case 'Calendar':
                tab = <Calendar/>
                break
        }

        return (
            <div className="main-content">
                {tab}
            </div>
        )
    }
}