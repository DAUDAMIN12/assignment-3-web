import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;

    addTransaction(text, amount);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3 className="section-title">Add new transaction</h3>
      <hr className="section-divider" />

      <form onSubmit={onSubmit} className="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <span className="hint">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
