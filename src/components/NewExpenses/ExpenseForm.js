import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [newtitle, changetitle] = useState("");
  const [newamount, changeamount] = useState("");
  const [newdate, changedate] = useState("");
  const [newplace, placechanged] = useState("");

  //const [userinput,setUserinput]=useState({
  // title:'',
  //amount:'',
  //date:'',
  //place:'',
  //})
  const titlechange = (event) => {
    changetitle(event.target.value);
    //setUserinput({
    //  ...userinput,
    //  title:event.target.value,
    //})
    //setUserinput((prevState)=>
    //{
    //return {...prevState,title:event.target.value};
    // });
  };
  const amountchange = (event) => {
    changeamount(event.target.value);
    //// setUserinput({
    //...userinput,
    //amount:event.target.value,
    // })
  };
  const datechange = (event) => {
    changedate(event.target.value);
    //setUserinput({
    // ...userinput,
    //  datechange:event.target.value,
    //})
  };
  const placechange = (event) => {
    placechanged(event.target.value);
    //setUserinput({
    ////...userinput,
    //place:event.target.value,
    //})
  };
  const submit = (event) => {
    event.preventDefault();
    const updateExpense = {
      title: newtitle,
      amount: +newamount,
      date: new Date(newdate),
      location: newplace,
    };
    props.onsaveExpenseData(updateExpense);
    changetitle("");
    changeamount("");
    changedate("");
    placechanged("");
  };

  return (
    <form onSubmit={submit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newtitle} onChange={titlechange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={newamount}
            onChange={amountchange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-12"
            value={newdate}
            onChange={datechange}
          />
        </div>
        <div className="new-expense__control">
          <label>place</label>
          <input type="text" value={newplace} onChange={placechange} />
        </div>
        <div className="new-expense__actions">
          <button type='button' onClick={props.oncancel}>Cancel</button>
          <button type="submit">ADD EXPENSE</button>
          
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
