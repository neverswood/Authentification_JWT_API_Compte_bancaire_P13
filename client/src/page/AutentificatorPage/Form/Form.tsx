import { Button } from '../../../component/Button/Button';
import { Input } from '../../../component/Input/Input';

export function Form() {
  return (
    <form>
      <Input
        inputName="input-wrapper"
        labelFor="username"
        labelText="Username"
        type="text"
        id="username"
      />
      <Input
        inputName="input-wrapper"
        labelFor="password"
        labelText="Password"
        type="password"
        id="password"
      />
      <Input
        inputName="input-remember"
        labelFor="remember-me"
        labelText="Remember me"
        type="checkbox"
        id="remember-me"
      />
      <Button classButton="btn sign-in">Sign In</Button>
    </form>
  );
}
