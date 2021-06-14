import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //First Case
    setEnteredTitle(event.target.value);

    //Second Case: Below approach can lead to uneven prev state.
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});

    //Below approach is good but first case mostly we used.
    // setUserInput((prevState) => {
    //   return {...userInput, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    //});
    // setUserInput((prevState) => {
    //   return {...userInput, enteredAmount: event.target.value}
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    //  setUserInput((prevState) => {
    //   return {...userInput, enteredDate: event.target.value}
    // });
  };

  const submitHandler = (event) => {
    //Preventing submit and load.
    event.preventDefault();

    //Creating combined Object.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //Passing data back to parent component function.
    props.onSaveExpenseData(expenseData);
    //Clearing Data
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  let enable = false;
  const submitNewExpenseHandler = (event) => {
    enable = true;
  };

  return (
    <div>
      <form>
        <div className="new-expense__actions">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
