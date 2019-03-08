import React, { Component } from 'react';
import { Row, Col, Avatar, Button, Form, Input, } from 'antd';
import './leftnav.css';
const FormItem = Form.Item;

class LeftNav extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:6
      },
      wrapperCol:{
        xs:24,
        sm:24
      }
    }
    return (
      <div>
        <Row>
          <Col span={24} className='lefttop'>
            <Avatar src='https://www.starbucks.com.cn/assets/images/logo.svg' size={"large"}/>
            <span style={{float:"right"}}>
              <Button icon="bars" size={"large"} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="form_center">
            <Form layout="vertical">
              <FormItem label="用户名" {...formItemLayout} >
                {
                  getFieldDecorator('userNameLogin',{
                    rules:[{
                      required:true,
                      message:'请输入用户名',
                    }]
                  })(
                    <Input placeholder="用户名" />
                  )
                }
              </FormItem>
              <FormItem label="密码" {...formItemLayout} >
                {
                  getFieldDecorator('pwdLogin',{
                    rules:[{
                      required:true,
                      message:'请输入密码',
                    }]
                  })(
                    <Input placeholder="密码" />
                  )
                }
              </FormItem>
              <Button type="primary">登入</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(LeftNav);