import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Container } from '../styles/pages/home';
const Home: React.FC = () => (
  <Container>
    <Layout>
      <Layout.Header>
        <h1>Discord Bot Builder</h1>
      </Layout.Header>
      <Layout>
        <Layout.Sider>left sidebar</Layout.Sider>
        <Layout.Content>main content</Layout.Content>
      </Layout>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  </Container>
);

export default Home;
