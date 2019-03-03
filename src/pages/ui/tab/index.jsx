import React, { Component } from 'react';
import { Card, message, Icon, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Tab extends Component {

  newTabIndex = 0;

  callBack = (key) => {
    message.info(`This is a ${key}`)
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  componentWillMount(){
    const panes = [
      {
        title:'Tab 1',
        content:'Tab1',
        key:'1'
      },{
        title:'Tab 2',
        content:'Tab2',
        key:'2'
      },{
        title:'Tab 3',
        content:'Tab3',
        key:'3'
      }
    ];
    this.setState({
      activeKey:panes[0].key,
      panes,
    })
  }

  onEdit = (targetKey,action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `New Tab ${this.newTabIndex}`, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div>
        <Card title="TabBase">
          <Tabs defaultActiveKey="1" onChange={this.callBack}>
            <TabPane tab="tab1" key='1'>email</TabPane>
            <TabPane tab="tab2" key='2'>tab2</TabPane>
            <TabPane tab="tab3" key='3'>tab3</TabPane>
          </Tabs>
        </Card>
        <Card title="TabPic">
          <Tabs defaultActiveKey="2">
            <TabPane tab={<span><Icon type="plus" />email</span>} key='1'></TabPane>
            <TabPane tab="tab2" key='2' disabled>tab2</TabPane>
            <TabPane tab="tab3" key='3'>tab3</TabPane>
          </Tabs>
        </Card>
        <Card title="TabChange">
          <Tabs 
            activeKey = {this.state.activeKey}
            type = "editable-card"
            onChange = {this.onChange}
            onEdit = {this.onEdit}
          >
            {
              this.state.panes.map((panel)=>{
                return <TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Tab;