import { Form } from './Form/Form';
import './AutentificatorPage.scss';
import { Header } from '../../component/Header/Header';
import { NavSignIn } from '../../component/NavSignIn/NavSignIn';
import React from 'react';
import { useSelector } from 'react-redux';

type State = {
  authentication: {
    user: string;
    token: string;
    error: string;
  };
};
export function AutentificatorPage() {
  const token = useSelector((state: State) => state.authentication.token);

  return (
    <React.Fragment>
      <Header navigation={<NavSignIn />} />
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
