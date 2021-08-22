import React from 'react';
import { Container } from '../styles/pages/home';
import Link from 'next/link';
import Image from 'next/image';
import Gravatar from '../assets/images/gravatar.jpg';
import { Layout, Header, Sider, Content, Footer } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const Home: React.FC = () => (
  <>
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default Home;
