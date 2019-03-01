import React, { Component } from 'react';
import { Card, Spin, Alert, Icon } from 'antd';

class Demo extends Component {

  state = {
    isSpin:true
  }

  componentDidMount(){
    this.runSpin();
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
    return (
      <div>
        <Card title="loadingTest">
          <Spin tip="loading" indicator={icon} spinning={this.state.isSpin}>
            <Alert message="Ant Desgin" description="This is a Alert components" />
          </Spin>
        </Card>
        <Card>
          
        </Card>
      </div>
    );
  }
}

export default Demo;