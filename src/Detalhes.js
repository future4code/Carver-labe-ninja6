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
// import Item from 'antd/lib/list/Item';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Detalhes extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // setDetails = () => {
  //   this.setState({titulo: this.props.detalhes.title})
  // }

  render() {
    // const detalhesRenderizado = this.props.detalhes.filter((card) => {
    //   return card.id
    // })
    // .map((card) => {
    //   return(<div>
    //     <h2>{card.title}</h2>
    //     <p>{card.price}</p>
    //     <p>{card.dueDate}</p>
    //     <p>{card.description}</p>
    //   </div>)
    // })

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
              onClick={this.props.irParaCarrinho}
              key="3"
              icon={<PieChartOutlined />}
            >
              Carrinho
            </Menu.Item>
            <Menu.Item
              onClick={this.props.irParaCards}
              key="4"
              icon={<DesktopOutlined />}
            >
              Cards
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
              style={{ padding: 24, minHeight: 360 }}
            >
              <div>
                <p>{this.props.titulo}</p>
                <p>{this.props.preco}</p>
                <p>{this.props.descricao}</p>
                <p>{this.props.metodos}</p>
                <p>{this.props.data}</p>
              </div>
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>Carver</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Detalhes;
