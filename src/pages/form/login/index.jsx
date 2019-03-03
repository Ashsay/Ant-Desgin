import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox, Spin } from 'antd';
const FormItem = Form.Item;

class Login extends Component {

  state={
    isSpin:false
  }
  
  handleSubmit = () => {
    this.props.form.validateFields((err,values)=>{
      if(!err){
        this.setState({
          isSpin:true
        })
        message.success(`${values.username} Success`)
      }
    })
  }
  
  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="Login">
          <Spin spinning={this.state.isSpin}>
            <Form layout="inline">
              <FormItem>
                <Input placeholder="username" />
              </FormItem>
              <FormItem>
                <Input placeholder="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleForm}>登入</Button>
              </FormItem>
            </Form>
          </Spin>
        </Card>
        <Card title="Login-Line" style={{marginTop:20}}>
          <Spin spinning={this.state.isSpin}>
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
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);