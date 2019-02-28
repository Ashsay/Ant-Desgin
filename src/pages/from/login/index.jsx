import React, { Component } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  
  handleSubmit = () => {
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`${values.username} Success`)
      }
    })
  }
  
  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="Login">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="username" />
            </FormItem>
            <FormItem>
              <Input placeholder="password" />
            </FormItem>
            <FormItem>
              <Button type="primary">登入</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="Login-Line" style={{marginTop:20}}>
          <Form style={{width:300}}>
            <FormItem>
              {
                getFieldDecorator('username',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:"用户名不能为空"
                  }]
                })(
                  <Input placeholder="username" />
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('usrPwd',{
                  initialValue:'',
                  rules:[]
                })(
                  <Input type="password" placeholder="password" />
                )
              }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登入</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);