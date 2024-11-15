import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactions}>
      <thead className={css.transactionHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, i) => {
          return (
            <tr key={transaction.id}>
              <Transaction
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
