import { Banner } from '../../component/Banner/Banner';
import { Features } from './Features/Features';
import { Slogan } from './Slogan/Slogan';
import tree from '../../assets/bank-tree.jpeg';
import { Header } from '../../component/Header/Header';
import React from 'react';

export function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner src={tree}>
          <Slogan />
        </Banner>
        <Features />
      </main>
    </React.Fragment>
  );
}
