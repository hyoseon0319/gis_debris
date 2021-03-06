import React from 'react'
import { Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

function NavbarMenu(props) {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="2" icon={<DesktopOutlined />} onClick={()=>props.menuSelect("trackList")}>
        항적정보
      </Menu.Item>
      <Menu.Item key="3" icon={<DesktopOutlined />} onClick={()=>props.menuSelect("invList")}>
        조사사업
      </Menu.Item>
      <Menu.Item key="4" icon={<DesktopOutlined />} onClick={()=>props.menuSelect("marineZoneList")}>
        오염현황(해구)
      </Menu.Item>
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        통계정보
      </Menu.Item>
      {/* <SubMenu key="sub1" icon={<PieChartOutlined />} title="조사사업">
      <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      
      <SubMenu key="sub2" icon={<PieChartOutlined />} title="해구현황">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu> */}
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
    )
}

export default NavbarMenu
