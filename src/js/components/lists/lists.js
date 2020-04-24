import React from 'react';
import './lists.css';
//Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import { NewTabForm } from './new-tab-form';
import { List } from './list';
import { Note } from './note';
import { Tab } from '../nav/tab';

export class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    tabTitle: 'List0',
                    type: 'list',
                    list: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'rrr'],
                    showSettings: false
                },
                {
                    tabTitle: 'Note0',
                    type: 'note',
                    list: [],
                    showSettings: false
                }
            ],
            activeTab: 0,
            newTabForm: false,
        }
    }

    activateTab = (index) => {
        this.setState({
            activeTab: index
        })
    }

    showNewTabForm = () => {
        this.setState({newTabForm: true})
    }

    removeNewTabForm = () => {
        this.setState({newTabForm: false})
    }

    addTab = (name, type) => {
        let title = name;
        let newTab = {tabTitle: title, type: type, list: []}
        let tabs = this.state.tabs;
        tabs.push(newTab);
        this.setState({tabs: tabs});
    }

    addItem = (item) => {
        let tab = this.state.activeTab;
        const list = this.state.tabs[tab].list;
        list.unshift(item);
        let newState = this.state;
        newState.tabs[tab].list = list;
        this.setState(newState);
    }

    removeItem = (item) => {
        let tab = this.state.activeTab;
        let newList = this.state.tabs[tab].list.filter((val, index) => {
            return item !== index;
        });
        let newState = this.state;
        newState.tabs[tab].list = newList;
        this.setState(newState);
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

    openSettings = () => {
        let tab = this.state.activeTab;
        let newState =this.state;
        newState.tabs[tab].showSettings = true;
        this.setState(newState);
    }

    closeSettings = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].showSettings = false;
        this.setState(newState);
    }

    changeFont = (color, fontFamily) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].color = color;
        newState.tabs[tab].fontFamily = fontFamily;
        this.setState(newState);
        
    }
    
    changeFontWeight = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        let value = newState.tabs[tab].bold;
        newState.tabs[tab].bold = !value;
        this.setState(newState);        
    }
    
    changeFontStyle = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        let value = newState.tabs[tab].italic;
        newState.tabs[tab].italic = !value;
        this.setState(newState);  
    }

    changeTabTitle = (newTitle) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].tabTitle = newTitle;
        this.setState(newState);
    }

    render() {
        let tabs = this.state.tabs;
        let activeTab = this.state.activeTab;
        let showSettings = this.state.tabs[activeTab].showSettings;

        tabs = tabs.map((item, index) => {
            let active = false
            let type = this.state.tabs[index].type;

            if (index === this.state.activeTab) (
                active = true
            )

            return(
                <Tab activateTab={this.activateTab} active={active} index={index} type={type} tabTitle={this.state.tabs[index].tabTitle} key={index}/>
            );
        })

        let content = <List
                        openSettings={this.openSettings}
                        closeSettings={this.closeSettings}
                        removeItem={this.removeItem}
                        addItem={this.addItem}
                        removeTab={this.removeTab}
                        changeTabTitle={this.changeTabTitle}
                        title={this.state.tabs[activeTab].tabTitle}
                        items={this.state.tabs[activeTab].list}
                        showSettings={showSettings}/>;

        if (this.state.tabs[this.state.activeTab].type === 'note') {
            content = <Note
                        changeFont={this.changeFont}
                        changeFontWeight={this.changeFontWeight}
                        changeFontStyle={this.changeFontStyle}
                        openSettings={this.openSettings}
                        closeSettings={this.closeSettings}
                        removeTab={this.removeTab}
                        changeTabTitle={this.changeTabTitle}
                        title={this.state.tabs[activeTab].tabTitle}
                        bold={this.state.tabs[activeTab].bold}
                        italic={this.state.tabs[activeTab].italic}
                        color={this.state.tabs[activeTab].color}
                        fontFamily={this.state.tabs[activeTab].fontFamily}
                        showSettings={showSettings}
                        items={this.state.tabs[activeTab].list} />;
        }

        return (
            <div className="list-wraper">
                <div className="tabs-wraper">
                    <div className="tabs">
                        <ul>
                            {tabs}
                        </ul>
                    </div>
                    <FontAwesomeIcon
                        icon={faFolderPlus}
                        className="add-tab"
                        onClick={this.showNewTabForm}/>
                    <NewTabForm
                        addTab={this.addTab}
                        removeNewTabForm={this.removeNewTabForm}
                        display={this.state.newTabForm}/>
                </div>
                    {content}
            </div>
        )
    }
}