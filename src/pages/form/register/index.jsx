import React, { Component } from 'react';
import {
  Card, Form, Input, Icon, Radio, InputNumber, Select, Switch, DatePicker, Upload, Checkbox, Button, TimePicker,
} from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends Component {

  state = {};

  handleSubmit = () => {
    this.props.form.validateFields((err,val)=>{
      console.log(JSON.stringify(val))
    })
  }

  //有后台不需要
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:6
      }
    }
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }

    const rowObject = {
      minRow:4, maxRow: 6
    }

    return (
      <div>
        <Card title="Register">
          <Form layout="horizontal">
            <FormItem label="用户名"  {...formItemLayout}>
              {
                getFieldDecorator('username',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:'用户名不能为空'
                  }]
                })(
                  <Input prefix={<Icon type="user" />} />
                )
              }
            </FormItem>
            <FormItem label="密码"  {...formItemLayout}>
              {
                getFieldDecorator('usrPwd',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:'请输入密码'
                  }]
                })(
                  <Input prefix={<Icon type="lock" />} type="password" />
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              { getFieldDecorator('sex',{

                })(
                  <RadioGroup>
                    <Radio value='man'>男</Radio>
                    <Radio value='male'>女</Radio>
                  </RadioGroup>
                )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              { getFieldDecorator('age',{
                initialValue:18
                })(
                  <InputNumber />
              )}
            </FormItem>
            <FormItem label="框架" {...formItemLayout}>
              {
                getFieldDecorator('frame',{
                  initialValue:['react'],
                })(
                  <Select mode="multiple">
                    <Option value="react">React</Option>
                    <Option value="vue">Vue</Option>
                    <Option value="angular">Angular</Option>
                    <Option value="jquery">jquery</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚"  {...formItemLayout}>
              {
                getFieldDecorator('isMarried',{
                  valuePropName:'checked',
                  initialValue:false
                })(
                  <Switch />
                )
              }
            </FormItem >
            <FormItem label="生日"  {...formItemLayout}>
              {
                getFieldDecorator('date',{
                  
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  /> 
                )
              }
            </FormItem>
            <FormItem label="详细地址"  {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue:'上海市环球港'
                })(
                  <TextArea autosize={rowObject} />
                )
              }
            </FormItem>
            <FormItem label="早期时间"  {...formItemLayout}>
              {
                getFieldDecorator('time',{

                })(
                  <TimePicker/> 
                )
              }
            </FormItem>
            <FormItem label="头像上传"  {...formItemLayout}>
              {
                getFieldDecorator('upload',{
                  rules:[{
                    required:true,
                    message:"请上传头像"
                  }]
                })(
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                  {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('notice',{
                  rules:[{
                    required:true,
                    message:'请阅读协议'
                  }]
                })(
                  <Checkbox>我已阅读过<a href="##">此</a>协议</Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('registerBtn',{
                  
                })(
                  <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register);