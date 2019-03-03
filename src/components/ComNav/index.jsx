import React, { Component } from 'react';
import { Row, } from 'antd';
import './index.css';

class ComNav extends Component {
  render() {
    return (
      <div className="comnav">
        <Row span={24}>
          <div className="comnav_img">
            <img src="https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super" alt=""/>
          </div>
        </Row>
      </div>
    );
  }
}

export default ComNav;