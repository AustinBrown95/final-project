/* src/Nav.js */
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, ProfileOutlined, FileProtectOutlined } from
         '@ant-design/icons'

const Nav = (props) => {
  const { current } = props
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key='Page1'>
          <Link to={`/Page1`}>
            <HomeOutlined />Page 1
          </Link>
        </Menu.Item>
        <Menu.Item key='Page2'>
          <Link to='/Page2'>
          <ProfileOutlined />Page 2
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Nav