import React, { Component } from 'react';
import { Card, Spin, Alert, Icon, Table, } from 'antd';

class Demo extends Component {

  state = {
    isSpin:true,
    dataSource:[]
  }
  componentDidMount(){
    this.runSpin();
    const dataSource = [
      {
        id:0,
        game:"鬼泣",
        gameType:"动作"
      }, {
        id:1,
        game:"FF15",
        gameType:"动作"
      }
    ]
    this.setState({
      dataSource
    })
  }

  runSpin = () => {
    setInterval(()=>{
      this.setState({
        isSpin:false
      })
    },3000)
  }

  render() {

    const icon = <Icon type="loading" style={{fontSize:24}} />

    const columns = [
      {
        title:"序号",
        dataIndex:'id'
      },{
        title:"游戏名",
        dataIndex:"game"
      },{
        title:"游戏类型",
        dataIndex:"gameType"
      }
    ]

    return (
      <div>
        <Card title="loadingTest">
          <Spin tip="loading" indicator={icon} spinning={this.state.isSpin}>
            <Alert message="Ant Desgin" description="This is a Alert components" />
          </Spin>
        </Card>
        <Card title="BasicTable">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
          />
        </Card>
      </div>
    );
  }
}

export default Demo;