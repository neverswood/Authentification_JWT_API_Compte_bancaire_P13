import React from 'react';
import { Header } from '../../component/Header/Header';
import { TransactionCard } from '../../component/TransactionCard/TransactionCard';
import { HeaderUserPage } from './HeaderUserPage/HeaderUserPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../../features/UserSlice';
import { getProfile } from '../../service/UserService';

type State = {
  authentication: {
    user: {
      firstName: string;
      lastName: string;
    };
    token: string;
  };
};

function RedirectLogin() {
  const navigate = useNavigate();
  navigate('/login');
  return <></>;
}

function UserPageWithToken({
  token,
  firstName,
  lastName,
}: {
  token: string;
  firstName: string;
  lastName: string;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile(token).then((response) => dispatch(setProfile(response)));
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <HeaderUserPage
          token={token}
          firstName={firstName}
          lastName={lastName}
        />
        <h2 className="sr-only">Accounts</h2>
        <TransactionCard
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <TransactionCard
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <TransactionCard
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </React.Fragment>
  );
}

export function UserPage() {
  const token = localStorage.getItem('token');
  const user = useSelector((state: State) => state.authentication.user);

  return token === null ? (
    <RedirectLogin />
  ) : (
    <UserPageWithToken
      token={token}
      firstName={user.firstName}
      lastName={user.lastName}
    />
  );
}
