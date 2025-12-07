import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <span className="text">{transaction.text}</span>
      <span className="amount">
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        ×
      </button>
    </li>
  );
};

export default TransactionItem;
