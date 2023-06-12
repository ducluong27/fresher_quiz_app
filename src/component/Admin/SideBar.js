import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaRegQuestionCircle, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import slidebarIcon from '../../assets/quiz-icon.png'
import sidebarBg from '../../assets/bg2.jpg';
import { Link } from 'react-router-dom';

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <img src={slidebarIcon} width="50px" className='slidebarHeaderIcon'/>
            <span className='header-title'>Quiz</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
            >
              Dashboard
              <Link to="/admins"/>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title={<span>Features</span>}
              suffix={<span className="badge yellow"></span>}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>Users management <Link to="/admins/manage-users"/> </MenuItem>
              <MenuItem>Quizs management</MenuItem>
              <MenuItem>Questions management</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaRegQuestionCircle />
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                Quiz
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  )
}

export default SideBar