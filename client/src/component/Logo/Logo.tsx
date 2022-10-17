import logo from '../../assets/argentBankLogo.png';
import './Logo.scss';

export function Logo() {
  return (
    <a className="main-nav-logo" href="/">
      <img className="main-nav-logo__image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
  );
}
