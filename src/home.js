import React from 'react';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../src/App.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <img src={'./img/all.'} className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item
              onClick={this.props.irParaCadastro}
              key="1"
              icon={<PieChartOutlined />}
            >
              Cadastro
            </Menu.Item>
            <Menu.Item
              onClick={this.props.irParaCards}
              key="2"
              icon={<DesktopOutlined />}
            >
              Cards
            </Menu.Item>
            <Menu.Item
              onClick={this.props.irParaCarrinho}
              key="3"
              icon={<PieChartOutlined />}
            >
              Carrinho
            </Menu.Item>
            <Menu.Item
              onClick={this.props.irParaDetalhes}
              key="4"
              icon={<DesktopOutlined />}
            >
              Detalhes
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ textAlign: 'center', padding: 24, minHeight: 360 }}
            >
              <img src="./LogoAllFredo.png" alt="logo" width="100%" />

              <Button
                style={{ margin: '0 20px' }}
                type="primary"
                onClick={this.props.irParaCadastro}
              >
                {' '}
                💰 Seja um All<i>Fredo</i>{' '}
              </Button>
              {/* {console.log(this.props.irParaCadastro)} */}
              <Button type="primary" onClick={this.props.irParaCards}>
                {' '}
                👁️‍🗨️ Contratar um All<i>Fredo</i>{' '}
              </Button>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Carver</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
