import React from 'react';
import { Card } from 'antd';
import { Row, Col, Select } from 'antd';
import { Layout, Menu, Breadcrumb, InputNumber, Input, Space } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import '../src/App.css';
import Item from 'antd/lib/list/Item';
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

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const cardsRenderizados = this.props.servicos
      .filter((item) => {
        return item.title
          .toLowerCase()
          .includes(this.props.pesquisa.toLowerCase());
      })
      .filter((item) => {
        return this.props.precoMin === '' || item.price >= this.props.precoMin;
      })
      .filter((item) => {
        return this.props.precoMax === '' || item.price <= this.props.precoMax;
      })
      .map((item) => {
        return (
          <Col className="gutter-row" span={6}>
            <Card hoverable style={{ width: 240, textAlign: 'center' }} key={item.id}>
              <Meta title={item.title} />
              <p>{item.price}</p>
              <button onClick={() => { this.props.onClickDetail(item)} }>Ver detalhe</button>
              <button onClick={() => { this.props.onClickAdicionarAoCarrinho(item.id) }}>Adicionar ao Carrinho</button>
            </Card>
          </Col>
        );
      });

    // .sort((currentItem, nextItem) => {
    //   if (this.state.sortingParameter === 'name') {
    //     return this.state.order * currentItem.name.localeCompare(nextItem.name)
    //   } else {
    //     return this.state.order * (currentItem.value - nextItem.value)
    //   }
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
            style={{ padding: 0, textAlign: 'center' }}
          >
            <Input
              size="large"
              placeholder="Buscar"
              onChange={this.props.onChangeBuscar}
              prefix={<SearchOutlined />}
              style={{ margin: '0 16px', width: '500px' }}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24 }}>
              {/* <Row> */}
              {/* <Space align="center"> */}
              <Header
                className="site-layout-background"
                style={{ padding: 0, textAlign: 'center' }}
              >
                <div style={{ textAlign: 'center', padding: 0 }}>
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
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Pre??o Crescente">Pre??o Crescente</Option>
                    <Option value="Pre??o Decrescente">Pre??o Decrescente</Option>
                    <Option value="Titulo">T??tulo</Option>
                    <Option value="Prazo">Prazo</Option>
                  </Select>
                  <InputNumber
                    placeholder="M??nimo"
                    min={0}
                    max={9000}
                    value={this.props.precoMin}
                    onChange={this.props.onChangePrecoMin}
                  />
                  <InputNumber
                    placeholder="M??ximo"
                    min={0}
                    max={9000}
                    // defaultValue={9000}
                    value={this.props.precoMax}
                    onChange={this.props.onChangePrecoMax}
                  />
                </div>
              </Header>
              <Row gutter={[16, 24]} style={{ padding: 24 }}>
                {cardsRenderizados}
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Carver</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Cards;
