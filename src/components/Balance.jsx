import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="balance-box">
      <span className="balance-label">YOUR BALANCE</span>
      <h1 className="balance-amount">${Number(balance).toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
