import { Header } from '../../component/Header/Header';
import { NavConnect } from '../../component/NavConnect/NavConnect';
import { TransactionCard } from '../../component/TransactionCard/TransactionCard';
import { HeaderUserPage } from './HeaderUserPage/HeaderUserPage';

export function UserPage() {
  return (
    <body>
      <Header navigation={<NavConnect />} />
      <main className="main bg-dark">
        <HeaderUserPage />
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
    </body>
  );
}
