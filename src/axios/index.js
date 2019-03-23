import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {

  static jsonp(options){
    return new Promise((resolve,reject)=>{
      JsonP( options.url,{
        param:'callback'
      },function (err,response){
        if(response.status === 'success'){
          resolve(response);
        }else{
          reject(response.message);
        }
      })
    })
  }

  static ajax(options){
    return new Promise((resolve,reject)=>{
      axios({
        url:options.url,
        method:'get',
        baseURL:'https://www.easy-mock.com/mock/5c7b35df3fa9c8787ed6dc85/mockapi',
        timeout:5000,
        params:(options.data && options.data.params) || '',
      }).then((response)=>{
        if(response.status === 200){
          let res = response.data;
          if(res.code === 0){
            resolve(res)
          }else{
            Modal.info({
              title:"提示",
              content:res.msg
            })
          }
        }else{
          reject(response.data)
        }
      })
    })
  }

  static download(params = {}){
    return new Promise((resolve,reject) => {
      axios.get(params.url,{
        params:params,
        responseType:"blob"
      }).then(res=>{
        const fileName = res.headers["content-disposition"]
        .split(";")[1]
        .split("=")[1]
        .split('"');
        // let url = window.URL.createObjectURL(new Blob([res.data]));
        let link = document.createElement('a');
        link.style.display = "none";
        link.setAttribute("download",fileName[1]);
        document.body.appendChild(link);
        link.click();
        resolve();
      }).catch(err=>{
        console.log(err);
        reject(err);
      })
    })
  }

}