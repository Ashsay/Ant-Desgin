import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';

import {increment} from './../../../saga/actions/count';

class ReduxSaga extends Component {
  
  render() {
    return (
      <div>
        <Card title="ToDoList-Count">
          <div style={{fontWeight:700}}>
            { this.props.counter }
          </div>
          <Button type='primary' onClick={this.props.increment}>PLUS</Button>
          <Button type='primary'>Async</Button>
        </Card>
      </div>
    );
  }
}

const mapStateToProps=(state,props)=>{
  return {
    counter:state.count
  }
}

export default connect(mapStateToProps,{increment})(ReduxSaga)