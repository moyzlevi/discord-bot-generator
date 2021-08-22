import React from 'react';
import { Container, ImageContainer } from '../styles/pages/home';
import Link from 'next/link';

const Home: React.FC = () => (
  <Container>
    <h1 className="title">
      Read{' '}
      <Link href="/info/personal-info">
        <a>Other page</a>
      </Link>{' '}
    </h1>
  </Container>
);

export default Home;
