import React from 'react';
//Components
import { Rotas } from '../rotas/rotas';
import { Lists } from '../lists/lists';
import { Calendar } from '../calendar/calendar';

export class MainContent extends React.Component {
    render() {
        let tabs = this.props.tabs;
        let activeTab = this.props.activeTab;
        let activeTabTitle = tabs[activeTab].tabTitle;
        let tabContent = '';

        switch(activeTabTitle) {
            case 'Rotas':
                tabContent = <Rotas/>
                break
            case 'Lists':
                tabContent = <Lists/>
                break
            case 'Calendar':
                tabContent = <Calendar/>
                break
        }

        return (
            <div className="main-content">
                {tabContent}
            </div>
        )
    }
}