import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import './../../../style/common.css';

class Swiper extends Component {
  
  render() {
    return (
      <div>
        <Card title="背景轮播">
          <Carousel autoplay effect="fade">
            <div><h3>React</h3></div>
            <div><h3>Vue</h3></div>
            <div><h3>Angular</h3></div>
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default Swiper;