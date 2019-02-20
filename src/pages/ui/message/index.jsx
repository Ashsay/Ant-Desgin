import React, { Component } from 'react';
import { Button, Card, message } from 'antd';

class Message extends Component {

  showMessage = (type) => {
    message[type]("Hello World")
  }

  render() {
    return (
      <div>
        <Card title="Message">
          <Button type="primary" onClick={()=>this.showMessage("success")}>Success</Button>
          <Button type="primary" onClick={()=>this.showMessage("info")}>Info</Button>
          <Button type="primary" onClick={()=>this.showMessage("warning")}>Warning</Button>
          <Button type="primary" onClick={()=>this.showMessage("error")}>Error</Button>
          <Button type="primary" onClick={()=>this.showMessage("loading")}>Loading</Button>
        </Card>
      </div>
    );
  }
}

export default Message;