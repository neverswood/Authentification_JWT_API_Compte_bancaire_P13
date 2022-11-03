import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { State } from '../../Store';
import { Button } from '../Button/Button';
import './Logo.scss';

export function Logo() {
  const navigate = useNavigate();
  const check = useSelector((state: State) => state.authentication.check);
  const redirect = () => {
    if (!check) {
      localStorage.clear();
    }
    navigate('/');
  };
  return (
    <Button classButton="main-nav-logo" click={redirect}>
      <img className="main-nav-logo__image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Button>
  );
}
