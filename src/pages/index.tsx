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
        <Layout.Sider className="Sider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus ducimus
          facere aliquam autem soluta dicta perspiciatis blanditiis voluptas, necessitatibus
          reiciendis sequi vel numquam. Commodi, libero ratione! Enim voluptatem illo ullam,
          repudiandae, esse fugiat minima perspiciatis, expedita officia quidem neque!
        </Layout.Sider>
        <Layout.Content className="Content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim dolorem illum
          temporibus architecto expedita ad voluptatum, sit sapiente eos, voluptatibus sequi
          pariatur! Veritatis voluptas dignissimos, ab cum sequi voluptate et consequuntur
          accusantium porro fugit magni. Dolorem, nihil vero nemo minima vitae iure optio asperiores
          eius cupiditate reprehenderit consequatur necessitatibus?
        </Layout.Content>
      </Layout>
      {/* <Layout.Footer>footer</Layout.Footer> */}
    </Layout>
  </Container>
);

export default Home;
