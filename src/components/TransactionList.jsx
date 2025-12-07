import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <h3 className="section-title">History</h3>
      <hr className="section-divider" />

      {transactions.length === 0 ? (
        <p className="empty-text">No transactions yet.</p>
      ) : (
        <ul className="list">
          {transactions.map((t) => (
            <TransactionItem
              key={t.id}
              transaction={t}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionList;
