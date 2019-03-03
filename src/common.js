import React, { Component } from 'react';
import { Row, Col, } from 'antd'
import ComNav from './components/ComNav';

class Common extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <ComNav />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Common;