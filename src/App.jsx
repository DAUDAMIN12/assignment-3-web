import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

const LOCAL_STORAGE_KEY = "expense_tracker_transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when transactions change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  // Derived values
  const amounts = transactions.map((t) => t.amount);
  const balance = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  // Handlers
  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: Date.now(),
      text: text.trim(),
      amount: +parseFloat(amount),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Balance balance={balance} />
        <IncomeExpenses income={income} expense={expense} />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;
