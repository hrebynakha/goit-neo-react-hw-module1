import css from "./Transaction.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </>
  );
};

export default Transaction;
