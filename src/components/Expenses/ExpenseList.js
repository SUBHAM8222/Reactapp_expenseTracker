import React from "react";
import ExpenseItem from "./ExpenseItems";
import './ExpenseList.css';

const ExpensesList = (props) => {
  if (props.items.length ===0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>

  }
  if(props.items.length===1)
  {
    return(
      <ul className='expenses-list'>
     {props.items.map((expense) => (
       <ExpenseItem
         key={expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
         location={expense.location}
       />
     ))}
     <h2>ONLY SINGLE expenses here..please add more</h2>
   </ul>
   );
  }
  return(
     <ul className='expenses-list'>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ))}
  </ul>
  );
};

export default ExpensesList;
