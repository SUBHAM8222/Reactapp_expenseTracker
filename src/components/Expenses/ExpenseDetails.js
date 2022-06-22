import React from 'react';
import './ExpenseItems.css';
import './ExpenseDetails.css';
import Card from '../UI/Card';
const ExpenseDetails=(props)=>{

  /*const [amount,SetAmount]=useState(props.amount);*/
   //const [title,setTitle]=useState(props.title);

   //const clickHandler=()=>
  //{
//setTitle('updated');
//console.log(title);
  //}
  /*const ChangeValue=()=>{
    SetAmount('100');
  }*/


    return(

<Card className= 'expense-details'>
      <h2 className='expense-item' >{props.title}</h2>
        <div className='expense-item__price'>{props.amount}INR</div>
        <div className='expense-item__price'>{props.location}</div>
        
        {/*<button  onClick={ChangeValue}>Change amount</button>*/}
     
      </Card>


    )
}
export default ExpenseDetails;