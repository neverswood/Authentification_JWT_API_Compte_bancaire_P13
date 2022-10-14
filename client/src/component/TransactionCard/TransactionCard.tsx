import { Button } from '../Button/Button';
import './TransactionCard.scss';

type TransactionCardType = {
  title: string;
  amount: string;
  description: string;
};

export function TransactionCard({
  title,
  amount,
  description,
}: TransactionCardType) {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__content-wrapper__title">{title}</h3>
        <p className="account__content-wrapper__amount">{amount}</p>
        <p className="account__content-wrapper__description">{description}</p>
      </div>
      <div className="account__cta">
        <Button classButton="transaction-button" text="View transactions" />
      </div>
    </section>
  );
}
