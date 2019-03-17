import React, { Component } from 'react';
import { Card, Button, Table, Form, Select, Spin, Modal, } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;

class City extends Component {

  state = {
    list:[],
    isLoading:true,
    isShowOpenCity:false
  }

  params = {
    page:1
  }

  componentDidMount(){
    this.requireList()
  }

  requireList = () => {
    let _this = this;
    axios.ajax({
      url:'/open_city',
      data:{
        params:{
          page:this.params.page
        }
      }
    }).then((response) => {
      this.setState({
        list:response.result.item_list.map((item,index)=>{
          item.key = index;
          return item
        }),
        pagination:Utils.pagination(response,(current)=>{
          _this.params.page = current;
          _this.requireList()
        }),
        isLoading:false
      })
    })
  }

  handleSubmit = () => {
    let cityInfo = this.cityForm.props.form.getFieldsValue()
    console.log(cityInfo)
  }

  handleOpenCity = () => {
    this.setState({
      isShowOpenCity:true
    })
  }

  render() {

    const columns = [
      {
        title:'城市ID',
        dataIndex:'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode){
          return mode ===1 ?'停车点':'禁停区';
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode === 1 ? '自营' : '加盟';
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr){
          return arr.map((item)=>{
            return item.user_name;
          }).join(',');
        }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        render: Utils.formateDate
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]

    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{marginTop:20}}>
          <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <div>
          <Spin spinning={this.state.isLoading} tip="LOADING...">
            <Table
              bordered
              columns = {columns}
              dataSource = {this.state.list}
              pagination = {this.state.pagination}
            />
          </Spin>
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={()=>{
            this.setState({
              isShowOpenCity:false
            })
          }}
          onOk={this.handleSubmit}        
        >
          <OpenCityForm wrappedComponentRef={(inst)=>{
            this.cityForm = inst
          }} />
        </Modal>
      </div>
    );
  }
}

export default City;

class FilterForm extends React.Component{

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id',)(
              <Select
                style={{width:100}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select
                style={{ width: 120 }}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )
          }
          </FormItem>
          <FormItem label="营运模式">
            {
              getFieldDecorator('op_mode')(
                <Select
                  style={{ width: 80 }}
                  placeholder="全部"
                >
                  <Option value="">全部</Option>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="加盟商授权状态">
            {
              getFieldDecorator('auth_status')(
                <Select
                style={{ width: 100 }}
                placeholder="全部"
                >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends Component {
  render(){
    const formItemLayout = {
      labelCol:{
        span:5
      },
      wrapperCol:{
        span:5
      }
    }
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
        {
          getFieldDecorator('city_id',{
            
          })(
            <Select>
              <Option value="">全部</Option>
              <Option value="1">天津市</Option>
              <Option value="2">北京市</Option>
            </Select>
          )
        }
        </FormItem>
        <FormItem label="运营模式" {...formItemLayout}>
          {
            getFieldDecorator('op_mode',{
              
            })(
              <Select>
                <Option value="1">加盟</Option>
                <Option value="2">自营</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {
            getFieldDecorator('mode',{
              
            })(
              <Select>
                <Option value="1">指定停车</Option>
                <Option value="2">禁停区</Option>
              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

OpenCityForm = Form.create({})(OpenCityForm)