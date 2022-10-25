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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../features/authSlice';

export function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (check) {
        localStorage.setItem('token', response.body.token as string);
        localStorage.setItem('email', email as string);
      }
      localStorage.setItem('token', response.body.token as string);
      dispatch(setToken(response.body.token));
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

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
        checked={check}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setCheck(e.target.checked);
        }}
      />
      <Button classButton="btn sign-in">Sign In</Button>
    </form>
  );
}
