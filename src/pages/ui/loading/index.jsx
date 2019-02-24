import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd'

class Loading extends Component {
  render() {

    const icon = <Icon type="loading" style={{fontSize:24}} />

    return (
      <div>
        <Card title="Loading">
          <Spin />
          <Spin size="small" />
          <Spin size="large" />
        </Card>
        <Card title="Modalloading">
          <Spin tip="Loading...">
            <Alert message="React" description="hELLO WORLD" type="info" />
          </Spin>
          <Spin indicator={icon}>
            <Alert message="React" description="hELLO WORLD" type="warning" />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loading;