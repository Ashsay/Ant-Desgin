Antd 笔记

1. Button
type : primary  dashed   damager  
disabled
icon: plus edit download search 
shape: circle ...

2. Spin
size: small large ...
tip: String
<Spin><Component /></Spin>
indicator:{icon}
spinning:true false

3.Alert
message:String
description:String
type:info warning

4.Modal
title:String
visible:true false
onCancel:Function
Modal[type]({
  title:String,
  content:String,
  onOk(){
    do something
  },
  onCancel(){
    do something
  }
})

5.notification
notification.config({
  placement:direction
})
notification[type]({
  message:String,
  description:String
})

6.Tabs 
  defaultActiveKey  onChange  type
TabPane
  tab  key  disabled  activeKey  onChange  onEdit

7.Form
  layout
Form.Item
  label  formItemLayout

const {getFieldDecorator} = this.props.form

this.props.form.validateFields

this.props.form.getFieldsValue

this.props.filterSubmit(fieldsValue)

{
  getFieldDecorator('name',{
    initialValue:'',
    rules:[{
      required:true,
      message:''
    }]
  })(
    
  )
}

export default Form.create()(Register);
