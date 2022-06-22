import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [IsEditing, SetIsEditing] = useState(false);

  const saveExpenseDatHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      
    };
    props.onAddExpense(expenseData);
    
    SetIsEditing(false);

  };
  const statrteditinghandler = () => {
    SetIsEditing(true);
  };
  const stopeditingHandler = () => {
    SetIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!IsEditing && (
        <button onClick={statrteditinghandler}>ADD NEW EXPENSES</button>
      )}
      {IsEditing && (
        <ExpenseForm
          onsaveExpenseData={saveExpenseDatHandler}
          oncancel={stopeditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
