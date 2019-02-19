import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

import MenuConfig from './../../config/menuConfig';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class NavLeft extends Component {

  componentWillMount(){
    const menuTreeNode = this.renderMenu( MenuConfig );
    this.setState({
      menuTreeNode,
    })
  }

  //Menu 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu key={item.key} title={item.title}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src="/asset/logo.svg" alt=""/>
          <h1>CMS</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}

NavLeft.propTypes = {

};

export default NavLeft;