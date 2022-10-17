import { Form } from './Form/Form';
import './AutentificatorPage.scss';
import { Header } from '../../component/Header/Header';
import { NavSignIn } from '../../component/NavSignIn/NavSignIn';

export function AutentificatorPage() {
  return (
    <body>
      <Header navigation={<NavSignIn />} />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </body>
  );
}
