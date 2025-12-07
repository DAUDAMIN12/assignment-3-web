import React from "react";

const IncomeExpenses = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div className="inc-box">
        <h4>INCOME</h4>
        <p className="money plus">${income}</p>
      </div>

      <div className="divider" />

      <div className="exp-box">
        <h4>EXPENSE</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
