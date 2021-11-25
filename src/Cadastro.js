import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';
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

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Título">
          <Input placeholder="Título" />
        </Form.Item>
        <Form.Item label="Descrição">
          <Input placeholder="Descrição" />
        </Form.Item>
        <Form.Item label="Valor">
          <InputNumber placeholder="Valor" />
        </Form.Item>
        <Form.Item label="Formas de Pagamento">
          <Select mode="multiple">
            <Select.Option value="Cartão">Cartão</Select.Option>
            <Select.Option value="dinheiro">Dinheiro</Select.Option>
            <Select.Option value="PayPal">PayPal</Select.Option>
            <Select.Option value="Pix">Pix</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Prazo">
          <DatePicker />
        </Form.Item>
        <Form.Item label="">
          <Button>Enviar</Button>
        </Form.Item>
      </Form>
    </>
  );
};
class Cadastro extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <img src={'./img/all.'} className="logo" alt="" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item
              onClick={this.props.irParaCards}
              key="1"
              icon={<PieChartOutlined />}
            >
              Cards
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
              <FormSizeDemo />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Cadastro;
