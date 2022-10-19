import { Form } from './Form/Form';
import './AutentificatorPage.scss';
import { Header } from '../../component/Header/Header';
import { NavSignIn } from '../../component/NavSignIn/NavSignIn';
import React from 'react';

export function AutentificatorPage() {
  /* if (!token) {
    return <Form setToken={setToken} />;
  }*/
  return (
    <React.Fragment>
      <Header navigation={<NavSignIn />} />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </React.Fragment>
  );
}
