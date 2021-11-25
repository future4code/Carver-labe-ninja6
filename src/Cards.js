import React from "react";
import { Card } from 'antd';
import { Row, Col, Select } from 'antd';
import { Layout, Menu, Breadcrumb, InputNumber,Input, Space } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import '../src/App.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const { Option } = Select;

function onChange(value) {
  console.log('changed', value);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}



class Cards extends React.Component {
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
            <Menu.Item onClick={this.props.irParaCadastro} key="1" icon={<PieChartOutlined />}>
              Cadastro
            </Menu.Item>
            <Menu.Item onClick={this.props.irParaHome} key="2" icon={<DesktopOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item onClick={this.props.irParaCarrinho} key="3" icon={<PieChartOutlined />}>
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
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}  >
          <Input size="large" placeholder="Buscar" prefix={<SearchOutlined />} style={{ margin: '0 16px', width: '500px' }} />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24,  }}>
            {/* <Row> */}
              {/* <Space align="center"> */}
                <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }} >
                  <div style={{ textAlign: 'center', padding: 0 , }}>
                    <Select
                      showSearch
                      style={{ width: 140 }}
                      placeholder="Filtrar"
                      optionFilterProp="children"
                      // onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="Preço Crescente">Preço Crescente</Option>
                      <Option value="Preço Decrescente">Preço Decrescente</Option>
                      <Option value="Titulo">Título</Option>
                      <Option value="Prazo">Prazo</Option>
                    </Select>
                    <InputNumber
                      placeholder="Mínimo"
                      min={0} max={9000}
                      onChange={onChange} />
                    <InputNumber
                      placeholder="Máximo"
                      min={0} max={9000}
                      onChange={onChange} />
                  </div>
                </Header>
                {/* </Space> */}
                {/* </Row> */}
              <Row gutter={[16, 24]} style={{ padding: 24,  }}>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://exame.com/wp-content/uploads/2021/05/GettyImages-938677744.jpg" />}
                  >
                    <Meta title="Hacker"
                      description="Ver Detalhes" />
                    <b>R$: 7.795,25</b>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
} export default Cards