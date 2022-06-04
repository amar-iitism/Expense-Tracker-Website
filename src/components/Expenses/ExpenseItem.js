/*import React, {useState} from 'react';*/
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    /*const[newTitle, setNewTitle] = useState(" ");

    const [title, setTitle] = useState(props.title);
     
    const clickHandler = () => {
        setTitle(newTitle);
    }

    const changeHandler = (event) => {
        setNewTitle(event.target.value);
    } */
   
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*<input type="text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}> Change Title </button>*/}
        </Card>
    );

}

export default ExpenseItem;