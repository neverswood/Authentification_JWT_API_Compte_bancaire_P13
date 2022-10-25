import { useSelector } from 'react-redux';

type State = {
  authentication: {
    user: string;
    token: string;
  };
};
export function NavConnect() {
  const user = useSelector((state: State) => state.authentication.user);
  return (
    <div>
      <a className="main-nav-item" href="/user">
        <i className="fa fa-user-circle"></i>
        {user}
      </a>
      <a className="main-nav-item" href="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </a>
    </div>
  );
}
