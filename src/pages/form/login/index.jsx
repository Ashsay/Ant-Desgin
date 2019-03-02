import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  
  handleSubmit = () => {
    this.props.form.validateFields((err,values)=>{
      console.log(values);
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
                  initialValue:'123',
                  rules:[{
                    required:true,
                    message:"用户名不能为空"
                  },{
                    min:5,max:10,
                    message:'长度不在范围内'
                  },{
                    pattern:new RegExp('^\\w+$','g'),
                    message:'必须为英文或数字'
                  }]
                })(
                  <Input prefix={<Icon type='user' />} placeholder="username" />
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('usrPwd',{
                  initialValue:'',
                  rules:[]
                })(
                  <Input prefix={<Icon type="lock" />} type="password" placeholder="password" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('checkbox',{
                  valuePropName:'checked',
                  initialValue:true
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="##" style={{float:"right"}}>忘记密码</a>
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