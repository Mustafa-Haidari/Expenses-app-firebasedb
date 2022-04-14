import { useState, useCallback, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

// const DUMMY_EXPENSES = [
//   {
//     id: 1,
//     title: "Car Insurance",
//     amount: 234.33,
//     date: new Date(2022, 1, 10),
//   },
//   {
//     id: 2,
//     title: "Bike Insurance",
//     amount: 54.0,
//     date: new Date(2021, 2, 8),
//   },
//   {
//     id: 3,
//     title: "House Insurance",
//     amount: 372.0,
//     date: new Date(2020, 7, 2),
//   },
// ];


function App() {

  const [expenseData, setExpenseData] = useState([])
  
  const fetchMoviesHandler = useCallback(async () => {
    try{
      const response = await fetch('https://react-http-6c238-default-rtdb.firebaseio.com/expenses.json');
      const data = await response.json();
      const loaded = [];

      for(const key in data){
        loaded.unshift({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: new Date(data[key].date),
        })
      }

      setExpenseData(loaded)

    } catch (err){
      console.log(err)
    }
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler, expenseData])


  const addExpenseHandler = async (newExpense) => {
    try {
      const response = await fetch('https://react-http-6c238-default-rtdb.firebaseio.com/expenses.json', {
      method: 'POST',
      body: JSON.stringify(newExpense),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();

    } catch (err){
      console.log(err)
    }
  }
  
  const deleteItem = async (item) => {
    
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} doIt={fetchMoviesHandler} />
      <Expenses deleteItem={deleteItem} items={expenseData} />
    </div>
  );
}

export default App;
