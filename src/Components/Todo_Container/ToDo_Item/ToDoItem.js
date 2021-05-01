import React from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = (props) =>{
    const removeHandler =() =>{
        props.deleteTask(props.itemId)
    }
    
    const checkStatus = (e) =>{
        let status = false;
        if(e.target.checked){
            status = true;
        }else{
            status = false;
        }
        props.checkTaskStatus(props.itemId , status)
        return status;

       
    }
    return(
        <div className={`${styles.todo_item } ${props.status && styles.active}`}>
            <input onChange={checkStatus} type="checkbox" id={props.itemId} checked={props.status} />
            <label  htmlFor={props.itemId}>{props.name}</label>
            <button type="button" onClick={removeHandler}>x</button>
        </div>
    );
} 
export default ToDoItem;