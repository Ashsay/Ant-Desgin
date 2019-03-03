import React, { Component } from 'react';
import { Card, Button, notification} from 'antd';

class Notify extends Component {

  openNotification = (type,direction) => {
    if(direction){
      notification.config({
        placement:direction
      })
    }
    notification[type]({
      message:'发工资了',
      description:'哈哈哈哈哈'
    })
  }

  render() {
    return (
      <div>
        <Card title="通知提醒">
          <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
          <Button type="ghost" onClick={()=>this.openNotification('info')}>Info</Button>
          <Button type="dashed" onClick={()=>this.openNotification('warning')}>Warning</Button>
          <Button type="danger" onClick={()=>this.openNotification('error')}>Error</Button>
        </Card>
        <Card title="通知方向">
          <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
          <Button type="ghost" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
          <Button type="dashed" onClick={()=>this.openNotification('warning','bottomLeft')}>Warning</Button>
          <Button type="danger" onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
        </Card>
      </div>
    );
  }
}

export default Notify;