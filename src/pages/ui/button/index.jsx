import React, { Component } from 'react';
import {Card,Button} from 'antd';
import "./index.css";

class ButtonPages extends Component {
  render() {
    return (
      <div>
        <Card title="BasicBTN">
          <Button type="primary">primary</Button>
          <Button>Click</Button>
          <Button type="dashed">dashed</Button>
          <Button type="damger">damger</Button>
          <Button disabled>disabled</Button>
        </Card>
        <Card title="TuxingBTN">
          <Button icon="plus">plus</Button>
          <Button icon="edit">edit</Button>
          <Button icon="delete">delete</Button>
          <Button icon="download">download</Button>
          <Button icon="search" shape="circle"></Button>
          <Button icon="search" type="primary">search</Button>
        </Card>
      </div>
    );
  }
}

export default ButtonPages;