import React, { Component } from 'react';
import './index.css';

class BaiduMap extends Component {

  componentDidMount(){
    this.renderBaiduMap();
  }

  renderBaiduMap = () => {
    let BMap = window.BMap;
    let map = new BMap.Map('baiduMap');
    map.centerAndZoom(new BMap.Point(121.4,31.2), 10); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }

  render() {
    return (
      <div id="baiduMap"></div>
    );
  }
}

export default BaiduMap;