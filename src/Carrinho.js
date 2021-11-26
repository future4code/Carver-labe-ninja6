import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import '../src/App.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Carrinho extends React.Component {
  state = {
    collapsed: false,
  };

 componentDidUpdate() {
    this.props.getAllJobs()
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const carrinhoRenderizado = this.props.carrinho.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => this.props.deleteJob(item.id)}>remover item</button>
        </div>
      )
    })


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
              onClick={this.props.irParaHome}
              key="2"
              icon={<DesktopOutlined />}
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={this.props.irParaCards}
              key="3"
              icon={<PieChartOutlined />}
            >
              Cards
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
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div>
                <CaretDownOutlined />
                <ShoppingCartOutlined />
              </div>

                  {this.props.carrinho.length > 0 
                  ? 
                  <div>
                    {carrinhoRenderizado}
                  </div>
                  : 
                  <h3>Seu carrinho está vazio!</h3>}

              {/* <h3>Seu carrinho está vazio!</h3> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Carver</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Carrinho;
