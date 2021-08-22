import React from 'react';
import { Container, ImageContainer } from '../styles/pages/home';
import Link from 'next/link';
import Image from 'next/image';
import Gravatar from '../assets/images/gravatar.jpg';

const Home: React.FC = () => (
  <Container>
    <h1 className="title">
      <Image src={Gravatar} alt="Your Name" />
      Read{' '}
      <Link href="/info/personal-info">
        <a>Other page</a>
      </Link>{' '}
    </h1>
  </Container>
);

export default Home;
