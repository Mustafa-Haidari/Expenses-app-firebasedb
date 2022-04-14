import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  const [filterYear, setFilterYear] = useState("2022");

  const filteredExpenses = items.filter(item => item.date.getFullYear().toString() === filterYear)


  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  
  const deleteItem = (item) => {
    props.deleteItem(item)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} changeFilterHandler={changeFilterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList deleteItem={deleteItem} items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
