import { Layout, Menu, Form, Input, Select, Button, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Component } from "react";
import { createElement } from "react";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

class DataPendukung extends Component {
   state = {
      collapsed: false,
   };

   toggle = () => {
      this.setState({
         collapsed: !this.state.collapsed,
      });
   };

   render() {
      return (
         <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
               <div className="logo" />
               <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                     nav 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                     nav 2
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                     nav 3
                  </Menu.Item>
               </Menu>
            </Sider>
            <Layout className="site-layout">
               <Header className="site-layout-background" style={{ padding: 0 }}>
                  {createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                     className: "trigger",
                     onClick: this.toggle,
                  })}
               </Header>
               <Content
                  className="site-layout-background"
                  style={{
                     margin: "24px 16px",
                     padding: 24,
                     minHeight: 280,
                  }}
               >
                  <Title level={4}>Data Pendukung</Title>
                  <Form name="basic" labelCol={{ span: 9 }} wrapperCol={{ span: 10 }} initialValues={{ remember: true }} autoComplete="off">
                     <Form.Item label="Alamat Rumah" name="alamat_rumah" rules={[{ required: true, message: "Silahkan isi alamat rumah!" }]}>
                        <TextArea rows={4} />
                     </Form.Item>

                     <Form.Item label="Luas Rumah" name="luas_rumah" rules={[{ required: true, message: "Silahkan isi luas rumah!" }]}>
                        <Input type="number" />
                     </Form.Item>

                     <Form.Item label="Harga Rumah" name="harga_rumah" rules={[{ required: true, message: "Silahkan isi harga rumah!" }]}>
                        <Input type="number" />
                     </Form.Item>

                     <Form.Item label="Jangka Pembayaran" name="jangka_pembayaran_thn" rules={[{ required: true, message: "Silahkan pilih jangka pembayaran!" }]}>
                        <Select placeholder="Jangka Pembayaran">
                           <Select.Option value="5">5</Select.Option>
                           <Select.Option value="10">10</Select.Option>
                           <Select.Option value="15">15</Select.Option>
                           <Select.Option value="20">20</Select.Option>
                           <Select.Option value="25">25</Select.Option>
                        </Select>
                     </Form.Item>

                     <Form.Item label="Dokumen Pendukung" name="dokumen_pendukung" rules={[{ required: true, message: "Silahkan pilih dokumen pendukung!" }]}>
                        <input type="file" required />
                     </Form.Item>

                     <div style={{ textAlign: "center", marginTop: "30px" }}>
                        <Form.Item wrapperCol={{ offset: 5, span: 10 }}>
                           <Button type="primary" htmlType="submit">
                              Setuju dan Lanjutkan
                           </Button>
                        </Form.Item>
                     </div>
                  </Form>
               </Content>
            </Layout>
         </Layout>
      );
   }
}

export default DataPendukung;
