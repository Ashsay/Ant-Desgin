import React, { Component } from 'react';
import { Card, Alert } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.css';

class Animation extends Component {
  render() {
    return (
      <div style={{minHeight:700}}>
        <QueueAnim delay={500} interval={500}>
          <div key='1'>
            <Card title="ant Motion 1">
              <Alert message="Motion" description="This is a motion page" type="info" />
            </Card>
          </div>
          <div key='2' className="cardView">
            <Card title="ant Motion 2">
              
            </Card>
          </div>
          <div key='3' className="cardView">
            <Card title="ant Motion 3">
              
            </Card>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

export default Animation;