import React from "react";      
import { Button } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../src/App.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <img src={"./img/all."} className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              
            <Menu.Item  onClick={this.props.irParaCadastro}  key="1" icon={<PieChartOutlined />}>
             Cadastro
            </Menu.Item>
            <Menu.Item onClick={this.props.irParaCards} key="2" icon={<DesktopOutlined />}>
             Cards
            </Menu.Item>
            <Menu.Item  onClick={this.props.irParaCarrinho}  key="3" icon={<PieChartOutlined />}>
             Carrinho
            </Menu.Item>
            <Menu.Item onClick={this.props.irParaDetalhes} key="4" icon={<DesktopOutlined />}>
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
          <Header className="site-layout-background" style={{ padding: 0 }} >
        
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            
            <img src='./LogoAllFredo.png' alt='logo' width="100%"/>
            <Button type="primary">💰 Seja um All<i>Fredo</i></Button>
            <Button type="primary">👁️‍🗨️ Contratar um All<i>Fredo</i></Button>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
} export default Home

// state = {
//   servicos: [],
//   carrinho: [],

//   pesquisa: "",
//   precoMax: "",
//   precoMin: "",
  
//   formNome: "",
//   formDescricao: "",
//   formPreco: "",
//   formMetodo: [],
//   formData: "",

//   carrinhoTotal: "",
// }


//              App funções || ### = nomeclatura

// onChange### = (event) => {
//   setState({###: event.target.value})
// }


//              API funções || ### = nomeclatura

// getAllJobs = () => {
//   const url = `https://labeninjas.herokuapp.com/jobs`
//   axios.get( url, {
//     headers: { Authorization: " ### " }
//   }).then((resp) => {
//     console.log(" ### ")
//   }).catch((error) => {
//     console.log(" ### ")
//   })
// }

// getJobById = (id) => {
//   const url = `https://labeninjas.herokuapp.com/jobs/${id}`
//   axios.get( url, {
//     headers: { Authorization: " ### "}
//   }).then((resp) => {
//     console.log(" ### ")
//   }).catch((error) => {
//     console.log(" ### ")
//   })
// }

// createJob = () => {
//   const url = `https://labeninjas.herokuapp.com/jobs`
//   let body = 
//   {
//     "title":" ## this.state.formNome ## ",
//     "description":" ## this.state.formDescricao ## ",
//     "price":"## this.state.formPreco ##",
//     "paymentMethods":"## this.state.formMetodo ##", // body diferente, olhar API
//     "dueDate":"## this.state.formData ## " // body diferente, olhar API
//   }
//   axios.post( url, body, {
//     headers: { Authorization: "###" }
//   }).then((resp) => {
//     console.log(" ### ")
//   }).catch((error) => {
//     console.log(" ### ")
//   })
// }

//   deleteJob = (id) => {
//     const url = `https://labeninjas.herokuapp.com/jobs/${id}`
//     axios.delete( url, {
//       headers: { Authorization: "###" }
//     }).then((resp) => {
//       console.log(" ### ")
//     }).catch((error) => {
//       console.log(" ### ")
//     })
//   }

//   updateJob = (id) => {
//     const url = `https://labeninjas.herokuapp.com/jobs/${id}`
//     let body = 
//     {
//       "taken":true
//     }
//     axios.post( url, body, {
//       headers: { Authorization: "###" }
//     }).then((resp) => {
//       console.log(" ### ")
//     }).catch((error) => {
//       console.log(" ### ")
//     })
//   }
