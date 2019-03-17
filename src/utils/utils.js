import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default {

  formateDate(time){
    if(!time) return '';
    let date = new Date(time);
    return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  },
  
  pagination(data,callback){
    return {
      onChange:(current)=>{
        callback(current)
      },
      current:data.result.page,
      pageSize:data.result.page_size,
      total:data.result.total,
      showTotal:()=>{
        return `共${data.result.total}条`
      }
    }
  },

  getOptionList(data){
    if(!data){
      return []
    }
    // let option = [<Option value="0" key="all_key">全部</Option>];
    let option = [];
    data.map((item)=>{
      option.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return option
  }

}