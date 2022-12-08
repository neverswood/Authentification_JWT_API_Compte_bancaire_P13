import { Form } from './Form/Form';
import './AutentificatorPage.scss';
import { Header } from '../../component/Header/Header';
import { NavSignIn } from '../../component/NavSignIn/NavSignIn';
import React from 'react';

export function AutentificatorPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <div id="errorMessage"></div>
          <Form />
        </section>
      </main>
    </React.Fragment>
  );
}