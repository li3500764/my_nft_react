import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { FileOutlined, PieChartOutlined, UserOutlined,DesktopOutlined,TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Logo from "../../assets/logo.jpg"
import $http from '../../https/request'
import UserManger from "./usermanger/index"


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  
  const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    

    return (
        <MainIndex>
            <Layout
                style={{
                minHeight: '100vh',
                }}
            >
                
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo_div" >
                        <img  className="logo" src={Logo} alt="" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                    >
                        rest1

                    </Header>
                    <Content
                        style={{
                        margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                        >
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                            <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                }}
                            >
                                <UserManger/>
                            </div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center',
                        }}
                    >
                        此后台仅限BiTea社区使用！
                    </Footer>
                </Layout>
            </Layout>
        </MainIndex>
      
    );
  };
const MainIndex = styled.div`
    width: 100vw;
    height: 100vh;
     .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 0, 0, 0.989);
    }

    .site-layout .site-layout-background {
        background: #fff;
    }
`

export default Index;