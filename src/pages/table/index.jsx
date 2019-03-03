import React, { Component } from 'react';
import { Card, Table, Spin } from 'antd';
import axios from './../../axios';

class TableBasic extends Component {

  state={
    dataSource2:[],
    isSpinning:false
  }

  componentDidMount(){
    const dataSource = [
      {
        id:'0',
        userName:'Alex',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1997-01-01',
        address:"上海环球港",
        time:'09:00'
      },{
        id:'1',
        userName:'Alex',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1997-01-01',
        address:"上海环球港",
        time:'09:00'
      },{
        id:'2',
        userName:'Alex',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1997-01-01',
        address:"上海环球港",
        time:'09:00'
      },
    ]
    this.setState({
      dataSource
    })
    this.request();
  }

  request = () => {
    this.setState({
      isSpinning:true
    })
    axios.ajax({
      url:'/tablelist',
      data:{
        params:{
          page:1
        }
      }
    }).then((res)=>{
      console.log(res);
      if(res.code == 0){
        this.setState({
          dataSource2:res.result,
          isSpinning:false
        })
      }
    })
  }

  render() {

    const columns = [{
      title:'id',
      dataIndex:'id'
    },{
      title:'用户名',
      dataIndex:'userName'
    },{
      title:'性别',
      dataIndex:'sex',
      render(sex){
        return sex == 1 ? '男' : "女"
      }
    },{
      title:'框架',
      dataIndex:'state',
      render(frame){
        let config = {
          '1':"Vue",
          '2':"React",
          '3':"Angular"
        }
        return config[frame]
      }
    },{
      title:'爱好',
      dataIndex:'interest'
    },{
      title:'生日',
      dataIndex:'birthday'
    },{
      title:'地址',
      dataIndex:'address'
    },{
      title:'早期时间',
      dataIndex:'time'
    }]

    return (
      <div>
        <Card title="basicTable">
          <Table 
          columns={columns} 
          dataSource={this.state.dataSource}
          bordered
          pagination={false}
          />
        </Card>
        <Card title="seniorTable">
          <Spin spinning={this.state.isSpinning}>
            <Table 
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default TableBasic;