import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

  const [enteredExpense, setEnteredExpense] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
  })

  const titleChangeHandler = (e) => {
    //   setEnteredTitle(e.target.value)
    //   setEnteredExpense({
    //       ...enteredExpense,
    //       enteredTitle: e.target.value
    //   })
    setEnteredExpense((prevState) => {
        return {...prevState, enteredTitle: e.target.value}
    })
  };
  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value)
    setEnteredExpense((prevState) => (
        {...prevState, enteredAmount: e.target.value}
    ))
};
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value)
    setEnteredExpense((prevState) => (
        {...prevState, enteredDate: e.target.value}
    ))
};

  const formSubmitHandler = (e) => {
      e.preventDefault();
      const expense = {
          title: enteredExpense.enteredTitle,
          amount: +enteredExpense.enteredAmount,
          date: new Date(enteredExpense.enteredDate)
      }
      props.addExpenseHandler(expense)
      props.doIt();
      enteredExpense.enteredTitle = ''
      enteredExpense.enteredAmount = ''
      enteredExpense.enteredDate = ''
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpense.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredExpense.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enteredExpense.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.hideForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
