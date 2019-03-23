import React, { Component } from 'react';
import { Card } from 'antd';

// 按需加载
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import echartTheme from './../echartTheme';
import ReactEcharts from 'echarts-for-react';

class Bar extends Component {

  componentWillMount(){
    echarts.registerTheme('theme',echartTheme);
  }

  getOptionPor = () => {
    var option = {
      title:{
        text:'Echarts'
      },
      tooltip:{
        trigger:'axis'
      },
      legend:{
        data:['OFO','摩拜','小蓝']
      },
      xAxis:{
        data:['周一','周二','周三','周四','周无','周六','周日',]
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO',
          type:'bar',
          data:[1000,2000,1500,300,2000,1200,800]
        },        {
          name:'摩拜',
          type:'bar',
          data:[10000,200,150,3000,2000,1200,80]
        },        {
          name:'小蓝',
          type:'bar',
          data:[100,200,1500,4000,2000,120,80]
        },
      ]
    }
    return option;
  }

  getOption = () => {
    var option = {
      title:{
        text:'Echarts'
      },
      tooltip:{
        trigger:'axis'
      },
      xAxis:{
        data:['周一','周二','周三','周四','周无','周六','周日',]
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'订单量',
          type:'bar',
          data:[1000,2000,1500,3000,2000,1200,800]
          }
        ]
      }
      return option;
    }

  render() {
    return (
      <div>
        <Card title='柱形图表 1'>
          <ReactEcharts option={this.getOption()} theme='theme' style={{height:500}} />
        </Card>
        <Card title='柱形图表 2' style={{marginTop:10}}>
          <ReactEcharts option={this.getOptionPor()} theme='theme' style={{height:500}} />
        </Card>
      </div>
    );
  }
}

export default Bar;