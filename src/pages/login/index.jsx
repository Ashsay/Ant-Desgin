import React, { Component } from 'react';
import { Row, Col, } from 'antd';
import './index.css';
import LeftNav from './components/LeftNav';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Row className="wrapper">
          <Col span={7} className="wrapper_left">
            <LeftNav />
          </Col>
          <Col span={17} className="wrapper_right">
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;