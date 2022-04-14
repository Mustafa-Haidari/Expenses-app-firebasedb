import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const makeId = lengthOfID => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i =0; i<lengthOfID; i++){
        result+= characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

const NewExpense = (props) => {
    const [formDisplay, setFormDisplay] = useState(false)

    const displayForm = () => {
        setFormDisplay(true)
    }

    const hideForm = () => {
        setFormDisplay(false)
    }

    const addExpenseHandler = (expense) => {
      const newExpense = {
        ...expense,
        id: makeId(5) + "-" + makeId(5),
      };
      props.addExpenseHandler(newExpense);
    };

    const doIt = () => {
        props.doIt();
        console.log('here')
    }
  return (
    <div className="new-expense">
        {formDisplay !== true ? <button onClick={displayForm}>Add New Expense</button> :
        <ExpenseForm hideForm={hideForm} addExpenseHandler={addExpenseHandler} doIt={doIt} />}
    </div>
  )
}

export default NewExpense