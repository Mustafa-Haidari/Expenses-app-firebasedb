import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  const deleteItem = (item) => {
    props.deleteItem(item)
  }
  return (
    <div className='expenses-list'>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          title={item.title}
          amount={item.amount}
          date={item.date}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
