import React, { Component } from 'react';
import { Form, Select, Checkbox, Input, Button, DatePicker, } from 'antd';
import utils from '../../utils/utils';
const FormItem = Form.Item;

class BaseForm extends Component {

  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }

  reset = ()=>{
    this.props.form.resetFields();
  }

  initFormList = () => {
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];
    if(formList && formList.length > 0){
      formList.forEach((item,i) => {
        let label = item.label;
        let field = item.field;
        let initValue = item.initialValue || '';
        let placeholder = item.placeholder;
        let width = item.width;
        if(item.type === 'INPUT'){
          const INPUT = <FormItem label={label} key={field}>
          {
            getFieldDecorator([field],{
              initialValue:initValue
            })(
              <Input type='text' placeholder={placeholder} />
            )
          }
          </FormItem>
          formItemList.push(INPUT)
        }else if(item.type === 'SELECT'){
          const SELECT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                initialValue: initValue
              })(
                <Select style={{ width: width }} placeholder={placeholder}>
                  {utils.getOptionList(item.list)}
                </Select>
              )
            }
          </FormItem>;
          formItemList.push(SELECT);
        }else if(item.type === 'CHECKBOX'){
          const CHECKBOX = <FormItem label={label} key={field}>
          {
            getFieldDecorator([field],{
              initialValue:initValue,
              valuePropName:'checked'
            })(
              <Checkbox>
                {label}
              </Checkbox>
            )
          }
          </FormItem>
          formItemList.push(CHECKBOX)
        }else if(item.type === '时间查询'){
          const begin_time = <FormItem label="订单时间" key="startTimer">
            {
              getFieldDecorator('begin_time')(
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>;
          formItemList.push(begin_time)
          const end_time = <FormItem label="~" colon={false} key="endTimer">
          {
            getFieldDecorator('end_time')(
              <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
            )
          }
          </FormItem>;
          formItemList.push(end_time)
        }
      })
    }
    return formItemList;
  }

  formList = []

  render() {
    return (
      <Form layout='inline'>
        { this.initFormList() }
        <FormItem>
          <Button type='primary' style={{margin:'0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
          <Button type='primary' onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create({})(BaseForm)