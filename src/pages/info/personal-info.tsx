import React from 'react';
import Link from 'next/link';
export default function PersonalInfo(): JSX.Element {
  return (
    <h1>
      Personal Info{' '}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h1>
  );
}
