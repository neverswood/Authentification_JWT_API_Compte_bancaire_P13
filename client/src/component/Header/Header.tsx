import { Logo } from '../Logo/Logo';
import './Header.scss';

export function Header({ navigation }: { navigation: any }) {
  return (
    <nav className="main-nav">
      <Logo />
      {navigation}
    </nav>
  );
}
