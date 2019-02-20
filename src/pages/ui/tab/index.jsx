import React, { Component } from 'react';
import { Card, Button, message, Icon, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Tab extends Component {

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
      panes,
    })
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
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="plus" />email</span>} key='1'>email</TabPane>
            <TabPane tab="tab2" key='2' disabled>tab2</TabPane>
            <TabPane tab="tab3" key='3'>tab3</TabPane>
          </Tabs>
        </Card>
        <Card title="TabChange">
          <Tabs 
            defaultActiveKey = "1" 
            type = "editable-card"
            onChange = {this.onChange}
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