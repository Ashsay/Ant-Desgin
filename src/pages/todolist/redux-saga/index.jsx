import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

class ReduxSaga extends Component {
  render() {
    return (
      <div>
        <Card title="ToDoList-Count">

        </Card>
      </div>
    );
  }
}

const mapStateToProps=(state,props)=>{
  return {
    
  }
}

const mapDispatchToProps=(dispatch,props)=>{
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga)