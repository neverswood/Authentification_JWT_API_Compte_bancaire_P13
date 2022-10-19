import {
  ChangeEvent,
  DetailedHTMLProps,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button } from '../../../component/Button/Button';
import { Input } from '../../../component/Input/Input';
import { InputCheckbox } from '../../../component/InputCheckbox/InputCheckbox';
import { login } from '../../../service/AuthService';
import './Form.scss';

export function Form({ setToken }: { setToken: any }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (remember) {
        localStorage.setItem('token', JSON.stringify(response.body.token));
        //toke,n
      }
      setToken(response.body.token);
      //#todo rendre le token disponible aux autre composant de l'application
      // rediriger vers la page de profil
    } catch (error) {
      console.log(error);
    }
  };

  console.log('email', email, 'mdp', password);
  //const log = login().then((response) => console.log(response))

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputName="input-wrapper"
        labelFor="username"
        labelText="Username"
        type="text"
        id="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        inputName="input-wrapper"
        labelFor="password"
        labelText="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputCheckbox
        inputName="input-remember"
        labelFor="remember-me"
        labelText="Remember me"
        type="checkbox"
        id="remember-me"
        checked={remember}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setRemember(e.target.checked);
        }}
      />
      <Button classButton="btn sign-in">Sign In</Button>
    </form>
  );
}
