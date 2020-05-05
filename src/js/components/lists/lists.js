import React from 'react';
import './lists.css';
import { v4 as uuidv4 } from 'uuid';
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
                    showSettings: false,
                    id: 1
                },
                {
                    tabTitle: 'Note0',
                    type: 'note',
                    note: 'dfgdfg',
                    showSettings: false,
                    isFontWeightBold: false,
                    isFontStyleItalic: false,
                    fontColor: 'red',
                    fontFamily: 'roboto',
                    id: 2
                },
                {
                    tabTitle: 'Note1',
                    type: 'note',
                    note: 'dg',
                    showSettings: false,
                    isFontWeightBold: false,
                    isFontStyleItalic: false,
                    fontColor: 'black',
                    fontFamily: 'unset',
                    id: 3
                }
            ],
            activeTab: 1,
            newTabForm: false,
        }
    }

    activateTab = (index) => {
        this.setState({
            activeTab: index
        })
    }

    toggleNewTabForm = () => {
        this.setState({newTabForm: !this.state.newTabForm})
    }

    addTab = (tabTitle, type) => {
        let newTab = type === 'list' ? 
            {tabTitle, type, list: [], id: uuidv4()} :
            {tabTitle, type, note: '', showSettings: false, isFontWeightBold: false, isFontStyleItalic: false, fontColor: 'black', fontFamily: 'unset', id: uuidv4()}
        let tabs = this.state.tabs;
        tabs.push(newTab);
        this.setState({tabs: tabs});
    }

    addListItem = (item) => {
        let tab = this.state.activeTab;
        const list = this.state.tabs[tab].list;
        list.unshift(item);
        let newState = this.state;
        newState.tabs[tab].list = list;
        this.setState(newState);
    }

    updateNote = (value) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].note = value;
        this.setState(newState);
    }

    removeListItem = (item) => {
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

        let activeTab = tab !== tabsLength ? tab : tab -1;

        this.setState({
            tabs: newTabs,
            activeTab: activeTab
        });
    }

    toggleShowSettings = () => {
        let tab = this.state.activeTab;
        let newState =this.state;
        newState.tabs[tab].showSettings = !newState.tabs[tab].showSettings;
        this.setState(newState);
    }

    changeFontColor = (color) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].fontColor = color;
        this.setState(newState);        
    }

    changeFontFamily = (fontFamily) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].fontFamily = fontFamily;
        this.setState(newState);        
    }
    
    changeFontWeight = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].isFontWeightBold = !newState.tabs[tab].isFontWeightBold;
        this.setState(newState);        
    }
    
    changeFontStyle = () => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].isFontStyleItalic = !newState.tabs[tab].isFontStyleItalic;
        this.setState(newState);  
    }

    changeTabTitle = (newTitle) => {
        let tab = this.state.activeTab;
        let newState = this.state;
        newState.tabs[tab].tabTitle = newTitle;
        this.setState(newState);
    }

    render() {
        let {tabs} = this.state;
        let {activeTab} = this.state;

        let tabsArr = tabs.map((item, index) => {
            let active = index === activeTab ? true : false;

            return(
                <Tab activateTab={this.activateTab} active={active} index={index} tabTitle={tabs[index].tabTitle} key={index}/>
            );
        })

        let content = tabs[activeTab].type === 'note' ? 
            <Note
                updateNote={this.updateNote}
                changeFontColor={this.changeFontColor}
                changeFontFamily={this.changeFontFamily}
                changeFontWeight={this.changeFontWeight}
                changeFontStyle={this.changeFontStyle}
                toggleShowSettings={this.toggleShowSettings}
                removeTab={this.removeTab}
                changeTabTitle={this.changeTabTitle}
                tabTitle={tabs[activeTab].tabTitle}
                isFontWeightBold={tabs[activeTab].isFontWeightBold}
                isFontStyleItalic={tabs[activeTab].isFontStyleItalic}
                fontColor={tabs[activeTab].fontColor}
                fontFamily={tabs[activeTab].fontFamily}
                note={tabs[activeTab].note}
                showSettings={tabs[activeTab].showSettings}
                id={tabs[activeTab].id} /> :
            <List
                toggleShowSettings={this.toggleShowSettings}
                removeListItem={this.removeListItem}
                addListItem={this.addListItem}
                removeTab={this.removeTab}
                changeTabTitle={this.changeTabTitle}
                tabTitle={tabs[activeTab].tabTitle}
                items={tabs[activeTab].list}
                showSettings={this.state.tabs[activeTab].showSettings}
                id={this.state.tabs[activeTab].id} />

        return (
            <div className="list-wraper">
                <div className="tabs-wraper">
                    <div className="tabs">
                        <ul>
                            {tabsArr}
                        </ul>
                    </div>
                    <FontAwesomeIcon
                        icon={faFolderPlus}
                        className="add-tab"
                        onClick={this.toggleNewTabForm}/>
                    <NewTabForm
                        addTab={this.addTab}
                        toggleNewTabForm={this.toggleNewTabForm}
                        display={this.state.newTabForm}/>
                </div>
                {content}
            </div>
        )
    }
}