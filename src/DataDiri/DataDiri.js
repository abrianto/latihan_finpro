import { Layout, Menu, Form, Input, Select, Button, Typography, DatePicker, Radio, Alert, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Component } from "react";
import { createElement } from "react";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

class DataDiri extends Component {
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
               <Title style={{ margin: "10px 0px -10px 20px" }} level={3}>
                  Form Pengajuan KPR
               </Title>
               <Content
                  className="site-layout-background"
                  style={{
                     margin: "24px 16px",
                     padding: 24,
                     minHeight: 280,
                  }}
               >
                  <Title level={4} style={{ marginBottom: "25px" }}>
                     Data Pemohon KPR
                  </Title>

                  <Form name="basic" labelCol={{ span: 9 }} wrapperCol={{ span: 10 }} initialValues={{ remember: true }} autoComplete="off">
                     <Row>
                        <Col span={12}>
                           <Form.Item label="Nomor Induk KTP" name="nik" rules={[{ required: true, message: "Silahkan isi NIK!" }]}>
                              <Input type="number" />
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item label="Jenis Pekerjaan" name="jenis_pekerjaan" rules={[{ required: true, message: "Silahkan pilih jenis pekerjaan!" }]}>
                              <Select placeholder="Jenis Pekerjaan">
                                 <Select.Option value="pns">Pegawai Negeri</Select.Option>
                                 <Select.Option value="swasta">Pegawai Swasta</Select.Option>
                                 <Select.Option value="BUMN/BUMD">BUMN/BUMD</Select.Option>
                                 <Select.Option value="pengusaha">Pengusaha</Select.Option>
                                 <Select.Option value="pekerjaan_lepas">Pekerja Lepas</Select.Option>
                              </Select>
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col span={12}>
                           <Form.Item label="Nama Lengkap" name="fullname" rules={[{ required: true, message: "Silahkan isi Nama Lengkap!" }]}>
                              <Input type="text" />
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item label="Pendapatan per Bulan" name="pendapatan" rules={[{ required: true, message: "Silahkan isi pendapatan per bulan!" }]}>
                              <Input type="number" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col span={12}>
                           <Form.Item rules={[{ required: true }]} label="Tempat, Tanggal Lahir">
                              <Input.Group compact>
                                 <Form.Item name={["ttl", "tempat"]} noStyle rules={[{ required: true, message: "Silahkan isi Tempat Lahir!" }]}>
                                    <Input style={{ width: "50%" }} name="tempat" />
                                 </Form.Item>
                                 <Form.Item name={["ttl", "tanggal"]} noStyle rules={[{ required: true, message: "Silahkan isi tanggal Lahir!" }]}>
                                    <DatePicker style={{ width: "50%" }} name="tgl_lahir" />
                                 </Form.Item>
                              </Input.Group>
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item label="Bukti selfie dengan KTP" name="ktp" rules={[{ required: true }]}>
                              <input type="file" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col span={12}>
                           <Form.Item label="Status Pernikahan" name="status_pernikahan" rules={[{ required: true, message: "Silahkan pilih status pernikahan!" }]}>
                              <Radio.Group name="radiogroup">
                                 <Radio value={1}>Single</Radio>
                                 <Radio value={2}>Menikah</Radio>
                                 <Radio value={3}>Duda/Janda/Cerai</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item label="Bukti Slip Gaji" name="gaji" rules={[{ required: true }]}>
                              <input type="file" required />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row>
                        <Col span={12}>
                           <Form.Item label="Alamat Domisili" name="alamat" rules={[{ required: true, message: "Silahkan isi alamat domisili!" }]}>
                              <TextArea rows={3} />
                           </Form.Item>
                        </Col>
                     </Row>

                     <Alert
                        style={{ textAlign: "center" }}
                        description="Setelah Anda berhasil melanjutkan proses pengecekan ini, Anda tidak dapat mengubah data-data yang ada pada form ini."
                        type="warning"
                     />

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

export default DataDiri;
