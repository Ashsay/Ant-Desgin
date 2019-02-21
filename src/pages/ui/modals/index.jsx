import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

class Modals extends Component {

  state = {
    showModals1:false,
    showModals3:false,
    showModals4:false,
    showModals5:false,
  }

  handleOpen = (type) => {
    this.setState({
      [type]:true
    })
  }

  handleComfirm = (type) => {
    Modal[type]({
      title:"Sure?",
      content:"你确定了吗？",
      onOk(){
        console.log("ok")
      },
      onCancel(){
        console.log('cancel')
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="Static Modals">
          <Button type="primary" onClick={()=>this.handleOpen("showModals1")}>Open</Button>
          <Button type="primary" onClick={()=>this.handleOpen("showModals3")}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.handleOpen("showModals4")}>顶部20px</Button>
          <Button type="primary" onClick={()=>this.handleOpen("showModals5")}>水平垂直</Button>
        </Card>
        <Card title="Static Modals">
          <Button type="primary" onClick={()=>this.handleComfirm("confirm")}>Confirm</Button>
          <Button type="primary" onClick={()=>this.handleComfirm("info")}>Info</Button>
          <Button type="primary" onClick={()=>this.handleComfirm("success")}>Success</Button>
          <Button type="primary" onClick={()=>this.handleComfirm("warning")}>Warning</Button>
        </Card>
        <Modal title="React" visible={this.state.showModals1} onCancel={()=>{
          this.setState({
            showModals1:false
          })
        }}
        >
          This is a Modals
        </Modal>
        <Modal title="React" visible={this.state.showModals3} onCancel={()=>{
          this.setState({
            showModals3:false
          })
        }}
        >
          This is a Modals
        </Modal>
        <Modal title="React" visible={this.state.showModals4} onCancel={()=>{
          this.setState({
            showModals4:false
          })
        }}
        >
          This is a Modals
        </Modal>
        <Modal title="React" visible={this.state.showModals5} onCancel={()=>{
          this.setState({
            showModals5:false
          })
        }}
        >
          This is a Modals
        </Modal>
      </div>
    );
  }
}

export default Modals;
